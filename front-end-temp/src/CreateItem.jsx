import React, { useState } from 'react';
import { API_BASE_URL } from './config';

function CreateItem() {
  const [itemData, setItemData] = useState({ name: '', description: '' });

  const handleChange = (event) => {
    setItemData({
      ...itemData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('API_BASE_URL:', API_BASE_URL);

    fetch(`${API_BASE_URL}/api/items`, {
      method: 'POST',
      body: JSON.stringify(itemData),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        console.log('Item created:', data);
        setItemData({ name: '', description: '' });
      })
      .catch(error => console.error('Error creating item:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={itemData.name}
        onChange={handleChange}
        placeholder="Item Name"
        required
      />
      <input
        name="description"
        value={itemData.description}
        onChange={handleChange}
        placeholder="Description"
        required
      />
      <button type="submit">Create Item</button>
    </form>
  );
}

export default CreateItem;
