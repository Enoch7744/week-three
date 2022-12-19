// keycode generator

let heading = document.getElementById('heading')

heading.addEventListener('mouseover', () => {           // when mouse is over change to hello world
    heading.textContent = "Enter a button press in box below"
})

heading.addEventListener('mouseout', () => {            // when mouse is not over change back
    heading.textContent = "JS DOM- KeyCode Generator"
})

const log = document.getElementById('log');
const input = document.querySelector('input');

input.addEventListener('keypress', logKey);

function logKey(e) {
  log.textContent +=  (`${e.code}, ${e.keyCode}, ${e.which}`);
}