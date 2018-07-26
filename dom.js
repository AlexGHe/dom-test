const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const redParagraph = document.createElement('p');
redParagraph.textContent = 'Hey I’m red!';
redParagraph.style.color = 'red';

container.appendChild(redParagraph);

const blueheader = document.createElement('h3');
blueheader.textContent = 'I’m a blue h3!';
blueheader.style.color = 'blue';

container.appendChild(blueheader);

const pinkDiv = document.createElement('div');
pinkDiv.style.borderStyle = 'solid';
pinkDiv.style.borderColor = 'black';
pinkDiv.style.backgroundColor = 'pink';

const header = document.createElement('h1');
header.textContent = 'I’m in a div';

pinkDiv.appendChild(header);

const paragraph = document.createElement('p');
paragraph.textContent = 'ME TOO!';

pinkDiv.appendChild(paragraph);

container.appendChild(pinkDiv);

btn.addEventListener('click', function(e){
  e.target.style.background = 'blue'
})
