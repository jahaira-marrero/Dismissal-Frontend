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
        <h2>Welcome {currentUser?.name}</h2>
        <section style={{marginTop: "3%",
            width: "125%"}}>
      <Container>
        <Row sm>
            <Col sm={4}>

            <Card style={{ width: '18rem', background: "aqua" }}>
                <Card.Body>
                    <Card.Title>Dismissal Changes</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Check Daily by 3pm</Card.Subtitle>
                    <Card.Text>
                    <Button onClick={()=>history.push("/dismissalchangescontainer")}>Dismissal Changes</Button> {" "}
                    </Card.Text>
                    <Card.Link href="#"></Card.Link>
                    <Card.Link href="#"></Card.Link>
                </Card.Body>
                </Card>

            </Col>
            <Col sm={4}>
            <Figure>

            <Card style={{ width: '18rem', background: "aqua" }}>
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



                    {/* <Figure.Image
                        width={200}
                        height={100}
                        alt="form"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAllBMVEX///8IUVYAe4oAv9YASU8AT1RXen0Ac4MARkyFn6EhX2MAR0yds7Wuv8G5yMn6+/sAPUQAutO70dbb6+3m8fLy/P0vx9uO2ecWgI/c8velxMoAdoaFtb2l4OsAQUez5u/S3N3Bzs8AbX6wzdLr+fvl7OxfhId5lpnB6/J+2OZcz+CUvsU0i5jL3uLk8PFKlqFhoavM19idTywBAAADB0lEQVR4nO3dbVvaMBSA4aApRcFSBjg3NwQmOPe+///n9uGodEja0jYnrTzP5+qVWy7bhLRgDBERERERtb7Vtt+OHmZ+gElqo1ZkB72xF+Fl1GtLg5EX4SC0a5e9QIjwtIXDNGSRf+FwZMbhejqh+xaGDGGtEKqEsFYIVUJYq1MU3n8u6mvTg1AWnk8Ka5qoK5xPzoua3DU8CITOlleFJbbLwm06KGzY67AwScsvr7spvLAIT1Ro7q6LemyUZ9SFAaonjPJPpt0XRperJKfVq+thiGoK84/q8toCoYRQJYSOEEoIVVIWFs9LG+nbPJSwxNqikbILFIQIESJE2DWhmegQs5sfysL79ypld3eYtTlCKCFUCaEjhBJClRA6QiidovD7jUo/Mo85Ka+e1mcqxV+CCWOECBEiRFhXaM5ildY/gwnn71SaZgbBrM0RQgmhSggdIZQQqoTQEULpgPDXVKPMDUPawt9rlYl3uJk370QhRIgQYQPC9VsXmj8al8M4vgm2M2PMTKXsIJiXOkIoIVQJoSOEEkKVEDpCKB0QflDpPpzwuvhTlBop2NMIb/+JEoQIESJEWF9oHnUuh9eZS772nGY81yg7COaljhBKCFVC6AihhFAlhI4QSghVQugIoeRBOP1YpsyNe50T3sS3xcW3mZ/omrDk/TSZ7wJE6AihhLBCCBGWDqGEsEIIEZYOoYSwQggRlg6hhLBCCBGWDqGEsEIIEZYOoRRqZ+a2yzsz009l6vLu2vEhdIRQQqgSQkcIJYQqIXR0jNA+5H7zs+dWCsKezf/2bs9FPf/CNoSwonAY2rWL17CisG9Dw15KEy/CjV34PEs+//2GxYem2yOBJYXGXPnsQYg2KT7077HA0kKvJfJ/PvDyyxGqhLBWCFVCWCuEKiGsFUKVENaqSDiu1my2mW3yW+4aWe/CvaLnbGRf2q3RFv+VHmixd8giv6cx+BVG+zmW2D5TfA0DhRDh4UbteaPQ0yVr3BvYV2eZINl05UVoxhf9drRd+gESEREREVGT/QMkAkTWVJ9DjgAAAABJRU5ErkJggg=="
                    /> */}
                    <Figure.Caption>
                    
                    </Figure.Caption>
                    </Figure>
            </Col>
        </Row>
        <Row md>
            <Col sm={6}>
            <Figure>
                    {/* <Figure.Image
                        width={250}
                        height={300}
                        alt="form"
                        src="https://info.goconqr.com/files/2017/02/student-participation.jpeg"/> */}
                    <Figure.Caption>
                    <Button onClick={()=>history.push("/students")}>All Students</Button>
                    </Figure.Caption>
                    </Figure>
                </Col>
            <Col sm={6}>
            <Figure>
                    {/* <Figure.Image
                        width={200}
                        height={300}
                        alt="form"
                        src="https://3.files.edl.io/65ab/18/07/18/211335-edda0491-2757-4b98-afd2-58dde919d374.png"
                    /> */}
                    <Figure.Caption>
                    <Button onClick={()=>history.push("/transportations")}>Transportation</Button>
                    </Figure.Caption>
                    </Figure>
                </Col>
        </Row>
        </Container>
      </section>
            
           
    
        </div>
    )
}

export default Home;