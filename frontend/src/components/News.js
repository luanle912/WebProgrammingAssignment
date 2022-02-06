import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import '../MyStyle.css';

const News = ({ new_ele }) => {
    return (
        <Card className='new-info'>
            <a href={`/news/${new_ele.name}`}>
                <Card.Img src={new_ele.image} variant='top' className='new-image' />
            </a>
            <Card.Body className='new-body'>
                <a href={`/news/${new_ele.name}`} className='non-textdecoration'>
                    <div className="new-name">
                        <strong>{new_ele.description}</strong>
                    </div>
                </a>
                <div className='new-date'>{new_ele.date}</div>
            </Card.Body>
        </Card>
    )
}

export default News
