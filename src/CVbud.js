import React from 'react'
import { Button, Row, Col, Card, Container } from 'react-bootstrap';
import torb1 from './images/torb1.jpg'
import { BiCheckboxChecked } from "react-icons/bi";


const CVbud = () => {
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
                        <Card style={{ width: 600, height: 1600, border: "none", backgroundColor: "#bcb6b6" }}>
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



                    <Col style={{ marginLeft: -30 }} >
                        <Card style={{ height: 1600, width: 600, border: "none" }}>

                            <Row>
                                <Col >
                                    <Card.Title >
                                        <Col align="left"><input type="date" className="noprint" onChange={handleChange} /></Col>
                                    </Card.Title></Col></Row>
                            <Row>
                                {!date ? <Col align="left" style={{ marginTop: 4, marginLeft: 10 }}>Välj ett datum för att visa CV:t</Col> : <Col align="left" style={{ marginTop: 4, marginLeft: 20 }}><b> {date}</b></Col>}
                            </Row>
                            <Row>
                                <Col align="left" style={{ marginTop: 150, marginLeft: 20 }}>
                                    <b>Till:</b>&nbsp;<input style={{ border: "none" }} placeholder='Till vem?' />
                                    <br></br>
                                    <b>Söker:</b>&nbsp;<input style={{ border: "none", width: 500 }} maxLength="50" placeholder='Tjänstens namn?' />
                                </Col></Row>

                            <Row>
                                <Col align="left" style={{ marginLeft: 20, marginRight: 100, marginTop: 20, color: 'black' }}><b>Erfarenhet</b>
                                    <br></br>
                                    2020.10.01 - idag<br></br>
                                    Uppsättning av Supply24
                                    (Enskild Firma)
                                    <br></br>  <br></br>
                                    2018 - idag <br></br>
                                    Jobbsök (delvis städning i utomhusmiljö på eget bevåg)
                                    <br></br>  <br></br>

                                    2016 - 2017<br></br>
                                    Jobbsök + Lernia kurs
                                    <br></br>  <br></br>
                                    2016 - 2017 <br></br>
                                    Sommarjobb på Mölndals hemtjänst. Personliga besök, städning hos behövande, måltider och omvårdnad.
                                    <br></br>  <br></br>
                                    2016.01 - 2016.05<br></br>
                                    Planerade och utförde besök hos transportköpare i Sverige (DSV, Göteborg). Bilkörning
                                    <br></br>  <br></br>
                                    2015.06 - 2015.11<br></br>
                                    Planerade och utförde besök hos system köpare i Sverige (Hogia, Stenungsund). Bilkörning
                                    <br></br>
                                </Col>
                            </Row>
                            <Row>
                                <Col align="left" style={{ marginLeft: 20, marginRight: 100, marginTop: 20, color: 'black' }}><b>Övrig erfarenhet
                                </b>
                                    <br></br>
                                    Delvis budbilschaufför på Bouquet Saft och Vinjäst. Utkörning av saft till kunder i Linköpingsområdet. Utkörning av artiklar i lumpen i vw pickup.
                                </Col> </Row>
                        </Card></Col >
                </Col>  </Container>

        </div >



    )
}

export default CVbud
