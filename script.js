var movies = [
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'film o czarodzieju',
    src: 'http://ocs-pl.oktawave.com/v1/AUTH_2887234e-384a-4873-8bc5-405211db13a2/splay/2014/07/harry-potter-nowa-historia.jpg'
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    src: 'https://t-eska.cdn.smcloud.net/common/K/K/s/KK2400613Exwz.jpg/ru-0-r-650,0-n-KK2400613Exwz_krol_lew_w_nowej_wersji_a_w_nim_beyonce_kiedy_premiera.jpg'
  },
  {
    id: 3,
    title: 'Władca pierścieni',
    desc: 'Film o frodo:)',
    src: 'https://media.teleman.pl/photos/Wladca-Pierscieni-Dwie-Wieze-2002.jpg'
  },
  {
    id: 4,
    title: 'Wikingowie',
    desc: 'Film o wikingach',
    src: 'https://fashionseriesblog.files.wordpress.com/2015/06/526b8e2c96f3ec8ace2e58f624512a69.jpg'
  },
  {
    id: 5,
    title: 'Gra o tron',
    desc: 'Film o Johnie Snow',
    src: 'https://postmediatorontosun.files.wordpress.com/2018/01/game-of-thrones-season-7-episode-6-jon-snow.jpg'
  }
];

var moviesElements = movies.map(function(movie) {
  return React.createElement('li', {key: movie.id},
      React.createElement('h2', {}, movie.title),
      React.createElement('p', {}, movie.desc),
      React.createElement('img', {src:movie.src}),
    );
});

var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
  );
ReactDOM.render(element, document.getElementById('app'));