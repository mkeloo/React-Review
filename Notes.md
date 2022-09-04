<!-- JSX component in detail -->

// Stateless Functional component
// always return jsx

function Greeting() {
return (

<div>
<h1>Hello World</h1>
<h2>My name is Moksh</h2>
</div>
);
}

// const Greeting = () => {
// return React.createElement(
// 'div',
// {},
// React.createElement('h1', {}, 'Hello World')
// );
// };

<!-- JSX Rules -->

// JSX Rules
// return single element
// div / section / article or Frgament
// use camelCase for html attribute
// className instead of class
// close every element
// formatting

function Greeting() {
return (

<div>
<h1>Hello World</h1>
<h2>My name is Moksh</h2>
<ul>
<li>
<a href="https://www.google.com">Hello World</a>
</li>
</ul>
</div>
);
}

<!-- Nested Components and Tools -->

function Greeting() {
return (

<div>
<Person />
<Message />
</div>
);
}

// Separate Chunks or Functions
const Person = () => <h1>John Doe</h1>;
const Message = () => {
return <p>This is my Message</p>;
};

<!-- Mini Book Project -->

function BookList() {
return (

<section>
<Book />
<Book />
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

<article>
<Image />
<Title />
<Author />
</article>
);
};

const Image = () => (
<img
    src="https://res.cloudinary.com/uktv/image/upload/b_rgb:000000,w_424,h_238/v1474542171/qatgchfqx4in7h58ianu.jpg"
    alt="Book"
  />
);

const Title = () => <h1>Book 1</h1>;

const Author = () => <h4>Jose Artillo</h4>;

<!-- CSS Basics and JSX CSS -->

// CSS
import './index.css';

// Mini Book Project

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
<Image />
<Title />
<Author />
</article>
);
};

const Image = () => (
<img
style={{ borderRadius: '5rem 2rem' }}
src="https://res.cloudinary.com/uktv/image/upload/b_rgb:000000,w_424,h_238/v1474542171/qatgchfqx4in7h58ianu.jpg"
alt="Book"
/>
);

const Title = () => <h1>Book 1</h1>;

const Author = () => (

  <h4 style={{ color: '#617d98', fontSize: '1.2rem', marginTop: '0.25rem' }}>
    Jose Artillo
  </h4>
);

<!-- JSX JavaScript -->

// Mini Book Project

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

const author = 'Jose Artillo';
const place = 'London, United Kingdom';

const Book = () => {
const title = 'Hello World Book Title';
return (

<article className="book">
<img
style={{ borderRadius: '5rem 2rem' }}
src="https://res.cloudinary.com/uktv/image/upload/b_rgb:000000,w_424,h_238/v1474542171/qatgchfqx4in7h58ianu.jpg"
alt="Book"
/>
<h1>{title}</h1>
<Author />
<h5>{place.toUpperCase()}</h5>
</article>
);
};

const Author = () => (

  <h4 style={{ color: '#617d98', fontSize: '1.2rem', marginTop: '0.25rem' }}>
    {author}
  </h4>
);

<!-- Props -->

// Mini Book Project

// setup vars
const firstBook = {
img: 'https://res.cloudinary.com/uktv/image/upload/b_rgb:000000,w_424,h_238/v1474542171/qatgchfqx4in7h58ianu.jpg',
author: 'Jose Artillo',
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

const Book = (props) => {
return (

<article className="book">
<img style={{ borderRadius: '5rem 2rem' }} src={props.img} alt="Book" />
<h1>{props.title}</h1>
<h4>{props.author}</h4>
<h5 className="place">{props.place}</h5>
{/_ <p>{props.job}</p>
<p>{props.title}</p>
<p>{props.number}</p> _/}
</article>
);
};

<!-- Props Destructuring and Props children -->

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
      >
<p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum repellat,
officiis quidem optio deserunt cupiditate sapiente culpa harum amet
at.
</p>
</Book>
<Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
        place={secondBook.place}
      />
</section>
);
}

const Book = ({ img, title, author, place, children }) => {
// const { img, title, author, place, children } = props;
return (

<article className="book">
<img style={{ borderRadius: '5rem 2rem' }} src={img} alt="Book" />
<h1>{title}</h1>
<h4>{author}</h4>
{children}
<h5 className="place">{place}</h5>
{/_ <p>{props.job}</p>
<p>{props.title}</p>
<p>{props.number}</p> _/}
</article>
);
};

<!-- Proper List -->

// Mini Book Project

// setup vars
const books = [
{
img: 'https://res.cloudinary.com/uktv/image/upload/b_rgb:000000,w_424,h_238/v1474542171/qatgchfqx4in7h58ianu.jpg',
author: 'Jose Maria Artillo',
title: 'Hello World Book Title',
place: 'London, United Kingdom',
},

{
img: 'https://media.gq.com/photos/5ad64204c8be07604e8b5f2f/3:2/w_1998,h_1332,c_limit/21-books-GQ-April-2018-041718-3x2.jpg',
author: 'J.D. Salinger',
title: 'Catcher of the Rye',
place: 'Jacksonville, USA',
},

{
img: 'https://s26162.pcdn.co/wp-content/uploads/sites/2/2022/05/Book.jpg',
author: 'G.R.R.M',
title: 'Game of Thrones',
place: 'Westeros',
},

{
img: 'https://s26162.pcdn.co/wp-content/uploads/sites/2/2022/05/Book.jpg',
author: 'G.R.R.M',
title: 'Game of Thrones',
place: 'Westeros',
},
];

