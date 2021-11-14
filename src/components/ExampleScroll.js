import React from 'react';
import { Element } from 'react-scroll';

const data = [
  {name: 'text'},
  {name: 'text'},
  {name: 'text'},
  {name: 'text'},
  {name: 'text'},
  {name: 'text'},
]

export const ExampleScroll = () => {
  return (
    <div>
      {data.map((block, index) => (
        <Element key={index} style={{height: '1000px'}} name={`container${index}`}>
          {`${block.name} ${index}`}
        </Element>
      ))}
    </div>
  )
}
