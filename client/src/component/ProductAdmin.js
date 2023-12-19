import React from 'react'
import { Button, Card ,Modal} from 'react-bootstrap';


const ProductAdmin = ({ labels, category, title, price, description, onClick, onDelete, rating_rate, rating_count, img, hoverimg }) => {
    return (
      <Card className="product">
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <p>Judul: {title}</p>
          <p>Category: {category}</p>
          <p>Labels: {labels}</p>
          <p>Gambar: ${img}</p>
          <p>Gambar Hover: {hoverimg}</p>
          <p>Rating: ${rating_rate}</p>
          <p>Jumlah Perating: ${rating_count}</p>
          <p>Price: ${price}</p>
          <p>{description}</p>
          <Button variant='primary' onClick={onClick}>Update</Button>
          {' '}
          <Button variant='danger' onClick={onDelete}>Delete</Button>
        </Card.Body>
      </Card>
    );
  };

export default ProductAdmin;