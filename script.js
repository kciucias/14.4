var movies = [
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'film o czarodzieju',
    photo: 'https://i.ytimg.com/vi/pIrOAyXIjak/maxresdefault.jpg'
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    photo: 'https://www.joy.pl/u/ic/W1/u/a/17/11/to-pewne-bedzie-nowy-krol-lew-i-znamy-obsade_51.jpeg'
  },
   {
    id: 3,
    title: 'Pocahontas',
    desc: 'Film o odkryciu Ameryki ;)',
    photo: 'https://images-na.ssl-images-amazon.com/images/I/61N6GQw1IkL._SY355_.jpg'
  }
];

//klasa Movie

var Movie = React.createClass({
  propTypes: {
    movie: React.PropTypes.object.isRequired,
  },
  render: function() {
    return (
      React.createElement('li', {},
        React.createElement(MovieTitle, {}, this.props.movie.title),
        React.createElement(MovieDesc, {}, this.props.movie.desc),
        React.createElement(MoviePhoto, {}, this.props.movie.photo)
      )
      )
    },
});

var MoviePhoto = React.createClass({
  propTypes: {
    photo: React.PropTypes.string.isRequired,
  },
  render: function() {
    return React.createElement('img', {src: this.props.photo})
  }
});

var MovieTitle = React.createElement({
  propTypes: {
    title: React.PropTypes.string.isRequired,
  },
  render: function() {
    return React.createElement('h2', {}, this.props.title)
  }
});
  
var MovieDesc = React.createElement({
  propTypes: {
    desc: React.PropTypes.string.isRequired,
  },
  render: function() {
    return React.createElement('p', {}, this.props.desc)
  }
});


var moviesElements = movies.map(function(movie) {
  return React.createElement(Movie, {key: movie.id}
    );
});

var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
  );


ReactDOM.render(element, document.getElementById('app'));


