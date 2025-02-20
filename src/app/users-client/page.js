"use client";

import { useState, useEffect } from "react";

export default function UsersClient() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        ); // Replace with your actual API URL
        if (!response.ok) throw new Error("Failed to fetch data");
        const data = await response.json();
        console.log(data);
        setUsers(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    }
    fetchUsers();
  }, []);

  if (loading) return <div>Loading ...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {users.map((user) => (
        <div key={user.id} className="p-4 border rounded-lg shadow-lg">
          <h2 className="text-xl font-bold">{user.name}</h2>
          <p className="text-gray-700">Username: {user.username}</p>
          <p className="text-gray-700">Email: {user.email}</p>
          <p className="text-gray-700">Phone: {user.phone}</p>
          <p>users-client</p>
        </div>
      ))}
    </div>
  );
}
