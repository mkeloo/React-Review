import React from 'react';
import ReactDom from 'react-dom';

// CSS
import './index.css';

// Components
import { books } from './books';
import SpecificBook from './Book';
import { greeting } from './testing/testing';

// Mini Book Project

function BookList() {
  console.log(greeting);
  return (
    <section className="booklist">
      {books.map((book) => {
        // const { img, title, author, place } = book;
        return <SpecificBook key={book.id} {...book}></SpecificBook>;
      })}
    </section>
  );
}

ReactDom.render(<BookList />, document.getElementById('root'));
