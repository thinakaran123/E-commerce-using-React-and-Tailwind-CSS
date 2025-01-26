import React, { useState } from "react";

function Account({ user, updateUserDetails }) {
  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");
  const [address, setAddress] = useState(user ? user.address : "");
  const [password, setPassword] = useState(user ? user.password : "");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check if passwords match during account creation or editing
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Update user details
    updateUserDetails({ name, email, address, password });
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">{user ? "Edit" : "Create"} Account</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-semibold">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-semibold">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-semibold">Shipping Address</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        {!user && (
          <>
            <div>
              <label className="block text-sm font-semibold">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold">Confirm Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full p-2 border rounded"
                required
              />
            </div>
          </>
        )}
        {user && (
          <div>
            <label className="block text-sm font-semibold">Password (Optional)</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>
        )}
        <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition">
          {user ? "Update Account" : "Create Account"}
        </button>
      </form>
    </div>
  );
}

export default Account;
