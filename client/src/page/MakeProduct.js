import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import Navbar from "../component/Navbar";


const MakeProduct = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();
      const [show, setShow] = useState(false);
    
      const createProduct = (data) => {
        console.log(data);
    
        const token = localStorage.getItem("REACT_TOKEN_AUTH_KEY");
        console.log(token);
    
        const requestOptions = {
          method: "POST",
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${JSON.parse(token)}`,
          },
          body: JSON.stringify(data),
        };
    
        fetch("/product/products", requestOptions)
          .then((res) => res.json())
          .then((data) => {
            reset();
            Swal.fire({
                icon: 'success',
                title: 'Produk Berhasil ditambah',
                text: data.message,
                onClose: () => {
                  reset();
                }
              });
          })
          .catch((err) => console.log(err));
      };
    
      return (
        <div className="">
            <Navbar/>
        <div className="container">
          <h1>Create A Recipe</h1>
          <form>
            <Form.Group>
              <Form.Label>Label</Form.Label>
              <Form.Control as="select" {...register("labels", { required: true })}>
                <option value="Trending">Trending</option>
                <option value="45% OFF">45% OFF</option>
                <option value="50% OFF">50% OFF</option>
                {/* Tambahkan opsi sesuai dengan kebutuhan Anda */}
              </Form.Control>
            </Form.Group>
            {errors.labels && (
              <p style={{ color: "red" }}>
                <small>Label is required</small>
              </p>
            )}
    
            <Form.Group>
              <Form.Label>Category</Form.Label>
              <Form.Control
                as="select"
                {...register("category", { required: true })}
              >
                <option value="Fashion">Fashion</option>
                <option value="Sport">Branded</option>
                <option value="Chewey">Sport</option>
                <option value="Branded">Chewy</option>
                {/* Tambahkan opsi sesuai dengan kebutuhan Anda */}
              </Form.Control>
            </Form.Group>
            {errors.title && (
              <p style={{ color: "red" }}>
                <small>Title is required</small>
              </p>
            )}
            {errors.title?.type === "maxLength" && (
              <p style={{ color: "red" }}>
                <small>Title should be less than 25 characters</small>
              </p>
            )}
            <Form.Group>
              <Form.Label>Gambar</Form.Label>
              <Form.Control
                type="text"
                {...register("img", { required: true, maxLength: 25 })}
              />
            </Form.Group>
            {errors.title && (
              <p style={{ color: "red" }}>
                <small>Title is required</small>
              </p>
            )}
            {errors.title?.type === "maxLength" && (
              <p style={{ color: "red" }}>
                <small>Title should be less than 25 characters</small>
              </p>
            )}
            <Form.Group>
              <Form.Label>Img Hoverr</Form.Label>
              <Form.Control
                type="text"
                {...register("hover_img", { required: true, maxLength: 25 })}
              />
            </Form.Group>
            {errors.title && (
              <p style={{ color: "red" }}>
                <small>Title is required</small>
              </p>
            )}
               <Form.Group>
              <Form.Label>Rating Rate</Form.Label>
              <Form.Control
                type="text"
                {...register("rating_rate", { required: true, maxLength: 25 })}
              />
            </Form.Group>
            {errors.title && (
              <p style={{ color: "red" }}>
                <small>Title is required</small>
              </p>
            )}
             <Form.Group>
              <Form.Label>Rating Count</Form.Label>
              <Form.Control
                type="text"
                {...register("rating_count", { required: true, maxLength: 25 })}
              />
            </Form.Group>
            {errors.title && (
              <p style={{ color: "red" }}>
                <small>Title is required</small>
              </p>
            )}
            <Form.Group>
              <Form.Label>Judul</Form.Label>
              <Form.Control
                type="text"
                {...register("title", { required: true, maxLength: 25 })}
              />
            </Form.Group>
            {errors.title && (
              <p style={{ color: "red" }}>
                <small>Title is required</small>
              </p>
            )}
            {errors.title?.type === "maxLength" && (
              <p style={{ color: "red" }}>
                <small>Title should be less than 25 characters</small>
              </p>
            )}
            <Form.Group>
              <Form.Label>Harga</Form.Label>
              <Form.Control
                type="text"
                {...register("price", { required: true, maxLength: 25 })}
              />
            </Form.Group>
            {errors.title && (
              <p style={{ color: "red" }}>
                <small>Title is required</small>
              </p>
            )}
            {errors.title?.type === "maxLength" && (
              <p style={{ color: "red" }}>
                <small>Title should be less than 25 characters</small>
              </p>
            )}
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                {...register("description", { required: true, maxLength: 255 })}
              />
            </Form.Group>
            {errors.description && (
              <p style={{ color: "red" }}>
                <small>Description is required</small>
              </p>
            )}
            {errors.description?.type === "maxLength" && (
              <p style={{ color: "red" }}>
                <small>Description should be less than 255 characters</small>
              </p>
            )}
            <br></br>
            <Form.Group>
              <Button variant="primary" onClick={handleSubmit(createProduct)}>
                Save
              </Button>
            </Form.Group>
          </form>
        </div>
        </div>
      );
}

export default MakeProduct