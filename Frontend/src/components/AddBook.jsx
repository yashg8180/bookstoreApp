import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function AddBook() {
  const [bookData, setBookData] = useState({
    name: '',
    title: '',
    description: '',
    image: '',
    price: '',
    category: ''
  });
  const [jsonFile, setJsonFile] = useState(null);
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  // Handle single book input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Submit single book
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:4002/book/add', bookData);
      console.log('Book added successfully:', res.data);
      alert('Book added successfully!');
      navigate('/'); // Redirect after submission
    } catch (err) {
      console.error('Error:', err);
      alert('Error adding book');
    }
  };

  // Handle JSON file selection
  const handleFileChange = (e) => {
    setJsonFile(e.target.files[0]);
  };

  // Submit bulk JSON
  const handleBulkSubmit = () => {
    if (!jsonFile) {
      alert('Please select a JSON file first');
      return;
    }

    const reader = new FileReader();
    reader.onload = async (e) => {
      try {
        const booksArray = JSON.parse(e.target.result);

        if (!Array.isArray(booksArray)) {
          alert('Invalid JSON format: Expected an array of books');
          return;
        }

        // Validate each book object
        const requiredFields = ['name', 'title', 'description', 'image', 'price', 'category'];
        const invalidBooks = booksArray.filter(book => {
          return !requiredFields.every(field => book.hasOwnProperty(field));
        });

        if (invalidBooks.length > 0) {
          alert(`Invalid books found: ${invalidBooks.length} books missing required fields`);
          return;
        }

        const res = await axios.post('http://localhost:4002/book/add-bulk', booksArray, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
        
        if (res.data && res.data.count) {
          alert(`${res.data.count} books added successfully!`);
        } else {
          alert(`${booksArray.length} books added successfully!`);
        }
        navigate('/');
      } catch (err) {
        console.error('Error:', err);
        if (err.response) {
          alert(`Server error: ${err.response.data.message || err.response.statusText}`);
        } else if (err.request) {
          alert('No response from server. Please check your connection.');
        } else {
          alert('Error processing JSON file. Please check the format.');
        }
      } finally {
        // Clear the file input after submission attempt
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
        setJsonFile(null);
      }
    };
    reader.readAsText(jsonFile);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-base-200 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6">📚 Add Books</h2>

      {/* --- Bulk Upload --- */}
      <div className="border-b pb-6 mb-6">
        <h3 className="text-xl font-semibold mb-4">📂 Bulk Upload (JSON File)</h3>
        <input
          type="file"
          accept=".json"
          onChange={handleFileChange}
          className="mb-4"
          ref={fileInputRef}
        />
        <button
          onClick={handleBulkSubmit}
          className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
        >
          Upload JSON File
        </button>
      </div>

      {/* --- Single Book Form --- */}
      <div>
        <h3 className="text-xl font-semibold mb-4">➕ Add Single Book</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={bookData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Title</label>
            <input
              type="text"
              name="title"
              value={bookData.title}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Description</label>
            <textarea
              name="description"
              value={bookData.description}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              rows="4"
              required
            ></textarea>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Image URL</label>
            <input
              type="url"
              name="image"
              value={bookData.image}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Price</label>
            <input
              type="number"
              name="price"
              value={bookData.price}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              min="0"
              step="0.01"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Category</label>
            <input
              type="text"
              name="category"
              value={bookData.category}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Add Book
          </button>
        </form>
      </div>
    </div>
  );
}
