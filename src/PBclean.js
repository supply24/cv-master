import React from 'react'
import { Button, Row, Col, Card, ButtonGroup } from 'react-bootstrap';
import torb1 from './images/torb1.jpg'
import { GoArrowLeft } from "react-icons/go";

const PBclean = () => {
    const [date, setDate] = React.useState()
    const [name, setName] = React.useState("")
    const [xmen, setXmen] = React.useState(false);
    const [ymen, setYmen] = React.useState(false);
    const [zmen, setZmen] = React.useState(false);
    const [tmen, setTmen] = React.useState(false);
    const [pmen, setPmen] = React.useState(false);
    const [email, setEmail] = React.useState("")
    const [service, setService] = React.useState("")

    function handleChange(event) {
        setDate(event.target.value);
    }

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleService = (event) => {
        setService(event.target.value)
    }

    function handlePrint() {
        window.print();
    }

    function handleTen() {
        setTmen(!tmen);
    }

    function handleX() {
        setXmen(!xmen);
    }
    function handleY() {
        setYmen(!ymen);
    }
    function handleZ() {
        setZmen(!zmen);
    }

    function handleP() {
        setPmen(!pmen);
    }
    return (
        <div>

            <Row>

                <Card style={{ marginLeft: -0, height: 450, width: 1200, border: "none" }}>
                    <Row>    <Col align="right" className="noprint" >
                        <Button size="sm" variant="danger" onClick={handlePrint} className='title' >Print Clean PB</Button>

                        {!date ? <Col style={{ color: 'red' }}>Välj ett datum </Col> : <Col style={{ marginTop: 1 }}></Col>}
                        <input type="date" onChange={handleChange} /></Col>

                    </Row>


                    <Row>         <Col style={{ marginTop: 40 }} align="center"> <img src={torb1} className='imager' alt="Tobias Mautner" style={{ width: 130, height: 100, marginLeft: 0, marginBottom: 0, borderRadius: '50%' }} />
                        <Card.Title className="title" style={{ marginLeft: 0, color: 'black' }}>Personligt Brev- Tobias Mautner</Card.Title>
                    </Col>



                    </Row>
                    <Row>
                        {date ? <Col align="center">{date}</Col> : ""}</Row><hr></hr>

                    <Col className="noprint"><a href={`mailto:${email}`} style={{ textDecoration: 'none', color: 'black' }}>Click for email</a></Col>

                    <Row>
                        <Col align="left" style={{ marginTop: 0, marginLeft: 150, marginBottom: 0 }}>
                            Födelseår: 1970-12-18<br></br>
                            Adress: Majorna, Göteborg<br></br>
                            E-post: tobiasmautner@outlook.com<br></br>
                            Tel: 0793 35 88 39</Col>
                        <Col align="center">
                            <input style={{ border: "none", width: 300 }} placeholder="Till vem?" size="30  " maxlength="50" onChange={handleNameChange} defaultValue={name} />
                            {email ? <input style={{ border: "none", width: 300 }} size="30  " maxlength="30" placeholder="Email" onChange={(e) => setEmail(e.target.value)} defaultValue={email} /> : (<Col ><input style={{ marginLeft: 40, border: "none", width: 250 }} size="30  " maxlength="30" placeholder="" onChange={(e) => setEmail(e.target.value)} defaultValue={email} />  <Button className='noprint' size='sm'><GoArrowLeft />Enter email</Button></Col>)}
                            <input style={{ border: "none", width: 300 }} size="30  " maxlength="50" placeholder='Tjänstens namn?' onChange={(e) => setService(e.target.value)} defaultValue={service} />

                        </Col>
                    </Row>
                </Card></Row >
            <Row>

                <Card style={{ marginLeft: -60, height: 750, width: 1200, border: "none" }}>



                    <Row><Col align="center" style={{ marginLeft: 80, marginTop: 40, color: 'black' }}>
                        <Col className='noprint' align="left" style={{ marginBottom: -180 }}>

                            <ButtonGroup vertical>
                                <Button variant={xmen ? "primary" : "outline-primary"} onClick={handleX}>Clean Format</Button>
                                <Button variant={ymen ? "primary" : "outline-primary"} onClick={handleY}>Budbil Format</Button>
                                <Button variant={zmen ? "primary" : "outline-primary"} onClick={handleZ}>Kitchen Format</Button>
                                <Button variant={tmen ? "primary" : "outline-primary"} onClick={handleTen}>Storage Format</Button>
                                <Button variant={pmen ? "primary" : "outline-primary"} onClick={handleP}>New Format</Button>

                            </ButtonGroup></Col>

                        {xmen ? <Col align="left" style={{ marginLeft: 0, marginBottom: 10, fontSize: "12pt", width: 800 }}>
                            Hej {name}. Jag gillar att städa. För några år sedan sökte jag jobb hos er och nu gör jag detsamma och hoppas på bättre tur.
                            Jag kan jobba hela sommaren och även om ni behöver det kan jag jobba extra fram till sommaren.
                            Jag har jobbat inom hemtjänst och städar i hemmet och har precis genomfört en flytt till Majorna där jag bor just nu.
                            Jag lär mig kvickt och tar gärna era interna kurser om ni har sådana. Jag har viss säljerfarenhet sedan tidigare samt erfarenhet av PRYL och SRYs från dokumentation. Hoppas på en intervju med er. <br></br><br></br> Med vänliga hälsningar,<br></br>Tobias Mautner


                        </Col> : ymen ? <Col align="left" style={{ marginLeft: 0, marginBottom: 10, fontSize: "12pt", width: 800 }}>
                            Hej {name}. Jag söker bland annat jobb inom transport och jobbar gärna för Shark Bemanning som budbilsförare.
                            Sedan en tid tillbaka ingick i mitt arbete att frakta saft till kunder i Linköpingsområdet och det var då bland annat viktigt att se till att bilen var helt fungerande, packa rätt, och informera kunder vid avvikelser. Idag är även ekonomikörning också viktigt.
                            Jag är pålitlig, datakunnig och kan hålla ett högt tempo när det behövs och har naturligtvis sedan tidigare god vana att köra bil och hittar i staden även om ombyggnationer kan vara knepiga stundtals.
                            Mitt arbete idag är begränsat till en digital verksamhet som på sikt ska inriktas mot handelsföretag. <br></br><br></br> Med vänliga hälsningar,<br></br>
                            Tobias Mautner
                        </Col> : zmen ? <Col align="left" style={{ marginLeft: 0, marginBottom: 10, fontSize: "12pt", width: 800 }}>
                            Hej {name}. Jag har inte så mycket erfarenhet av arbete inom kök, förutom att jag dagligen jobbar i köket här hemma. Ibland har jag mina barn här och då blir det lite mer att göra. Jag tänker att det inte behöver vara alltför svårt att sätta igång med ett jobb som köksbiträde, men givetvis finns det saker jag inte kan idag, men jag ser fram emot att lära mig mer trots mina 54 år.
                            Jag anpassar mig snabbt till er miljö och tycker att jag kan vara lösningsorienterad. Jag pratar och skriver på engelska och spanska utöver svenska.
                            Hoppas höra ifrån er. <br></br><br></br> Med vänliga hälsningar,<br></br>
                            Tobias Mautner
                        </Col> :
                            tmen ? <Col align="left" style={{ marginLeft: 0, marginBottom: 10, fontSize: "12pt", width: 800 }}>
                                Hej {name}. Jag har delvis erfarenhet av yrket som lagerarbetare genom kort introduktion på autostore. Jag har gedigen erfarenhet (även om det var lång tid sedan) inom plock, pack, inplastning, truckkörning, på och avlastning av industrivaror.
                                Att jobba fysiskt är perfekt på halvtid, då blir det variation under min arbetsdag.
                                Jag är pålitlig, arbetsvillig och kan hålla ett högt tempo när det behövs och naturligtvis jobbar jag bra i grupp liksom på egen hand.Har god datorvana.
                                Ser fram emot en intervju igen. <br></br><br></br> Med vänliga hälsningar,<br></br>
                                Tobias Mautner
                            </Col> : pmen ?


                                <Col align="center" style={{ marginTop: 20, marginBottom: 10, width: 800 }}>

                                    <textarea placeholder="Skriv text till personligt brev" maxlength="1500" style={{ resize: "none",  outline: "none", width: 800, height: 600, border: "none" }}>

                                    </textarea></Col> : ""}

                        {pmen ? <Col style={{ marginTop: 200 }}><hr></hr></Col> : ""}

                        <Row><Col align="left" style={{ marginBottom: 20, marginLeft: 50 }}>
                        </Col>


                        </Row>
                    </Col></Row>

                </Card>
            </Row >


        </div >



    )
}

export default PBclean
