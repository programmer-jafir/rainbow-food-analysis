import React from 'react';
import './Blogs.css'
import { Accordion } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div className='QA-section'>
          <h1>QA-Section</h1>
            <Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header>What is Contex api?</Accordion.Header>
    <Accordion.Body>
    Contex api is a sharable data. Ii is a "global" for a tree of React components. Contex share data any level. Context provides a way to pass data through the component  without having to pass props down manually at every level.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>What is semantic tag?</Accordion.Header>
    <Accordion.Body>
    Semantic is a HTML tags provide information about the contents of those tags. Then that goes beyond just how they look on a page. Text is enclosed in the {'<' + 'code' + '>'} tag is immediately recognized by the browser as some type of coding language
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
        </div>
    );
};

export default Blogs;