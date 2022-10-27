'use strict';

const box = document.getElementById('box'),
        btns = document.getElementsByTagName('button'),
        circles = document.getElementsByClassName('circle'),
        hearts = document.querySelectorAll('.heart'),
        wrapper = document.querySelectorAll('.wrapper');

/* box.style.backgroundColor = 'blue';
box.style.width = '500px'; */

box.style.cssText = 'background-color: blue; width: 500px';

btns[1].style.borderRadius = '100%';

circles[1].style.backgroundColor = 'red';

hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});

const div = document.createElement('div');

div.classList.add('black');

document.body.append(div);

div.innerHTML = "<h1>Hello</h1>";