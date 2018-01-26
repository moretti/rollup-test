import React from 'react';

var styles = { "greetings": "Hello_greetings__PQJYd" };

function Hello() {
  return React.createElement(
    'div',
    { className: styles.greetings },
    'Hello'
  );
}

export default Hello;
