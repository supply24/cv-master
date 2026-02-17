import React from 'react'
import { Button, Row, Col, Card } from 'react-bootstrap';
import torb1 from './images/torb1.jpg'
import { BiCheckboxChecked } from "react-icons/bi";



const CVstorage = () => {
    const [date, setDate] = React.useState()






    function handleChange(event) {
        setDate(event.target.value);
    }

    function handlePrint() {
        window.print();
    }

    return (
        <div className='cv'>

            <Col align="center" style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Col style={{ marginLeft: 0 }}><Card style={{ width: 600, height: 1600 }}>
                    <Row>
                        <Col className='noprint'>
                            <Button size="sm" variant="danger" onClick={handlePrint} >Print Storage CV</Button>

                        </Col></Row><Row>         <Col style={{ marginTop: 20 }}>           <img src={torb1} alt="Tobias Mautner" style={{ width: 230, height: 200, marginLeft: 30, marginBottom: 0, borderRadius: '50%' }} />
                            <Card.Title style={{ fontSize: "30pt", marginLeft: 10, color: 'black' }}>CV- Tobias Mautner</Card.Title>
                        </Col> </Row><hr></hr>
                    <Card.Body>
                        <Col align="left" style={{ marginLeft: 30, marginTop: 0, fontSize: "12pt" }}><b>Allmänt</b><br></br>
                            Födelseår: 1970-12-18<br></br>
                            Adress: Majorna, Göteborg<br></br>
                            E-post:tobiasmautner@outlook.com<br></br>
                            Tel: 0793 35 88 39<br></br></Col>
                        <Col align="left" style={{ marginLeft: 30, marginTop: 20, fontSize: "12pt" }}><b>Språk</b><br></br>
                            Svenska: Modersmål<br></br>
                            Engelska: 65%<br></br>
                            Spanska: 65%<br></br></Col>
                        <Col align="left" style={{ marginLeft: 30, marginTop: 20, fontSize: "12pt" }}><b>Data</b><br></br>
                            <BiCheckboxChecked />Microsoft Office<br></br>
                            <BiCheckboxChecked />Google<br></br>
                            <BiCheckboxChecked />Programspråk + DB<br></br></Col>
                        <Col align="left" style={{ marginLeft: 30, marginTop: 20, fontSize: "12pt" }}><b>Status</b><br></br>
                            FA-skatt<br></br>
                            Flexibel vid lönesättning och arbetstider<br></br>
                            Söker hel och deltidsanställningar<br></br></Col>
                        <Col align="left" style={{ marginLeft: 30, marginTop: 20, fontSize: "12pt" }}><b>Övrigt</b><br></br>
                            Körkort B<br></br>
                            Data/Internet<br></br>
                            Nyheter & film <br></br>
                            Motion  <br></br>
                            Resor  <br></br>
                        </Col>
                    </Card.Body>
                </Card></Col>



                <Col style={{ marginLeft: -25 }}>
                    <Card style={{ align: "right", height: 1600, width: 600, border: "none" }}>
                        <Row>
                            <Col>
                                <Card.Title style={{ fontSize: "12pt", }}>
                                    <Col align="right"><input type="date" className="noprint" onChange={handleChange} /></Col>
                                </Card.Title></Col></Row>
                        <Row>
                            {!date ? <Col style={{ marginTop: 4, fontSize: "14pt" }}>Välj ett datum för att visa CV:t</Col> : <Col align="center" style={{ marginTop: 4, fontSize: "14pt" }}><b> {date}</b></Col>}
                        </Row>
                        <Row>
                            <Col align="left" style={{ marginTop: 295, fontSize: "12pt", marginLeft: 20, marginRight: 100 }}>
                                <b>Till:</b>&nbsp;<input style={{ border: "none" }} placeholder='Till vem?' />
                                <br></br>
                                <b>Söker:</b>&nbsp;<input style={{ border: "none", width: 500  }} placeholder='Tjänstens namn?' />
                            </Col></Row>
                        <Row>
                            <Col align="left" style={{ marginLeft: 20, marginRight: 100, marginTop: 20, fontSize: "12pt", color: 'black' }}><b>Erfarenhet</b>
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
                                Planerade och utförde besök hos transportköpare i Sverige (DSV, Göteborg).  Bilkörning
                                <br></br>  <br></br>
                                2015.06 - 2015.11<br></br>
                                Planerade och utförde besök hos system köpare i Sverige (Hogia, Stenungsund). Bilkörning
                                <br></br>
                            </Col>
                        </Row>
                        <Row>
                            <Col align="left" style={{ marginLeft: 20, marginRight: 100, marginTop: 20, fontSize: "12pt", color: 'black' }}><b>Övrig erfarenhet
                            </b>
                                <br></br>
                                Har jobbat enstaka dagar inom lagerverksamhet inom Autostore. 
                               </Col>  </Row>
                    </Card></Col >
            </Col>

        </div >



    )
}

export default CVstorage
