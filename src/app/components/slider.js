import React from 'react';
import {render} from 'react-dom';

import {Footer} from './footer';


export class Slider extends React.Component {
  render() {
    return (
      <div>
        <div id="slider">
          <span className="control_prev"><i className="fa fa-arrow-left"></i></span>
          <span className="control_next"><i className="fa fa-arrow-right"></i></span>
          <ul>
            <li>SLIDE 1</li>
            <li>SLIDE 2</li>
            <li>SLIDE 3</li>
            <li>SLIDE 4</li>
          </ul>
        </div>
        <Footer/>
      </div>);
      }
      }
