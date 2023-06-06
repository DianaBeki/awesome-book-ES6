import Display from './modules/bookDisplay.js';
import './modules/date.js';
import nav from './modules/nav.js';

nav();

const display = new Display();
display.display();
display.init();