const link = document.querySelector('a');
const sect = document.querySelector('section');
const para = document.createElement('p');
const text = document.createTextNode(
    " - the premier source for web development knowledge"
);
const paraTwo = document.createElement('p');
const linkPara = document.querySelector('p');

link.textContent = "Mozilla Developers Network";
link.href = "https://developer.mozilla.org";
para.textContent = "We hoped you enjoyed the ride.";
paraTwo.textContent = "This change was made setting the class attribute in javascript";
sect.appendChild(para);
sect.appendChild(paraTwo);
linkPara.appendChild(text);
// sect.removeChild(linkPara);

//styling elements
para.style.color = 'white';
para.style.backgroundColor = 'black';
para.style.padding = '2em';
para.style.width = '250px';
para.textAlign = 'center';

paraTwo.setAttribute("class", "highlight");
