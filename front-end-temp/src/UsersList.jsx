import React, { useEffect, useState } from 'react';
import { API_BASE_URL } from './config';

function UsersList() {
  const [users, setUsers] = useState([]);
  console.log('API_BASE_URL:', API_BASE_URL);

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/users`)
      .then(response => response.json())
      .then(data => setUsers(data.users))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
    <div>
      <h2>Users List</h2>
      {users.length > 0 ? (
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      ) : (
        <p>No users found.</p>
      )}
    </div>
  );
}

export default UsersList;
