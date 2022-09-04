import React from 'react';

const Book = ({ img, title, author, place }) => {
  // Attribute, eventHandler
  // onClick, onMouseOver
  // setup handler as reference or inline function

  // simple function event handler example
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert('Hello World');
  };

  // more complex event handler example
  const complexExample = (author) => {
    console.log(author);
  };

  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img style={{ borderRadius: '5rem 2rem' }} src={img} alt="Book" />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <h5 className="place">{place}</h5>
      <button type="button" onClick={clickHandler}>
        Reference Handler Exmaple
      </button>
      <button type="button" onClick={() => complexExample(author)}>
        More Complex Example
      </button>
    </article>
  );
};

export default Book;
