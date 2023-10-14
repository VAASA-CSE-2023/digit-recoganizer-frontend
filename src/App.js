import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result);
        console.log('set image')
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageUpload = () => {
    console.log('image')
    if (image) {
      // Implement the image upload to the server here.
      // You'd typically use a backend API for this.
      // For now, we'll just alert the image data.
      alert(`Image Data: ${image}`);
    }
  };

  return (
    <div className="App">
      <div className="image-upload-container">
      {/* Top Section */}
      <div className="top-section">
        <h1>Welcome</h1>
        <p>Upload an image and click the button to start the process.</p>
      </div>

      {/* Card Section */}
      <div className="card">
        <div style={{height:'80%', marginBottom:10}}>
         {image ? (
            <img src={image} alt="Uploaded" />
          ) : (
            <div className="sample-image">
              <img src="sample-image.jpg" alt="Sample" />
            </div>
          )}
        </div>
        <div className='center'> 
          <label htmlFor="fileInput" className="image-upload-button">
            {image ? "Replace Image" : "Select Image"}
          </label>
          
          <label className="image-upload-button" style={{marginLeft:20}} onClick={handleImageUpload}>
            {"Upload Image"}
          </label>

          <input
            type="button"
            accept="image/*"
            id="upload"
            onChange={handleImageUpload}
            style={{ display: 'none' }}
          />
          
          <input
            type="file"
            accept="image/*"
            id="fileInput"
            onChange={handleImageChange}
            style={{ display: 'none' }}
          />

        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
