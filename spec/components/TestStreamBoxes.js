import React from 'react';
import {ReactBox} from '../../components/stream-panel/StreamBox';
import {Row, Col} from '../../components/grid';

const TestStreamBoxes = () => {

    return (
        <Row expanded>
            <Col small={2}>
                <Row expanded>
                    <Col>
                        <ReactBox/>
                    </Col>
                </Row>
            </Col>
            <Col>
                <Row expanded>
                {[1, 2, 3, 4].map((el, index)=>(
                    <Col key={index}>
                        <ReactBox/>
                    </Col>
                ))}
                </Row>
            </Col>
        </Row>
    );
}

export {TestStreamBoxes};

