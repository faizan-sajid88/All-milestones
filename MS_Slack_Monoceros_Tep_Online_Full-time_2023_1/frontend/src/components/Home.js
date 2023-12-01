import {Row,Col} from "antd"

export default function Home(){
    return(
        <Row className="my-app">
        <Col flex={2} className="connections">
            <h1>Friends</h1>
            <ul>
                <li>name 1</li>
                <li>name 2</li>
                <li>name 3</li>
            </ul>
        </Col>

        <Col flex={3} className="chat-box">
            <h1>Chat Box</h1>
            
        </Col>
      </Row>
    )
}