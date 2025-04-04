const link = document.querySelector('a');
const sect = document.querySelector('section');
const para = document.createElement('p'); 
link.textContent = "Mozilla Developers Network";
link.href = "https://developer.mozilla.org";
para.textContent = "We hoped you enjoyed the ride.";
sect.appendChild(para);