// components/UserProfile.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function UserProfile() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        if (!response.ok) throw new Error("User not found");
        const data = await response.json();
        setUser(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  }, [id]);

  if (loading) return <p className="text-center">Loading user data...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div className="flex justify-center items-center py-16 bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">User Profile</h2>
        <div className="text-gray-600">
          <p><strong className="font-semibold">Name:</strong> {user.name}</p>
          <p><strong className="font-semibold">Username:</strong> {user.username}</p>
          <p><strong className="font-semibold">Email:</strong> {user.email}</p>
          <p><strong className="font-semibold">Company:</strong> {user.company.name}</p>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
