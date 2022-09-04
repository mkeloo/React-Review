import React from 'react';
import ReactDom from 'react-dom';

// CSS
import './index.css';

// Mini Book Project

// setup vars
const firstBook = {
  img: 'https://res.cloudinary.com/uktv/image/upload/b_rgb:000000,w_424,h_238/v1474542171/qatgchfqx4in7h58ianu.jpg',
  author: 'Jose Maria Artillo',
  title: 'Hello World Book Title',
  place: 'London, United Kingdom',
};

const secondBook = {
  img: 'https://media.gq.com/photos/5ad64204c8be07604e8b5f2f/3:2/w_1998,h_1332,c_limit/21-books-GQ-April-2018-041718-3x2.jpg',
  author: 'J.D. Salinger',
  title: 'Catcher of the Rye',
  place: 'Jacksonville, USA',
};

function BookList() {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
        place={firstBook.place}
      />
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
        place={secondBook.place}
      />
    </section>
  );
}

const Book = ({ img, title, author, place }) => {
  // const { img, title, author, place } = props;
  return (
    <article className="book">
      <img style={{ borderRadius: '5rem 2rem' }} src={img} alt="Book" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <h5 className="place">{place}</h5>
      {/* <p>{props.job}</p>
      <p>{props.title}</p>
      <p>{props.number}</p> */}
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById('root'));
