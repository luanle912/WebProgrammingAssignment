import React from 'react'
import { Row, Col } from 'react-bootstrap';
import news from '../news'
import News from '../components/News';

const NewsScreen = () => {
    return (
        <>
            <Row id='new-list'>
                {news.map(new_ele => (
                <Col md={4} >
                    <News new_ele={new_ele}/>
                </Col>
                ))}
            </Row>
        </>
    )
}

export default NewsScreen
