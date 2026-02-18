import React from 'react'
import { Button, Row, Col, Card, Container } from 'react-bootstrap';
import torb1 from './images/torb1.jpg'
import { BiCheckboxChecked } from "react-icons/bi";
import { CiHome } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";
import { GoArrowLeft } from "react-icons/go";



const CVkitchen = () => {
    const [date, setDate] = React.useState()
    const [email, setEmail]=React.useState()

    function handleChange(event) {
        setDate(event.target.value);
    }

    function handlePrint() {
        window.print();
    }

    return (
        <div className='cv2' >
            <Container style={{ maxWidth: 400 }}>
                <Col style={{ width: '100%'}}>
                    <Col>
                        <Card style={{ width: 350,  border: "none" , border: "2px solid red" }}>
                            <Row style={{marginTop:10}}>
                            
                                    
                                <Col >
                                    <Card.Title >
                                        <Col align="left"><input type="date" size="sm" className="noprint" style={{width:150}} onChange={handleChange} /></Col>
                                    </Card.Title></Col>
                                
                                
                                </Row>

                            <Row>         <Col style={{ marginTop: 20}} >     <img src={torb1} className='imager' alt="Tobias Mautner" style={{ marginBottom: 0, borderRadius: '50%' }} />
                                <Card.Title className="title" style={{ color: 'black'}}>CV- Tobias Mautner</Card.Title>
                            </Col> </Row>
                              <Row>
                                {!date ? <Col  style={{ marginTop: 4, }}>Välj ett datum för att visa CV:t</Col> : <Col style={{ marginTop: 4, }}><b> {date}</b></Col>}
                            </Row><hr></hr>
                            <Col>  <Card.Body >
                                <Col className="noprint"><a href={`mailto:${email}`} style={{textDecoration:"none"}}>Skicka email</a></Col>

   <Row>          <Col align="left" style={{ marginTop: 10, marginBottom:10  }}>
    <Card.Title align="center">Tjänsten</Card.Title>
                      
                                  <input style={{ border: "none", width: 300 }} placeholder='Till vem?' /> <br></br>
                                <input style={{border:"none", width:300, marginLeft:0}} placeholder='Email' onChange={(e)=>setEmail(e.target.value)} defaultValue={email}/>
                                  <input style={{ border: "none", width: 300 }} maxLength="50" placeholder='Tjänstens namn?' />
                                </Col></Row>


<Row> 
                                <Col align="left" style={{  marginTop: 6 }} >
                                   <Card.Title align="center">Allmänt</Card.Title>
                                    År: &nbsp;&nbsp;1970-12-18<br></br>
                                    <CiHome/>&nbsp; Majorna, Göteborg<br></br>
                                    <CiPhone/>&nbsp; tobiasmautner@outlook.com<br></br>
                                    <AiOutlineMail/>&nbsp; 0793 35 88 39<br></br></Col>

                                <Col align="left" style={{  marginTop: 20, }}><b>Språk</b><br></br>
                                    Svenska: Modersmål<br></br>
                                    Engelska: 65%<br></br>
                                    Spanska: 65%<br></br></Col>
                                <Col align="left" style={{  marginTop: 20, }}><b>Data</b><br></br>
                                    <BiCheckboxChecked />Microsoft Office<br></br>
                                    <BiCheckboxChecked />Google<br></br>
                                    <BiCheckboxChecked />Programspråk + DB<br></br></Col>
                                <Col align="left" style={{marginTop: 20, }}><b>Status</b><br></br>
                                    FA-skatt<br></br>
                                    Flexibel vid lönesättning och arbetstider<br></br>
                                    Söker hel och deltidsanställningar<br></br></Col>
                                <Col align="left" style={{  marginTop: 20, }}><b>Övrigt</b><br></br>
                                    Körkort B<br></br>
                                    Data/Internet<br></br>
                                    Nyheter & film <br></br>
                                    Motion  <br></br>
                                    Resor  <br></br>
                                </Col>
                            </Row> </Card.Body></Col>
                           
                        
                        
                          
                         

                            <Row>
                                  <Col align="left" style={{  marginLeft:10,marginTop: 20, color: 'black' }}>
                                  <Card.Title align="center">Erfarenhet</Card.Title>
                             
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
                                <Col align="left" style={{  marginLeft:10,marginTop: 20, color: 'black' }}><b>Övrig erfarenhet
                                </b>
                                    <br></br>
                                    Hjälpt till att servera och förbereda mat till ungdommar inom fotbollen.
                           </Col> </Row>
                        </Card></Col >
                </Col>  </Container>

        </div >



    )
}

export default CVkitchen
