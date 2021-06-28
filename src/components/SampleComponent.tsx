import * as React from "react";
import {FeaturedMessage} from "../classes/FeaturedMessage";
import {Col, Container, Row} from "react-bootstrap";

import styles from "./SampleComponent.module.css"

export interface Props {
    messages: FeaturedMessage[]
}

const renderMessage = (msg: FeaturedMessage, totalMessages: number) => {
    return (
        <Col key={"key_" + msg.id} xs={12} md={12 / totalMessages}>
            <div><h3>{msg.title}</h3></div>
            <div className={styles.msgBody}>{msg.message}</div>
        </Col>
    );
}

/*
    This is a sample React component, that's renders 1-4 messages in columns.
    It has no styles, no graphics, and serves only as example of strictly typed React Component
 */
export const SampleComponent: React.FC<Props> = (
{
    messages
}) => {
    let size = Math.min(messages.length, 4)

    return (
        <Container>
            <Row>
                <Col xs={12}>Sample React Component</Col>
            </Row>
            <Row>
                {messages.slice(0, size).map(msg => renderMessage(msg, size))}
            </Row>
        </Container>
    );
}

export default SampleComponent