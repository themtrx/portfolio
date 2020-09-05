import React from 'react'
import {Container, Col, Row} from 'react-bootstrap'
import Header from '../../components/header'
import style from './index.module.css'
import Footer from '../../components/footer'
import Hero from '../../components/hero'

const MainPage = () => {
    return(
        <>
            <Container fluid className={style.container}>
                <Row>
                    <Col>
                        <Header/>
                    </Col>
                </Row>
            </Container>
            <Hero/>
            <Footer/>
        </>
    )
}

export default MainPage