import React from 'react';
import ReactDom from 'react-dom';

// CSS
import './index.css';

// Mini Book Project

// setup vars
const author = 'Jose Artillo';
const place = 'London, United Kingdom';
const title = 'Hello World Book Title';
const img =
  'https://res.cloudinary.com/uktv/image/upload/b_rgb:000000,w_424,h_238/v1474542171/qatgchfqx4in7h58ianu.jpg';

function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <img style={{ borderRadius: '5rem 2rem' }} src={img} alt="Book" />
      <h1>{title}</h1>
      <Author />
      <h5 className="place">{place.toUpperCase()}</h5>
    </article>
  );
};

const Author = () => (
  <h4 style={{ color: '#617d98', fontSize: '1.2rem', marginTop: '0.25rem' }}>
    {author}
  </h4>
);

ReactDom.render(<BookList />, document.getElementById('root'));
