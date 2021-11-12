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
      {data.map((block, key) => (
        <Element key={key} style={{height: '1000px'}} name={`container${key}`}>
          {`${block.name} ${key}`}
        </Element>
      ))}
    </div>
  )
}
