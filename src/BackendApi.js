import React, { useState, useEffect } from 'react';

function BackendApi() {
  const [helloMessage, setHelloMessage] = useState('');
  const [itemName, setItemName] = useState('');
  const [createdItem, setCreatedItem] = useState(null);
  const [error, setError] = useState(null);

  const backendUrl = process.env.REACT_APP_BACKEND_URL;

  useEffect(() => {
    // Fetch hello message
    fetch(`${backendUrl}/hello`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => setHelloMessage(data.text))
      .catch(error => {
        console.error('Error fetching hello message:', error);
        setError('Failed to fetch hello message.');
      });
  }, [backendUrl]);

  const handleCreateItem = async () => {
    try {
      const response = await fetch(`${backendUrl}/items`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: itemName }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setCreatedItem(data);
      setItemName(''); // Clear input
      setError(null);
    } catch (error) {
      console.error('Error creating item:', error);
      setError('Failed to create item.');
      setCreatedItem(null);
    }
  };

  return (
    <div>
      <h2>Backend API Integration</h2>
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}

      <h3>Hello Endpoint:</h3>
      <p>Message from backend: {helloMessage}</p>

      <h3>Create Item Endpoint:</h3>
      <input
        type="text"
        id="itemName"
        name="itemName"
        placeholder="Item Name"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
      />
      <button onClick={handleCreateItem}>Create Item</button>
      {createdItem && (
        <p>Created Item: ID: {createdItem.id}, Name: {createdItem.name}</p>
      )}
    </div>
  );
}

export default BackendApi;
