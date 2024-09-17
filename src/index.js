import React from 'react';
import ReactDOM from 'react-dom';

//importing Stylesheet
import './style.css';

//Importing Images
import virat1 from "./assests/images/virat1.jpg"
import virat2 from "./assests/images/virat2.jpg"
import virat3 from "./assests/images/virat3.jpg"
import virat4 from "./assests/images/virat4.jpg"
import virat5 from "./assests/images/virat5.jpg"
import virat6 from "./assests/images/virat6.jpg"
import virat7 from "./assests/images/virat7.jpg"
import virat8 from "./assests/images/virat8.jpg"
import virat9 from "./assests/images/virat9.jpg"
import virat10 from "./assests/images/virat10.jpg"
import virat11 from "./assests/images/virat11.jpg"
import virat12 from "./assests/images/virat12.jpg"


// ImageGallery Component
function ImageGallery({ images }) {
  return (
    <div className="gallery">
      {images.map((image, index) => (
        <div className="image-item" key={index}>
          <img src={image.url} alt={image.alt} />
        </div>
      ))}
    </div>
  );
}

// image data
const imageData = [
  {
    url: virat9,
    alt: 'Placeholder Image 1',
  },
  {
    url: virat10,
    alt: 'Placeholder Image 2',
  },
  {
    url: virat11,
    alt: 'Placeholder Image 3',
  },
  {
    url: virat1,
    alt: 'Placeholder Image 4',
  },
  {
    url: virat5,
    alt: 'Placeholder Image 4',
  },
  {
    url: virat6,
    alt: 'Placeholder Image 4',
  },
  {
    url: virat7,
    alt: 'Placeholder Image 4',
  },
  {
    url: virat8,
    alt: 'Placeholder Image 4',
  },
  {
    url: virat4,
    alt: 'Placeholder Image 4',
  },
  {
    url: virat2,
    alt: 'Placeholder Image 4',
  },
  {
    url: virat3,
    alt: 'Placeholder Image 4',
  },
  {
    url: virat12,
    alt: 'Placeholder Image 4',
  },
];

// App Component
function App() {
  return (
    <div className="app">
      <h1>VIRAT KOHLI</h1>
      <ImageGallery images={imageData} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
