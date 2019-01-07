import React, { Component } from 'react';
import {ReactBingmaps} from '../../../node_modules/react-bingmaps/src/node_modules/components/ReactBingmaps';
//import {ReactBingmaps} from 'snu_react/node_modules/react-bingmaps/src/node_modules/components/ReactBingmaps';

const Intro = props => (
  <p className= "App-intro">
    {props.message}
  </p>
)

export default Intro;
