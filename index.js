import display from "./modules/bookDisplay.js";
import add from './modules/add.js'
import nav from "./modules/Navbar.js";
import  "./modules/date.js";
const addForm = document.getElementById('addForm');
nav();
display();
    addForm.addEventListener('submit', (e) => {
        // e.preventDefault();
        add(title.value, author.value);
        addForm.reset();
      });