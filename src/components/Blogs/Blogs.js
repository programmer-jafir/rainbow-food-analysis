import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div className='QA-section'>
            <Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header>What is Contex api?</Accordion.Header>
    <Accordion.Body>
    Contex api is a sharable data. Ii is a "global" for a tree of React components. Contex share data any level. Context provides a way to pass data through the component  without having to pass props down manually at every level.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header> </Accordion.Header>
    <Accordion.Body>
      
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
        </div>
    );
};

export default Blogs;