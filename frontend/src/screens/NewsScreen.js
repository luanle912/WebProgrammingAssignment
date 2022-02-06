import React from 'react'
import { Row, Col } from 'react-bootstrap';
import news from '../news'
import News from '../components/News';

const NewsScreen = () => {
    return (
        <>
            <Row id='new-list'>
                <Col md={8}>
                    <img src="https://storage.googleapis.com/vinfast-data-01/styles/banner_uu_dai_857x382/public/2022_01/858x382_1642995639.png?itok=WmPHwNfD"></img>
                </Col>
                <Col md={4}>
                    <img src="https://storage.googleapis.com/vinfast-data-01/styles/banner_trang_uu_dai_273x383/public/2021_05/banner_ud_2.jpg?itok=32V2C1Iq"></img>
                </Col>
            </Row>
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
