import _ from 'lodash';
//import './styles.css';
import './arrow/arrow.styl';
import './main/main.styl';
import printMe from './print.js';

function component() {
    var element = document.createElement('div');

    element.className = "body-container";
    element.innerHTML = 'an arrow should be here';

    var arrow = document.createElement("div");

    arrow.classList.add("arrow", "arrow-active", "arrow-right", "arrow-block");

    element.appendChild(arrow);


    // var btn = document.createElement('button');

    // element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    // btn.innerHTML = 'Click me and check the console!';
    // btn.onclick = printMe;

    // element.appendChild(btn);

    return element;
  }

// let element = component();
// document.body.appendChild(element);

// if (module.hot) {
//   module.hot.accept('./print.js', function() {
//     console.log('Accepting the updated printMe module!');
//     document.body.removeChild(element);
//     element = component();
//     document.body.appendChild(element);
//   })
// }