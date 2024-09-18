import React, { useEffect, useState } from 'react';
import UsersList from './UsersList';
import CreateItem from './CreateItem';
// API base URL from environment variables
import { API_BASE_URL } from './config';


function App() {
  const [message, setMessage] = useState('');
  // Log the API base URL for debugging
  console.log('API_BASE_URL:', API_BASE_URL);

  useEffect(() => {
    // Fetch the message from the backend (http://localhost:5000/api/playground)
    fetch(`${API_BASE_URL}/api/playground`)
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h2>{message || 'Placeholder Message'}</h2>
      <UsersList />
      <CreateItem />
    </div>
  );
}

export default App;
