from flask_restx import Resource, Namespace, fields
from models import Admin
from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import (
    JWTManager,
    create_access_token,
    create_refresh_token,
    get_jwt_identity,
    jwt_required,
)
from flask import Flask, request, jsonify, make_response


authadm_ns = Namespace("authadm", description="A namespace for our Authentication")


signupadm_model = authadm_ns.model(
    "SignUpadm",
    {
        "username": fields.String(),
        "email": fields.String(),
        "password": fields.String()
    },
)


loginadm_model = authadm_ns.model(
    "Loginadm", {"username": fields.String(), "password": fields.String()}
)


@authadm_ns.route("/signupadm")
class SignUpadm(Resource):
    @authadm_ns.expect(signupadm_model)
    def post(self):
        data = request.get_json()

        username = data.get("username")

        db_user = Admin.query.filter_by(username=username).first()

        if db_user is not None:
            return jsonify({"message": f"Admin with username {username} already exists"})

        new_user = Admin(
            username=data.get("username"),
            email=data.get("email"),
            password=generate_password_hash(data.get("password"))
        )

        new_user.save()

        return make_response(jsonify({"message": "Admin created successfuly"}),201)


@authadm_ns.route("/loginadm")
class Loginadm(Resource):
    @authadm_ns.expect(loginadm_model)
    def post(self):
        data = request.get_json()

        username = data.get("username")
        password = data.get("password")

        db_user = Admin.query.filter_by(username=username).first()

        if db_user and check_password_hash(db_user.password, password):

            access_token = create_access_token(identity=db_user.username)
            refresh_token = create_refresh_token(identity=db_user.username)

            return jsonify(
                {"access_token": access_token, "refresh_token": refresh_token}
            )

        else:
            return jsonify({"message": "Invalid username or password"})

@authadm_ns.route("/refreshadm")
class RefreshResource(Resource):
    @jwt_required(refresh=True)
    def post(self):

        current_user = get_jwt_identity()

        new_access_token = create_access_token(identity=current_user)

        return make_response(jsonify({"access_token": new_access_token}), 200)