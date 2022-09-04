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
