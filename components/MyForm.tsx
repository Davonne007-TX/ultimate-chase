"use client";
import { useState } from "react";
import OtherOptions from "./OtherOptions";

export default function MyForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<any>({});

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const newErrors: any = {};

    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (!formData.confirmPassword)
      newErrors.confirmPassword = "Confirm Password is required";
    if (
      formData.password &&
      formData.confirmPassword &&
      formData.password !== formData.confirmPassword
    )
      newErrors.confirmPassword = "Passwords do not match";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted:", formData);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 p-6 bg-white rounded-lg shadow"
    >
      <h1 className="text-3xl">Create an Account</h1>
      <p>
        Your adventure waits, build and create the haunted house of your dreams.
      </p>

      <div className="flex flex-col gap-4">
        {/* Name */}
        <div className="flex flex-col gap-2">
          <label>Name</label>
          <input
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            className="border p-2"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <label>Email Address</label>
          <input
            name="email"
            type="email"
            placeholder="your@email.com"
            value={formData.email}
            onChange={handleChange}
            className="border p-2"
          />
        </div>

        {/* Password */}
        <div className="flex flex-col gap-2">
          <label>Password</label>
          <input
            name="password"
            type="password"
            placeholder="*********"
            value={formData.password}
            onChange={handleChange}
            className="border p-2"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password}</p>
          )}
        </div>

        {/* Confirm Password */}
        <div className="flex flex-col gap-2">
          <label>Confirm Password</label>
          <input
            name="confirmPassword"
            type="password"
            placeholder="*********"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="border p-2"
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
          )}
        </div>
      </div>

      <button className="w-full bg-black font-bold p-2 text-white transition-all duration-300 ease-in-out cursor-pointer hover:bg-gradient-to-r hover:from-red-500 hover:to-red-600">
        Submit
      </button>
      <OtherOptions />
    </form>
  );
}
