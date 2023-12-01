import React from 'react';
import ReactDOM from 'react-dom';

var jsxHeading = (
    <div>
<h1 id="jsxHeading">Heading from JSX!!</h1>
<h1 id="jsxHeading2">Heading from JSX!!</h1>
<h1>Hello, world!</h1>
      <p>This is a paragraph</p>
      <ul>
        <li>Apple</li>
        <li>Orange</li>
        <li>Grapes</li>
      
      </ul>
      <br/>
    </div>
   
);
var htmlRoot = document.getElementById("root");
var rootReact = ReactDOM.createRoot(htmlRoot);
rootReact.render(jsxHeading);
