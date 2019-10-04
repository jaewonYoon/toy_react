const React = require('react');
const ReactDom = require('react-dom');

const NumberBaseball = require('./NumberBaseball').default();
const Hot = hot(NumberBaseball);
ReactDom.render(<Hot />, document.querySelector('#root'));