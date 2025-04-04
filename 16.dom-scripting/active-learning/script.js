const link = document.querySelector('a');
const sect = document.querySelector('section');
const para = document.createElement('p');
const text = document.createTextNode(
    " - the premier source for web development knowledge"
);
const linkPara = document.querySelector('p');

link.textContent = "Mozilla Developers Network";
link.href = "https://developer.mozilla.org";
para.textContent = "We hoped you enjoyed the ride.";
sect.appendChild(para);
linkPara.appendChild(text);