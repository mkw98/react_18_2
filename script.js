var movies = [
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'film o czarodzieju',
	img: "https://1.fwcdn.pl/po/05/71/30571/7529392.6.jpg"
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    img: "https://www.mylionking.com/w/images/thumb/4/4e/The_Lion_King_%28comic%29_01.jpg/220px-The_Lion_King_%28comic%29_01.jpg"
  },
 {
    id: 3,
    title: 'Truman show',
    desc: 'Film o tym, że wszystko jest iluzją',
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDDCKt015N89r5bq1e-iy-4ij9iIgQIlziOIkns_AbOdb9Ye37"
  },
{
    id: 4,
    title: 'Bez lęku',
    desc: 'Film o tym, że strach jest potrzebny',
    img: "https://upload.wikimedia.org/wikipedia/en/b/b4/Fearless_ver1.jpg"
  },
  {
  	id: 5,
  	title: 'Stalker',
  	desc: 'Film o wędrówce do tajemniczej Zony',
  	img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpv-KL57xeDqCY2-9F_Uu3FJJU1muaDgoHXo-inSdKjIZkI2uVbw"
  }
];

var moviesElements = movies.map(function(movie) {
  return React.createElement('li', {key: movie.id},
      React.createElement('h2', {}, movie.title),
      React.createElement('p', {}, movie.desc),
      React.createElement('img', {src: movie.img})
    );
	});

var element =
  	React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
  );


ReactDOM.render(element, document.getElementById('app'));
