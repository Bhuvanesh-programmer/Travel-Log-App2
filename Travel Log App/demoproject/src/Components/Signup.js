
import React, { useState } from 'react';
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';
import { Link ,useNavigate} from 'react-router-dom';

export default function SignUp() {
    // const nav =useNavigate()
    // const [form ,setForm] = useState({})
    // const [errors, setErrors] = useState({})
    // const setField = (field, value) => {
    //   setForm({
    //     ...form,
    //     [field]: value
    //   })
    //   if ( !!errors[field] ) setErrors({
    //     ...errors,
    //     [field]: null
    //   })
    // }
    // const findFormErrors = ()=>{
    //   const {sname, email, password, confirmPassword } = form 
    //   const newErrors = {}
    //   if(!form.sname ){
    //     newErrors.sname='please fill the name!'
    //   }
    //   if(!form.email ){
    //     newErrors.email='please fill the email!'
    //   }
    //   if(!form.password ){
    //     newErrors.password='please set the password!'
    //   }
    //   if(!form.confirmPassword){
    //     newErrors.confirmPassword='please Re-enter the password!'
    //   }
    //   return newErrors
    // }
    // const handleSubmit = e => {
    //   e.preventDefault()
    //   const newErrors = findFormErrors()
    //   if(Object.keys(newErrors).length < 0){
    //     alert('You have created an account successfully!')
    //     setErrors(newErrors)
    //   }
     
    // }
  
    
  return (
    <div>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <Card className="px-4">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-center text-uppercase ">
                    Create Account
                  </h2>
                  <div className="mb-3">
                    <Form >
                      <Form.Group className="mb-3" controlId="Name">
                        <Form.Label className="text-center">Name</Form.Label>
                        <Form.Control type="text" name='sname'  placeholder="Enter Name" required  />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Email address
                        </Form.Label>
                        <Form.Control type="email" name='email'  placeholder="Enter email"  required/>
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder='Password' required/>
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" name='confirmPassword'  placeholder="Password"  required/>
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      ></Form.Group>
                      <div className="d-grid">
                        <Button variant="primary" type="submit" >
                          Create Account
                        </Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        Already have an account??{' '}
                          <Link to='/login' className="text-primary fw-bold text-decoration-none">Login</Link>
                      </p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}