"use client";
import { useState } from "react";

export default function MyForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handelSubmit(e) {
    e.preventDefault();
    console.log("Form has been submitted", formData);
  }
  return (
    <form
      onSubmit={handelSubmit}
      className="space-y-4 w-96 p-6 bg-white rounded-lg shadow "
    >
      <h1 className="text-3xl">Create an Account</h1>
      <p>
        Your adventure waits, build and create the haunted house of your dreams.
      </p>
      <div className="flex flex-col gap-2">
        <label>Name</label>
        <input
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          className="border p-2"
        />
        <div className=" flex flex-col gap-2 mt-4">
          <label>Email Address</label>
          <input
            placeholder="your@email.com"
            value={formData.name}
            onChange={handleChange}
            className="border p-2"
          />
        </div>

        <div className=" flex flex-col gap-2 mt-4">
          <label>Password</label>
          <input
            placeholder="*********"
            value={formData.password}
            onChange={handleChange}
            className="border p-2"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">
            Confirm Password
          </label>
          <input
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            placeholder="••••••••"
          />
        </div>
      </div>

      <button className="w-full bg-red-500 font-bold p-2 text-white hover:scale-105 transition-all duration-300 ease-in-out ">
        Submit
      </button>
    </form>
  );
}
