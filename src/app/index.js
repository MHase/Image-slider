import React from 'react';
import {render} from 'react-dom';

import '../css/main.scss';
import './js/utility';
import {Slider} from './components/slider';

class App extends React.Component {
  render() {
    return (
      <div>
        <Slider/>
        {/* <div className='back'></div> */}
      </div>);
  }
}

render(<App/>, document.getElementById('slider-app'));
