import './App.css';
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import Table from 'react-bootstrap/Table'

function App() {
  return (
    <div className="App">
      <h1>Bootstrap Website Test</h1>
      <Button variant="outline-info">Info</Button>{' '}

      <Nav activeKey='/home' fill variant='tabs'>
        <Nav.Item>
          <Nav.Link href='/home'>Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey='/about'>About Us</Nav.Link>
        </Nav.Item>
      </Nav>

    <Form>
      <Form.Group controlId='formBasicEmail'>
        <Form.Label>Email Address</Form.Label>
        <Form.Control type='email' placeholder='Enter Email'/>
        <Form.Text className='text=muted'>
          We'll never share your email with anyone else
        </Form.Text>
      </Form.Group>

      <Form.Group controlId='fromBasicPassword'>
        <Form.Label>Password</Form.Label>
        <Form.Control type='password' placeholder='Password'/>
      </Form.Group>

      <Form.Group controlId='formBasicCheckbox'>
        <Form.Check type='checkbox' label="Check me out"/>
      </Form.Group>

      <Form.Group>
        <Form.Label>Form Dropdown with favorite movies</Form.Label>
        <Form.Control as='select'>
          <option>Inception</option>
          <option>Dumb and Dumber</option>
          <option>Fast and Furious</option>
          <option>Transformers</option>
          <option>Spiderman</option>
        </Form.Control>
      </Form.Group>

      <Button variant='primary' type='submit'>
        Submit
      </Button>
    </Form>

    <Card className="text-center" >
      <Card.Body>This is an example of Card Body</Card.Body>
    </Card>

    <Table striped bordered hover size='sm'>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
    </div>
  );

  
}

export default App;
