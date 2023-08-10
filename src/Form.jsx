import {useState} from'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import"./App.css";

  function GridComplexExample() {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [address,setAddress] = useState('')
    const [city,setCity] = useState('')
    const [check,setCheck] = useState('')

    const handleSubmit= async(e)=>{   
   console.log(email,password,address,city,check);
    //     await fetch('http://localhost:3000',{
    //     method:"POST",
    //     headers:{
    //         'Content-Type': 'application/json'
    //     },
    //     body:{
    //         email,password,address,city,check
    //     }
    // })
}
    return (

    <Form  className="contactform ">
        <h2 style={{textAlign:"center", margin:"1rem auto 3rem auto"}}>Contact Us</h2>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="Enter email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder="Password" />
        </Form.Group>
      </Row>

      <Row className="mb-3">
      <Form.Group className="mb-3"as={Col} controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control value={address} onChange={(e)=> setAddress(e.target.value)} placeholder="1234 Main St" />
      </Form.Group>

        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control placeholder="City" value={city} onChange={(e)=> setCity(e.target.value)}/>
        </Form.Group>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" value={check} onChange={(e)=> setCheck(e.target.value)} />
      </Form.Group>
</Row>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
  );
}

export default GridComplexExample;