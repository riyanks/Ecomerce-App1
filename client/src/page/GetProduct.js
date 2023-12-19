import React, { useEffect, useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Navbar from '../component/Navbar';
import ProductAdmin from '../component/ProductAdmin';

const GetProduct = () => {
  const [products, setProducts] = useState([]);
  const [show, setShow] = useState(false);
  const { register, reset, handleSubmit, setValue, formState: { errors } } = useForm();
  const [productId, setProductId] = useState(0);

  useEffect(() => {
    fetch('/product/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
      })
      .catch(err => console.log(err));
  }, []);

  const getAllProducts = () => {
    fetch('/product/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
      })
      .catch(err => console.log(err));
  };

  const closeModal = () => {
    setShow(false);
  };

  const showModal = (id) => {
    setShow(true);
    setProductId(id);
    products.forEach((product) => {
      if (product.id === id) {
        setValue('labels', product.labels);
        setValue('category', product.category);
        setValue('title', product.title);
        setValue('price', product.price);
        setValue('description', product.description);
      }
    });
  };

  let token = localStorage.getItem('REACT_TOKEN_AUTH_KEY');

  const updateProduct = (data) => {
    console.log(data);

    const requestOptions = {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${JSON.parse(token)}`
      },
      body: JSON.stringify(data)
    };

    fetch(`/product/product/${productId}`, requestOptions)
      .then(res => res.json())
      .then(data => {
        console.log(data);

        const reload = window.location.reload();
        reload();
      })
      .catch(err => console.log(err));
  };

  const deleteProduct = (id) => {
    console.log(id);

    const requestOptions = {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${JSON.parse(token)}`
      }
    };

    fetch(`/product/product/${id}`, requestOptions)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        getAllProducts();
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
        <Navbar/>
    <div className="products container">
      <Modal
        show={show}
        size="lg"
        onHide={closeModal}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            Update Product
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
              <Button variant="primary" onClick={handleSubmit(updateProduct)}>
                Save
              </Button>
            </Form.Group>
          </form>
        </Modal.Body>
      </Modal>
      <h1>List of Products</h1>
      {products.map((product, index) => (
        <ProductAdmin
          labels={product.labels}
          category={product.category}
          key={index}
          img={product.img}
          hoverimg={product.hover_img}
          title={product.title}
          price={product.price}
          rating_rate={product.rating_rate}
          rating_count = {product.rating_count}
          description={product.description}
          onClick={() => { showModal(product.id) }}
          onDelete={() => { deleteProduct(product.id) }}
        />
      ))}
    </div>
    </div>
  );
};

export default GetProduct;
