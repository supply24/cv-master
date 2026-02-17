import React from 'react'
import { Button, Row, Col, Card, Container } from 'react-bootstrap';
import torb1 from './images/torb1.jpg'
import { BiCheckboxChecked } from "react-icons/bi";


const CVselfeng = () => {
    const [date, setDate] = React.useState()

    function handleChange(event) {
        setDate(event.target.value);
    }

    function handlePrint() {
        window.print();
    }

    return (
        <div className='cv' >
            <Container style={{ maxWidth: 1200 }}>
                <Col className='bodyfemale' style={{ width: '100%', marginLeft: -0, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Col>
                        <Card style={{ width: 600, height: 1600, border: "none" }}>
                            <Row>
                                <Col className='noprint' align="right" style={{ marginRight: 300 }} >
                                    <Button size="sm" variant="danger" onClick={handlePrint} >Print Storage CV</Button>
                                </Col></Row>

                            <Row>         <Col style={{ marginTop: 20, marginLeft: 160 }} align="left" >     <img src={torb1} className='imager' alt="Tobias Mautner" style={{ marginBottom: 0, borderRadius: '50%' }} />
                                <Card.Title className="title" style={{ color: 'black', marginLeft: 10 }}>CV- Tobias Mautner</Card.Title>
                            </Col> </Row><hr></hr>
                            <Col className='1stborder' style={{ marginLeft: 50 }}>  <Card.Body >
                                <Col align="left" style={{ marginLeft: 30, marginTop: 0 }} >
                                    <b>General</b><br></br>
                                    Birthyear: 1970-12-18<br></br>
                                    Address: Majorna, Gothenburg, Sweden<br></br>
                                    E-mail:tobiasmautner@outlook.com<br></br>
                                    Ph: 0793 35 88 39<br></br></Col>

                                <Col align="left" style={{ marginLeft: 30, marginTop: 20, }}><b>Languages</b><br></br>
                                    Swedish: 100%<br></br>
                                    English: 65%<br></br>
                                    Spanish: 65%<br></br></Col>
                                <Col align="left" style={{ marginLeft: 30, marginTop: 20, }}><b>Data</b><br></br>
                                    <BiCheckboxChecked />Microsoft Office<br></br>
                                    <BiCheckboxChecked />Google<br></br>
                                    <BiCheckboxChecked />Programspråk + DB<br></br></Col>
                                <Col align="left" style={{ marginLeft: 30, marginTop: 20, }}><b>Status</b><br></br>
                                    FA-tax<br></br>
                                    Flexible on salary and working hours<br></br>
                                    Looking for part and full time opportunities.<br></br></Col>
                                <Col align="left" style={{ marginLeft: 30, marginTop: 20, }}><b>Other</b><br></br>
                                    <BiCheckboxChecked />&nbsp;Drivers Licence B<br></br>
                                    Data/Internet<br></br>
                                    News & Movies <br></br>
                                    Excercise  <br></br>
                                    Travel  <br></br>
                                </Col>
                            </Card.Body></Col>
                        </Card></Col>
                    <Col style={{ marginLeft: -25 }}>
                        <Card style={{ align: "right", width: 600, height: 1600, borderRight: 'none', borderTop: 'none', borderBottom: 'none', boxShadow: 'none' }}>
                            <Row>
                                <Col>
                                    <Card.Title style={{ fontSize: 14, }}>
                                        <Col align="right"><input type="date" className="noprint" onChange={handleChange} /></Col>
                                    </Card.Title></Col></Row>

                            <Row>

                                {!date ? <Col style={{ marginTop: 4 }}>Choose date</Col> : <Col style={{ marginTop: 2 }}>{date}</Col>}

                            </Row>

                            <Row>
                                <Col align="left" style={{ marginTop: 275, fontSize: 12, marginLeft: 20, marginRight: 100 }}>

                                    <b>To:</b>&nbsp;<input style={{ border: "none" }} placeholder='Till vem?' />
                                    <br></br>
                                    <b>Looking for:</b>&nbsp;<input style={{ border: "none", width: 500 }} placeholder='Tjänstens namn?' />
                                </Col></Row>
                            <Row>
                                <Col align="left" style={{ marginLeft: 20, marginRight: 100, marginTop: 20, fontSize: 12, color: 'black' }}>&nbsp;Experience
                                    <br></br>      <textarea style={{

                                        width: 300, border: "none", outline: "none", marginLeft: 0, marginRight: 20, rows: 20, backgroundColor: "none"
                                    }} placeholder='Skriv Erfarenhet' />
                                </Col>
                            </Row>



                        </Card></Col >


                </Col ></Container> </div >


    )
}

export default CVselfeng
