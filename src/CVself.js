import React from 'react'
import { Button, Row, Col, Card, Container } from 'react-bootstrap';
import torb1 from './images/torb1.jpg'
import { BiCheckboxChecked } from "react-icons/bi";


const CVkitchen = () => {
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
                                    <b>Allmänt</b><br></br>
                                    Födelseår: 1970-12-18<br></br>
                                    Adress: Majorna, Göteborg<br></br>
                                    E-post:tobiasmautner@outlook.com<br></br>
                                    Tel: 0793 35 88 39<br></br></Col>

                                <Col align="left" style={{ marginLeft: 30, marginTop: 20, }}><b>Språk</b><br></br>
                                    Svenska: Modersmål<br></br>
                                    Engelska: 65%<br></br>
                                    Spanska: 65%<br></br></Col>
                                <Col align="left" style={{ marginLeft: 30, marginTop: 20, }}><b>Data</b><br></br>
                                    <BiCheckboxChecked />Microsoft Office<br></br>
                                    <BiCheckboxChecked />Google<br></br>
                                    <BiCheckboxChecked />Programspråk + DB<br></br></Col>
                                <Col align="left" style={{ marginLeft: 30, marginTop: 20, }}><b>Status</b><br></br>
                                    FA-skatt<br></br>
                                    Flexibel vid lönesättning och arbetstider<br></br>
                                    Söker hel och deltidsanställningar<br></br></Col>
                                <Col align="left" style={{ marginLeft: 30, marginTop: 20, }}><b>Övrigt</b><br></br>
                                    Körkort B<br></br>
                                    Data/Internet<br></br>
                                    Nyheter & film <br></br>
                                    Motion  <br></br>
                                    Resor  <br></br>
                                </Col>
                            </Card.Body></Col>
                        </Card></Col>
                    <Col style={{ marginLeft: -25 }}>
                        <Card style={{ align: "right", width: 600, height: 1600, borderRight: 'none', borderTop: 'none', borderBottom: 'none', boxShadow: 'none' }}>
                            <Row>
                                <Col>
                                    <Card.Title >
                                        <Col align="right"><input type="date" className="noprint" onChange={handleChange} /></Col>
                                    </Card.Title></Col></Row>

                            <Row>

                                {!date ? <Col style={{ marginTop: 4 }}>Välj ett datum för att visa CV:t</Col> : <Col style={{ marginTop: 2 }}>{date}</Col>}

                            </Row>

                            <Row>
                                <Col align="left" style={{ marginTop: 205, marginLeft: 20, marginRight: 100 }}>

                                    <b>Till:</b>&nbsp;<input style={{ border: "none" }} placeholder='Till vem?' />
                                    <br></br>
                                    <b>Söker:</b>&nbsp;<input style={{ border: "none", width: 500 }} placeholder='Tjänstens namn?' />
                                </Col></Row>
                            <Row>
                                <Col align="left" style={{ marginLeft: 20, marginRight: 100, marginTop: 20, color: 'black' }}>&nbsp;Erfarenhet
                                    <br></br>      <textarea maxlength="800" style={{
                                        height: 1110,

                                        width: 300, border: "none", outline: "none", marginLeft: 0, marginRight: 20, rows: 20, backgroundColor: "none"
                                    }} placeholder='Skriv Erfarenhet' />
                                </Col>
                            </Row>



                        </Card></Col >


                </Col ></Container> </div >


    )
}

export default CVkitchen
