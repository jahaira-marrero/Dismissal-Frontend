import React from "react";
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';
import Card from 'react-bootstrap/Card';



function Home({currentUser}) {
    const history = useHistory()

const image="https://www.cabnetsol.com.au/wp-content/uploads/2017/06/homepage-background.jpg"
    return (
    <div 
        style={{
            background: `url(${image})`,
            height: "100vh",
            width: "100%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        > 
        <h2 style={{color: "white", fontSize: "5rem"}}>Welcome {currentUser?.name}</h2>
        <section style={{marginTop: "3%",
            width: "125%"}}>
      <Container>
        <Row sm>
            <Col sm={4}>
            <Card style={{ width: '18rem', background: "white" }}>
                <Card.Body>
                    <Card.Title>Dismissal Changes</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Check Daily by 3pm</Card.Subtitle>
                    <Card.Text>
                    <Button onClick={()=>history.push("/dismissalchangescontainer")}>Dismissal Changes</Button> 
                    </Card.Text>
                    <Card.Link href="#"></Card.Link>
                    <Card.Link href="#"></Card.Link>
                </Card.Body>
                </Card>
            </Col>
            <Col sm={4}>
            <Figure>
            <Card style={{ width: '18rem', background: "white" }}>
                <Card.Body>
                    <Card.Title>Dismissal Change Form</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Submit transportation requests</Card.Subtitle>
                    <Card.Text>
                    <Button onClick={()=>history.push("/dismissalchangeform")}>Submit Form</Button>
                    </Card.Text>
                    <Card.Link href="#"></Card.Link>
                    <Card.Link href="#"></Card.Link>
                </Card.Body>
                </Card>
            </Figure>
            </Col>
        </Row>
        <Row sm>
            <Col sm={4}>
            <Figure>
            <Card style={{ width: '18rem', background: "white" }}>
                <Card.Body>
                    <Card.Title>All Students</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Student Information Cards</Card.Subtitle>
                    <Card.Text>
                    <Button onClick={()=>history.push("/students")}>All Students</Button>
                    </Card.Text>
                    <Card.Link href="#"></Card.Link>
                    <Card.Link href="#"></Card.Link>
                </Card.Body>
                </Card>
            </Figure>
            </Col>
            <Col sm={4}>
            <Figure>
            <Card style={{ width: '18rem', background: "white" }}>
                <Card.Body>
                    <Card.Title>Transportation</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Transportation Rosters</Card.Subtitle>
                    <Card.Text>
                    <Button onClick={()=>history.push("/transportations")}>Transportation</Button>
                    </Card.Text>
                    <Card.Link href="#"></Card.Link>
                    <Card.Link href="#"></Card.Link>
                </Card.Body>
                </Card>                   
                    </Figure>
                </Col>
        </Row>
        </Container>
      </section>
    </div>
    )
}

export default Home;