from flask_restx import Namespace, Resource, fields
from models import Product
from flask_jwt_extended import jwt_required
from flask import request

product_ns = Namespace('product', description='Product related operations')

product_model = product_ns.model(
    "Product",
    {
        "id": fields.Integer(),
        "labels": fields.String(),
        "category": fields.String(),
        "img": fields.String(),
        "hover_img": fields.String(),
        "title": fields.String(),
        "price": fields.Float(),
        "description": fields.String(),
        "rating_rate": fields.Float(),
        "rating_count": fields.Integer(),
    },
)


@product_ns.route("/hello")
class HelloResource(Resource):
    def get(self):
        return {"message": "Hello World"}


@product_ns.route("/products")
class ProductsResource(Resource):
    @product_ns.marshal_list_with(product_model)
    def get(self):
        """Get all products"""
        products = Product.query.all()
        return products

    @product_ns.marshal_with(product_model)
    @product_ns.expect(product_model)
    @jwt_required()
    def post(self):
        """Create a new product"""
        data = request.get_json()

        new_product = Product(
            labels=data.get("labels"),
            category=data.get("category"),
            img=data.get("img"),
            hover_img=data.get("hover_img"),
            title=data.get("title"),
            price=data.get("price"),
            description=data.get("description"),
            rating_rate=data.get("rating_rate"),
            rating_count=data.get("rating_count")
        )

        new_product.save()

        return new_product, 201


@product_ns.route("/product/<int:id>")
class ProductResource(Resource):
    @product_ns.marshal_with(product_model)
    def get(self, id):
        """Get a product by id"""
        product = Product.query.get_or_404(id)
        return product

    @product_ns.marshal_with(product_model)
    @jwt_required()
    def put(self, id):
        """Update a product by id"""
        product_to_update = Product.query.get_or_404(id)

        data = request.get_json()

        product_to_update.update(
            labels=data.get("labels"),
            category=data.get("category"),
            img=data.get("img"),
            hover_img=data.get("hover_img"),
            title=data.get("title"),
            price=data.get("price"),
            description=data.get("description"),
            rating_rate=data.get("rating_rate"),
            rating_count=data.get("rating_count")
        )

        return product_to_update

    @product_ns.marshal_with(product_model)
    @jwt_required()
    def delete(self, id):
        """Delete a product by id"""
        product_to_delete = Product.query.get_or_404(id)
        product_to_delete.delete()
        return product_to_delete
