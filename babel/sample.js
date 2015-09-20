var React = require('react');

var a = require('something');

function Abc() {
  return a + 1;
}

function def() {
  return <Abc>Blah</Abc>;
}

module.exports = [Abc, def];
