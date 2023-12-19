import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Image from "../../assets/img/product-image/product11.png";
import Swal from "sweetalert2";

const RegisterArea = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [show, setShow] = useState(false);
  const [serverResponse, setServerResponse] = useState("");

  const submitForm = (data) => {
    if (data.password === data.confirmPassword) {
      const body = {
        username: data.username,
        email: data.email,
        password: data.password,
      };

      const requestOptions = {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(body),
      };

      fetch("/auth/signup", requestOptions)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setServerResponse(data.message);
          setShow(true);
          Swal.fire({
            icon: "success",
            title: "Sign Up Successful",
            text: data.message,
            onClose: () => {
              reset();
            },
          });
        })
        .catch((err) => {
          console.log(err);
          // Gantikan alert dengan SweetAlert untuk menangani error
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "An error occurred during sign up",
          });
        });

      reset();
    } else {
      Swal.fire({
        icon: "error",
        title: "Password Mismatch",
        text: "Passwords do not match",
      });
    }
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
                {show ? (
                  <>
                    <Alert
                      variant="success"
                      onClose={() => {
                        setShow(false);
                      }}
                      dismissible
                    >
                      <p>{serverResponse}</p>
                    </Alert>

                    <h3>Register</h3>
                  </>
                ) : (
                  <h3>Register</h3>
                )}
                <form>
                  <Form.Group className="default-form-box">
                    <Form.Label>
                      Username <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Your username"
                      {...register("username", {
                        required: true,
                        maxLength: 25,
                      })}
                    />

                    {errors.username && (
                      <small style={{ color: "red" }}>
                        Username is required
                      </small>
                    )}
                    {errors.username?.type === "maxLength" && (
                      <p style={{ color: "red" }}>
                        <small>Max characters should be 25 </small>
                      </p>
                    )}
                  </Form.Group>
                  <br></br>
                  <Form.Group className="default-form-box">
                    <Form.Label>
                      Email <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Your email"
                      {...register("email", { required: true, maxLength: 80 })}
                    />

                    {errors.email && (
                      <p style={{ color: "red" }}>
                        <small>Email is required</small>
                      </p>
                    )}

                    {errors.email?.type === "maxLength" && (
                      <p style={{ color: "red" }}>
                        <small>Max characters should be 80</small>
                      </p>
                    )}
                  </Form.Group>
                  <br></br>
                  <Form.Group className="default-form-box">
                    <Form.Label>
                      Password <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Your password"
                      {...register("password", {
                        required: true,
                        minLength: 8,
                      })}
                    />

                    {errors.password && (
                      <p style={{ color: "red" }}>
                        <small>Password is required</small>
                      </p>
                    )}
                    {errors.password?.type === "minLength" && (
                      <p style={{ color: "red" }}>
                        <small>Min characters should be 8</small>
                      </p>
                    )}
                  </Form.Group>
                  <br></br>
                  <Form.Group className="default-form-box">
                    <Form.Label>
                      Confirm Password <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Your password"
                      {...register("confirmPassword", {
                        required: true,
                        minLength: 8,
                      })}
                    />
                    {errors.confirmPassword && (
                      <p style={{ color: "red" }}>
                        <small>Confirm Password is required</small>
                      </p>
                    )}
                    {errors.confirmPassword?.type === "minLength" && (
                      <p style={{ color: "red" }}>
                        <small>Min characters should be 8</small>
                      </p>
                    )}
                  </Form.Group>
                  <br></br>
                  <Form.Group className="login_submit">
                    <Button
                      as="sub"
                      className="theme-btn-one btn-black-overlay btn_md"
                      onClick={handleSubmit(submitForm)}
                    >
                      SignUp
                    </Button>
                  </Form.Group>
                  <br></br>
                  <Form.Group>
                    <small>
                      Already have an account, <Link to="/">Log In</Link>
                    </small>
                  </Form.Group>
                  <br></br>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RegisterArea;
