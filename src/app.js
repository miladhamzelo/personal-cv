import React from 'react';
import ReactDOM from 'react-dom';
import MainComponent from './components/main/MainComponent';

ReactDOM.hydrate(
 <MainComponent name="Goodness kayode" />,
 document.getElementById('main')
 );