import React from 'react';
import backgroundImage from '../assets/background.jpg';

const Home = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}
    >
      <div className="bg-black bg-opacity-25 backdrop-filter backdrop-blur-lg p-8 rounded-lg" style={{height:'27rem'}}>
        <h1 className="text-4xl font-bold mb-4 text-center text-white">Rohit Kumar</h1>
        <h2 className="text-2xl font-bold mb-4 text-center text-white">Staff Form App</h2>
        <h4 className="text-lg font-bold mb-4 text-start text-white">Short Description of app</h4>
        <p className="text-lg text-center text-white">
          In this app, users can submit their name, image, and specialised technology,<br/> and the data will be stored in the MongoDB database.
          <br />
          The dashboard page will display the data of all the users.
          <br/>
          <br/>
          
        </p>
        <h4 className="text-lg font-bold mb-4 text-start text-white">Tech Stack Used - MERN Stack</h4>
        <ol className="list-disc ml-6">
          <li className="text-white">ReactJs - For Frontend</li>
          <li className="text-white">NodeJs(express.js) - For Backend</li>
          <li className="text-white">MongoDB - For Database</li>
        </ol>
      </div>
    </div>
  );
};

export default Home;
