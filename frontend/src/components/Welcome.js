import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

export const Welcome = () => {
  return (
    <Jumbotron>
        <h1>Images Gallery</h1>
        <p>
            This is a simple application that retrieves photos using Unsplash API. In order to start find potos using the Search tool.
        </p>
        <p>
            <Button variant="primary" href="https://unsplash.com" target="_blank">Learn more</Button>
        </p>
    </Jumbotron>
  )
}
