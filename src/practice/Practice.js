import React, { useState } from "react";

function Practice() {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const { name, email, password } = user;
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    console.log("Form submitted");
    console.log(user);
    e.preventDefault();
  };
  return (
    <div>
      <h1>Practice</h1>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Username: </label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={handleChange}
            placeholder="enter name"
          />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={handleChange}
            placeholder="enter email"
          />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={handleChange}
            placeholder="enter password"
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Practice;
