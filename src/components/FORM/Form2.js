import React, { useState } from "react";
import style from "../../css/form.module.css";

export default function Form2() {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const { name, email, password } = user;

  /*
  const handleNameChange = (e) => {
    setUser({ name: e.target.value, email, password });
  };
  const handleEmailChange = (e) => {
    setUser({ name, email: e.target.value, password });
  };
  const handlePasswordChange = (e) => {
    setUser({ name: name, email: email, password: e.target.value });
  };*/
  const handleChange = (e) => {
    /*
    const fieldName = e.target.name;
    if (fieldName === "name") {
      setUser({ name: e.target.value, email, password });
    } else if (fieldName === "email") {
      setUser({ name, email: e.target.value, password });
    } else if (fieldName === "password") {
      setUser({ name: name, email: email, password: e.target.value });
    }*/
    //setUser({ ...user, [e.target.name]: e.target.value });
    setUser((prevUser) => ({ ...prevUser, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    console.log("form is submitted");
    console.log(user);
    e.preventDefault();
  };
  return (
    <div>
      <h1>Registration</h1>
      <form action="" onSubmit={handleSubmit}>
        <div className={style.formGroup}>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={handleChange}
            required
          />
        </div>
        <div className={style.formGroup}>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={handleChange}
            required
          />
        </div>
        <div className={style.formGroup}>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={handleChange}
            required
          />
        </div>
        <div className={style.formGroup}>
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
}