function BookList() {
return (

<section className="booklist">
{books.map((book) => {
// const { img, title, author, place } = book;
return <Book book={book}></Book>;
})}
</section>
);
}

const Book = (props) => {
const { img, title, author, place } = props.book;
return (

<article className="book">
<img style={{ borderRadius: '5rem 2rem' }} src={img} alt="Book" />
<h1>{title}</h1>
<h4>{author}</h4>
<h5 className="place">{place}</h5>
</article>
);
};

<!-- Key Prop -->

// Mini Book Project

// setup vars
const books = [
{
id: 1,
img: 'https://res.cloudinary.com/uktv/image/upload/b_rgb:000000,w_424,h_238/v1474542171/qatgchfqx4in7h58ianu.jpg',
author: 'Jose Maria Artillo',
title: 'Hello World Book Title',
place: 'London, United Kingdom',
},

{
id: 2,
img: 'https://media.gq.com/photos/5ad64204c8be07604e8b5f2f/3:2/w_1998,h_1332,c_limit/21-books-GQ-April-2018-041718-3x2.jpg',
author: 'J.D. Salinger',
title: 'Catcher of the Rye',
place: 'Jacksonville, USA',
},

{
id: 3,
img: 'https://s26162.pcdn.co/wp-content/uploads/sites/2/2022/05/Book.jpg',
author: 'G.R.R.M',
title: 'Game of Thrones',
place: 'Westeros',
},

{
id: 4,
img: 'https://s26162.pcdn.co/wp-content/uploads/sites/2/2022/05/Book.jpg',
author: 'G.R.R.M',
title: 'Game of Thrones',
place: 'Westeros',
},
];

function BookList() {
return (

<section className="booklist">
{books.map((book) => {
// const { img, title, author, place } = book;
return <Book key={book.id} book={book}></Book>;
})}
</section>
);
}

const Book = (props) => {
const { img, title, author, place } = props.book;
return (

<article className="book">
<img style={{ borderRadius: '5rem 2rem' }} src={img} alt="Book" />
<h1>{title}</h1>
<h4>{author}</h4>
<h5 className="place">{place}</h5>
</article>
);
};

<!-- Spread Operator -->

function BookList() {
return (

<section className="booklist">
{books.map((book) => {
// const { img, title, author, place } = book;
return <Book key={book.id} {...book}></Book>;
})}
</section>
);
}

const Book = (props) => {
console.log(props);
const { img, title, author, place } = props;
return (

<article className="book">
<img style={{ borderRadius: '5rem 2rem' }} src={img} alt="Book" />
<h1>{title}</h1>
<h4>{author}</h4>
<h5 className="place">{place}</h5>
</article>
);
};

<!-- Event Basics -->

// Mini Book Project

// setup vars
const books = [
{
id: 1,
img: 'https://res.cloudinary.com/uktv/image/upload/b_rgb:000000,w_424,h_238/v1474542171/qatgchfqx4in7h58ianu.jpg',
author: 'Jose Maria Artillo',
title: 'Hello World Book Title',
place: 'London, United Kingdom',
},

{
id: 2,
img: 'https://media.gq.com/photos/5ad64204c8be07604e8b5f2f/3:2/w_1998,h_1332,c_limit/21-books-GQ-April-2018-041718-3x2.jpg',
author: 'J.D. Salinger',
title: 'Catcher of the Rye',
place: 'Jacksonville, USA',
},

{
id: 3,
img: 'https://s26162.pcdn.co/wp-content/uploads/sites/2/2022/05/Book.jpg',
author: 'G.R.R.M',
title: 'Game of Thrones',
place: 'Westeros',
},

{
id: 4,
img: 'https://s26162.pcdn.co/wp-content/uploads/sites/2/2022/05/Book.jpg',
author: 'T.R.R.M',
title: 'House of the Dragon',
place: "King's Landing",
},
];

function BookList() {
return (

<section className="booklist">
{books.map((book) => {
// const { img, title, author, place } = book;
return <Book key={book.id} {...book}></Book>;
})}
</section>
);
}

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
}} >
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

<!-- Import and Export -->

// import 1: index.js

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

// import 2: books.js
// Books array
export const books = [
{
id: 1,
img: 'https://res.cloudinary.com/uktv/image/upload/b_rgb:000000,w_424,h_238/v1474542171/qatgchfqx4in7h58ianu.jpg',
author: 'Jose Maria Artillo',
title: 'Hello World Book Title',
place: 'London, United Kingdom',
},

{
id: 2,
img: 'https://media.gq.com/photos/5ad64204c8be07604e8b5f2f/3:2/w_1998,h_1332,c_limit/21-books-GQ-April-2018-041718-3x2.jpg',
author: 'J.D. Salinger',
title: 'Catcher of the Rye',
place: 'Jacksonville, USA',
},

{
id: 3,
img: 'https://s26162.pcdn.co/wp-content/uploads/sites/2/2022/05/Book.jpg',
author: 'G.R.R.M',
title: 'Game of Thrones',
place: 'Westeros',
},

{
id: 4,
img: 'https://s26162.pcdn.co/wp-content/uploads/sites/2/2022/05/Book.jpg',
author: 'T.R.R.M',
title: 'House of the Dragon',
place: "King's Landing",
},
];

// import 3: Book.js
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
}} >
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

// import 4: importing testing folder => testing.js

<!--  -->
