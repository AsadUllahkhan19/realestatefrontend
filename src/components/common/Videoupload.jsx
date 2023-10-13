import React, { useState } from 'react'

const Videoupload = ({ videoLinks, setVideoLinks }) => {


  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddVideo = () => {
    if (inputValue.trim() !== '') {
      setVideoLinks([...videoLinks, inputValue]);
      setInputValue('');
    }
  };

  const handleRemoveVideo = (index) => {
    const updatedLinks = [...videoLinks];
    updatedLinks.splice(index, 1);
    setVideoLinks(updatedLinks);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold text-center mb-4">Video Uploader</h1>
      <div className="flex mb-4">
        <input
          type="text"
          className="flex-grow border rounded-l py-2 px-3"
          placeholder="Enter Video Link"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button
          className="bg-yellow-400 hover:bg-yellow-300 text-white py-2 px-4 rounded-r"
          onClick={handleAddVideo}
        >
          Add Video
        </button>
      </div>
      <ul>
        {videoLinks.map((link, index) => (
          <li key={index} className="mb-2">
            <a href={link} target="_blank" rel="noopener noreferrer">
              {link}
            </a>
            <button
              className="ml-2 bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded"
              onClick={() => handleRemoveVideo(index)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Videoupload