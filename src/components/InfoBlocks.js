import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'


function InfoBlocks(props) {
    const {
        infoBlocks
    } = props;

    const iBlocks = infoBlocks.info_blocks
    console.log(iBlocks)
    return (
        <Container >
            <Row className="pt1">
                {
                    iBlocks.map(block => (

                        <Col xs={12} sm={6} md={3}>
                            <h4 className="flex-center">{block.title}</h4>
                            <div className="flex-center seperator">_______</div>
                            <p>{block.content}</p>
                        </Col>

                    ))
                }
            </Row>
        </Container>
    )

}

export default InfoBlocks;