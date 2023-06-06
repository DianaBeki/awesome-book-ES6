import Display from "./modules/bookDisplay.js";
import nav from "./modules/Navbar.js";
import  "./modules/date.js";

nav();
const display = new Display();
display.display();
display.init();