const preview = document.querySelector('.preview');
const para = document.createElement('p');
const band = {
    name: 'Young the Giant',
    nationality: 'american',
    genre: 'Alt Rock',
    members: 5,
    years: 2004,
    split: false,
    albums: {
        name: ['Young the Giant', 'Mind Over Matter', 'Home of The Strange', 'Mirror Master', 'American Bollywood'],
        released:[2010, 2014, 2016, 2018, 2022]  
    }
};
const bandInfo = `${band.name} is an ${band.nationality} that plays ${band.genre}.
The band was formed in ${band.years} and has ${band.members} members. Some of the most notable albums
are: ${band.albums.name[0]} from ${band.albums.released[0]} and ${band.albums.name[1]} from ${band.albums.released[1]} `


para.textContent = bandInfo;
preview.appendChild(para);