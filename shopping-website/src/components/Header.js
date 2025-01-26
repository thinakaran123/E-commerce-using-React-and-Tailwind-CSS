import React from "react";

function Header({ user }) {
  return (
    <header className="bg-blue-500 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Shopping Website</h1>
      <div>
        {user ? (
          <span>{user.name}!</span>
        ):console.log("No user")}
      </div>
    </header>
  );
}

export default Header;