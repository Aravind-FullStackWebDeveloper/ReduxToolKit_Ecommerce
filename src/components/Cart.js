import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { remove } from '../store/cartSlice';

function Cart() {
  const products = useSelector(state => state.cart);
  const dispatch = useDispatch()
  const removeFromCart = (id) => {
    //dispatch the remove action
    dispatch(remove(id));
  }

  const cards = products.map(product => (
    <div className='col-md-12' style={{marginBottom : '10px'}}>
      <Card key={product.id} className='h-100'>
        <div className='text-center'>
      <Card.Img variant="top" src= {product.image} style = {{width: '100px', heigh : '130px'}}/>
      </div>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          {product.price}
        </Card.Text>
      </Card.Body>
      <Card.Footer style = {{background : 'white'}}>
        <Button variant="danger" onClick={() => removeFromCart(product.id)}>Remove Item</Button></Card.Footer>
    </Card>
    
    </div>

  ));
  return (
    <>
    <div>
      {cards}
      </div>
    </>
  )
}

export default Cart