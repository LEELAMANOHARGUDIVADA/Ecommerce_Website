import React from 'react';
import '../styles/cart.css';
import { Container, Row, Col } from 'reactstrap';
import {motion} from 'framer-motion'
import {cartActions} from '../redux/slices/cartSlice';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const Cart = () => {

  const cartItems = useSelector(state=> state.cart.cartItems);
  const totalAmount = useSelector(state=> state.cart.totalAmount);

  return (
    <>
      <section>
        <Container>
          <Row>
            <h1 className='text-center mt-2 mb-5'>Shopping Cart</h1>
            <Col lg='9'>
              {
                cartItems.length===0 ? ( <h2 className='text-center fs-4'>No items added to cart</h2>) : (
                <table className='table bordered'>
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Delete</th>
                  </tr>
                </thead>

                <tbody>
                  {
                    cartItems.map((item,index)=> (
                      <Tr item={item} key={index} />
                    ))
                  }
                </tbody>
              </table>
              )}
            </Col>
            <Col lg='3'>
              <div>
                <h6 className='d-flex align-items-center justify-content-between'>Subtotal
                <span className='fs-4 fw-bold'>${totalAmount}</span>
                </h6>
              </div>
              <p className='fs-6 mt-2'>taxes and shipping will calculate in checkout</p>
              <div>
                <button className="buy__btn w-100 "><Link to='/checkout'>Checkout</Link></button>
                <button className="buy__btn w-100 mt-3"><Link to='/shop'>Continue Shopping</Link></button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

const Tr =({item})=> {

  const dispatch = useDispatch()

  const deleteProduct = ()=> {
    dispatch(cartActions.deleteItem(item.id));
  }
  return <tr>
  <td><img src={item.imgUrl} /></td>
  <td>{item.productName}</td>
  <td>${item.price}</td>
  <td>{item.quantity}</td>
  <motion.td whileTap={{scale: 0.9}} onClick={deleteProduct} ><i className="ri-delete-bin-line"></i></motion.td>
</tr>
}

export default Cart