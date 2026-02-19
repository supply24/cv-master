import React from 'react'
import { Button, Row, Col, Card, Container } from 'react-bootstrap';
import torb1 from './images/torb1.jpg'
import { BiCheckboxChecked } from "react-icons/bi";
import { CiHome } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";
import { GoArrowLeft } from "react-icons/go";



const CVmobil = () => {
    const [date, setDate] = React.useState()
    const [email, setEmail]=React.useState()

    function handleChange(event) {
        setDate(event.target.value);
    }

    function handlePrint() {
        window.print();
    }
    console.log(window.innerWidth)

    return (
        <div className="mobil">
         
                                   <Card style={{  border: "none" }}>
                            <Row style={{marginTop:20}}>

                                  <Col className='noprint' align="left"  style={{marginLeft:25}}>
                                    <Button size="sm" variant="danger" onClick={handlePrint} >Print Storage CV</Button>
                                </Col>
                                
                              
                                    
                                        <Col align="left"><input type="date" size="sm" className="noprint" style={{width:120}} onChange={handleChange} /></Col>
                                
                          
                                </Row>

                            <Row>         <Col style={{ marginTop: 20}} >     <img src={torb1} className='imager' alt="Tobias Mautner" style={{ marginBottom: 0, borderRadius: '50%' }} />
                                <Card.Title className="title" style={{ color: 'black'}}>CV- Tobias Mautner</Card.Title>
                            </Col> </Row>
                              <Row>
                                {!date ? <Col  style={{ marginTop: 4, }}>Välj ett datum för att visa CV:t</Col> : <Col style={{ marginTop: 4, }}><b> {date}</b></Col>}
                            </Row><hr></hr>

                                <Col className="noprint"><a href={`mailto:${email}`} style={{textDecoration:"none"}}>Skicka email</a></Col>



<Col><Row>                 
<Col align="left" style={{marginBottom:15}} sm={12}md={6} lg={5} xl={4}> 
<Container> <Card.Title align="left">Tjänsten</Card.Title>               
                                  <input style={{ border: "none", width: 300 }} placeholder='Till vem?' /> <br></br>
                              <input style={{border:"none", width:300, marginLeft:0}} placeholder='Email' onChange={(e)=>setEmail(e.target.value)} defaultValue={email}/><br></br>
                               <input style={{ border: "none", width: 300 }} maxLength="50" placeholder='Tjänstens namn?' />                     
                       </Container> </Col> </Row></Col>     
<Col align="center"> 
<Row>    <Col style={{  marginTop: 1 }} sm={12}md={6} lg={5} xl={4} align="left" >
                                <Container> 
                                 <Card.Title >Allmänt</Card.Title>
                                    År: &nbsp;&nbsp;1970-12-18<br></br>
                                    <CiHome/>&nbsp; Majorna, Göteborg<br></br>
                               <AiOutlineMail/>    &nbsp; tobiasmautner@outlook.com<br></br>
                                 <CiPhone/> &nbsp; 0793 35 88 39<br></br><br></br> </Container></Col>
                                 <Col align="left">
<Container>                   <Card.Title >Språk</Card.Title>
                                    Svenska: Modersmål<br></br>
                                    Engelska: 65%<br></br>
                                    Spanska: 65%<br></br>   <br></br>       </Container>
                              </Col>
                                <Col align="left" sm={12}md={6} lg={5} xl={4} >
                              <Container>  <Card.Title>Data</Card.Title>
                                    <BiCheckboxChecked />Microsoft Office<br></br>
                                    <BiCheckboxChecked />Google<br></br>
                                    <BiCheckboxChecked />Programspråk + DB<br></br><br></br>


                             
                        <Card.Title>Status</Card.Title>   
                                    FA-skatt<br></br>
                                    Flexibel vid lönesättning och arbetstider<br></br>
                                    Söker hel och deltidsanställningar<br></br><br></br></Container>  </Col>
                                    <Col align="left">
                                <Container><Card.Title> Övrigt</Card.Title>
                                    Körkort B<br></br>
                                    Data/Internet<br></br>
                                    Nyheter & film <br></br>
                                    Motion  <br></br>
                                    Resor  <br></br>
                                </Container></Col></Row>
</Col>                      
<hr></hr>
<Col align="center"> 
                            <Row>
                                  <Col style={{  marginTop: 20}}   align="left" sm={12}md={6} lg={5} xl={4}>
                             <Container>    
                                <Card.Title >Erfarenhet</Card.Title>
                                    <p > 
                                    <i>  2020.10.01 - idag</i><br></br>
                                  Uppsättning av Supply24
                                    (Enskild Firma)</p>
                                    <br></br>  
                                  <p>   <i>   2018 - idag   </i>  <br></br>
                                   Jobbsök + delvis städning i  utomhusmiljö på eget bevåg
                                   </p>  <br></br>  
                                   <p> <i>2016 - 2017</i><br></br>
                                    Jobbsök + Lernia kurs  </p>
                                    <br></br>  
                                   <p> <i>2016 - 2017</i>  <br></br>
                                  Personliga besök, städning hos behövande, måltider och omvårdnad.</p> 
                                    <br></br>  
                                      <p>   <i>2016.01 - 2016.05</i><br></br>
                                    Planerade och utförde besök hos transportköpare i Sverige (DSV, Göteborg).  Bilkörning
                                 </p>    <br></br>  
                                     <p>    <i>2015.06 - 2015.11</i><br></br>
                                    Planerade och utförde besök hos system köpare i Sverige (Hogia, Stenungsund). Bilkörning
                                  </p>   
                                     </Container> 
                               </Col>
                            </Row>
                            </Col>


                            <Col align="center"> 
                          
                            <Row>
                                <Col style={{  marginTop: 20}}   align="left" sm={12}md={6} lg={5} xl={4}>

                           <Container>    <Card.Title> Övrig erfarenhet</Card.Title> 
                              
                                  
                                    Hjälpt till att servera och förbereda mat till ungdommar inom fotbollen.
                 </Container>    </Col> </Row> </Col>
                        </Card>
                 

        </div >



    )
}

export default CVmobil
