import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';
import '../styles/login.css';
import {motion} from 'framer-motion'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase.config';
import { toast } from 'react-toastify';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const signIn = async (e)=> {
    e.preventDefault();
    setLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);

      const user = userCredential.user;

      console.log(user);
      setLoading(false);
      toast.success('Login Successful');
      navigate('/checkout');
    } catch (error) {
      setLoading(false);
      toast.error(error.message)
    }
  }

  return (
    <div>
      <section>
        <Container>
          <Row>
            {
              loading ? (<Col lg='12' className='text-center'><h5 className='fw-bold'>Loading...</h5></Col>) : (<Col lg='6' className='m-auto text-center'>
              <h3 className='fw-bold fs-4'>Login</h3>

              <Form className='auth__form' onSubmit={signIn}>
                <FormGroup className='form__group'>
                  <input type="email" placeholder='Enter your email' value={email} onChange={e=> setEmail(e.target.value)} />
                </FormGroup>
                <FormGroup className='form__group'>
                  <input type="password" placeholder='Enter your password' value={password} onChange={e=> setPassword(e.target.value)} />
                </FormGroup>
                <motion.button whileTap={{scale: 0.9}} type='submit' className="buy__btn login__btn ">
                  Login
                </motion.button>
                <p>Don't have an account? <Link to='/signup'>Create an account</Link></p>
              </Form>
            </Col>)
            }
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default Login