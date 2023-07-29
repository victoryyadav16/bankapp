import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import User1 from './../Assets/Images/user2.png';
import './Card.css';

function BasicCard() {
  const [myDiscount, setMyDiscount] = useState(100);
 const handleClick = () => {
  setMyDiscount(200);
  };
  const [count, setCount] = useState(0);
  return (
    <div className='cardContainer p1'>
    <Card className='cardwidth33'>
      <Card.Img variant="top" src={User1} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.          
        </Card.Text>
        <p>${myDiscount}</p>
        <Button variant="primary" onClick={handleClick}>Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card className='cardwidth33'>
      <Card.Img variant="top" src={User1} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.          
        </Card.Text>
        <p>You clicked {count} times</p>
        <Button variant="primary" onClick={() => setCount(count + 1)}>Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card className='cardwidth33'>
      <Card.Img variant="top" src={User1} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <p>You clicked {count} times</p>
        <Button variant="primary" onClick={() => setCount(count + 1)}>Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
    
  );
}

export default BasicCard;