import React from 'react'
import {Container, Col, Row} from 'react-bootstrap'
import style from './index.module.css'
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import whiteLogo from '../../img/logo-white.png'

const Footer = () => {

    const colCenterStyle = style['col-center']
    const iconStyle = style.icons
    return (
        <>
            <footer className={style.footer}>
                <Container>
                    <Row >
                        <Col xs={12} className={colCenterStyle}>
                            <img
                            src={whiteLogo}
                            width='120px'
                            height='35px'
                            alt="Junior script white logo"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} className={colCenterStyle}>
                            <p>This website is created by me &#169;themtrx</p>
                            <p>You can check the source code <a href="">here</a></p>
                        </Col>
                    </Row>
                    <Row >
                        <Col xs={12} className={colCenterStyle}>
                            <a href="">
                                <FontAwesomeIcon
                                    icon={faLinkedin}
                                    color='#C4C0FB'
                                    className={iconStyle}
                                />
                            </a>
                            <a href="">
                                <FontAwesomeIcon
                                    icon={faGithubSquare}
                                    color='#C4C0FB'
                                    className={iconStyle}
                                />
                            </a>
                            <a href="">
                                <FontAwesomeIcon
                                    icon={faEnvelope}
                                    color='#C4C0FB'
                                    className={iconStyle}
                                />
                            </a>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    )
}

export default Footer