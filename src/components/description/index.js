import React from 'react'
import style from './index.module.css'
import {Container, Jumbotron} from 'react-bootstrap'
import Skills from '../skills'

const DescriptionSection = () => {
    return (
        <>
            <section className={style['descript-section']}>
                <Jumbotron fluid className={style.jumbotron}>
                    <Container>
                        <h3>Hello, my name is Dimitar</h3>
                        <p>
                            I love arts in all forms and I think the programming is one of these forms. It is one modern way to express yourself.
                            It doesn't matter if you are part of symphonic orchestra or small rock band. Every member leaves part of his soul in the final melody.
                            It doesn't matter what tools are you using - paint, gypsum, notes, brass or JavaScript. 
                            It matters what feelings you leave in the one who looks at your picture, touches your statue, listens your music or uses your app.
                        </p>
                    </Container>
                </Jumbotron>
                <Skills/>
            </section>
        </>
    )
}

export default DescriptionSection