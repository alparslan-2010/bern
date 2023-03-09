import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';

function CardExample() {
    return (
        <div className="d-flex justify-content-around">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://d2rfa446ja7yzb.cloudfront.net/eyJidWNrZXQiOiJtaXJyb3IuZ2V0Zmxvd2JveC5jb20uZXUtd2VzdC0xLmxpdmUiLCJrZXkiOiJhSFIwY0hNNkx5OTNkM2N1YVc1emRHRm5jbUZ0TG1OdmJTOXdMME5tVnpSTWQzUnhiMWR5THc9PS90aHVtYm5haWwiLCJlZGl0cyI6eyJ0b0Zvcm1hdCI6IndlYnAiLCJyZXNpemUiOnsid2lkdGgiOjEwODB9fX0=" />
                <Card.Body>
                    <Card.Title>Zytglogge (Zeitglockenturm)</Card.Title>
                    <Card.Text>
                        Die charakteristischen Berner Strassen, Gässchen und Bauten erzählen spannende Geschichten und mitten drin, in der Unteren Altstadt, erhebt sich eines der bekanntesten Wahrzeichen der Stadt: der Zytglogge (Zeitglockenturm). Einst Stadttor, zieht der Uhrenturm Schaulustige aus aller Welt an.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '16rem'}}>
                <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bern_Pfeiferbrunnen_02.jpg/330px-Bern_Pfeiferbrunnen_02.jpg" />
                <Card.Body>
                    <Card.Title>Zytglogge (Zeitglockenturm)</Card.Title>
                    <Card.Text>
                        Die charakteristischen Berner Strassen, Gässchen und Bauten erzählen spannende Geschichten und mitten drin, in der Unteren Altstadt, erhebt sich eines der bekanntesten Wahrzeichen der Stadt: der Zytglogge (Zeitglockenturm). Einst Stadttor, zieht der Uhrenturm Schaulustige aus aller Welt an.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://d2rfa446ja7yzb.cloudfront.net/eyJidWNrZXQiOiJtaXJyb3IuZ2V0Zmxvd2JveC5jb20uZXUtd2VzdC0xLmxpdmUiLCJrZXkiOiJhSFIwY0hNNkx5OTNkM2N1YVc1emRHRm5jbUZ0TG1OdmJTOXdMME5tVnpSTWQzUnhiMWR5THc9PS90aHVtYm5haWwiLCJlZGl0cyI6eyJ0b0Zvcm1hdCI6IndlYnAiLCJyZXNpemUiOnsid2lkdGgiOjEwODB9fX0=" />
                <Card.Body>
                    <Card.Title>Zytglogge (Zeitglockenturm)</Card.Title>
                    <Card.Text>
                        Die charakteristischen Berner Strassen, Gässchen und Bauten erzählen spannende Geschichten und mitten drin, in der Unteren Altstadt, erhebt sich eines der bekanntesten Wahrzeichen der Stadt: der Zytglogge (Zeitglockenturm). Einst Stadttor, zieht der Uhrenturm Schaulustige aus aller Welt an.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>

           
        </div>
    );
}

export default CardExample;