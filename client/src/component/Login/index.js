import { useSelector, useDispatch } from "react-redux";
import Swal from "sweetalert2";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import Image from "../../assets/img/product-image/product11.png";
import { login } from "../../auth";

const LoginArea = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const history = useHistory();

  const loginUser = (data) => {
    console.log(data);

    const requestOptions = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    };

    fetch("/auth/login", requestOptions)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.access_token);

        if (data.access_token) {
          login(data.access_token);

          history.push("/home");
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Login Failed',
            text: 'Invalid username or password',
          });
        }
      });

    reset();
  };
  return (
    <>
      <section id="login_area">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-lg-5 col-md-12">
              <img src={Image} alt="Product 12" />
            </div>
            <div className="col-lg-6 offset-lg-1 col-md-12 col-sm-12">
              <div className="account_form">
                <h3>Login</h3>
                <form>
                  <Form.Group className="default-form-box">
                    <Form.Label>Username <span className="text-danger">*</span></Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Your username"
                      {...register("username", {
                        required: true,
                        maxLength: 25,
                      })}
                    />
                  </Form.Group>
                  {errors.username && (
                    <p style={{ color: "red" }}>
                      <small>Username is required</small>
                    </p>
                  )}
                  {errors.username?.type === "maxLength" && (
                    <p style={{ color: "red" }}>
                      <small>Username should be 25 characters</small>
                    </p>
                  )}
                  <br></br>

                  <Form.Group className="default-form-box">
                    <Form.Label>Password <span className="text-danger">*</span></Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Your password"
                      {...register("password", {
                        required: true,
                        minLength: 8,
                      })}
                    />
                  </Form.Group>
                  {errors.username && (
                    <p style={{ color: "red" }}>
                      <small>Password is required</small>
                    </p>
                  )}
                  {errors.password?.type === "maxLength" && (
                    <p style={{ color: "red" }}>
                      <small>Password should be more than 8 characters</small>
                    </p>
                  )}
                  <br></br>
                  <Form.Group className="login_submit">
                    <Button
                        className="theme-btn-one btn-black-overlay btn_md"
                      as="sub"
                      onClick={handleSubmit(loginUser)}
                    >
                      Login
                    </Button>
                  </Form.Group>
                  <br></br>
                  <Form.Group>
                    <div className="remember_area">
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="materialUnchecked"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="materialUnchecked"
                        >
                          Remember me
                        </label>
                      </div>
                    </div>
                  </Form.Group>
                  <Form.Group>
                    <small>
                      Do not have an account?{" "}
                      <Link to="/register">Create One</Link>
                    </small>
                  </Form.Group>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginArea;
