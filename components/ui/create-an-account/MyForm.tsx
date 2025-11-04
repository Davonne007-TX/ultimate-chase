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

  interface FormErrors {
    name?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
  }

  const [errors, setErrors] = useState<FormErrors>({});

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const newErrors: FormErrors = {};

    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
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
      alert("Form has been submitted!");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-2 px-8 py-8 lg:ml-20 mb-6 bg-linear-to-br from-gray-50 to-gray-100 rounded-2xl shadow-2xl max-w-lg "
    >
      <h1 className="text-3xl font-bold text-gray-900 mb-2">
        Create an Account
      </h1>
      <p className="text-gray-700 text-lg">
        Your adventure waits, build and create the haunted house of your dreams.
      </p>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label className="text-gray-800 font-medium">Name</label>
          <input
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 transition-all duration-300"
          />
          {errors.name && (
            <p className="text-red-500 text-sm transition-opacity duration-300">
              {errors.name}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-gray-800 font-medium">Email Address</label>
          <input
            name="email"
            type="email"
            placeholder="your@email.com"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 transition-all duration-300"
          />
          {errors.email && (
            <p className="text-red-500 text-sm transition-opacity duration-300">
              {errors.email}
            </p>
          )}
        </div>

        {/** Password **/}
        <div className="flex flex-col gap-2">
          <label className="text-gray-800 font-medium">Password</label>
          <input
            name="password"
            type="password"
            placeholder="*********"
            value={formData.password}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 transition-all duration-300"
          />
          {errors.password && (
            <p className="text-red-500 text-sm transition-opacity duration-300">
              {errors.password}
            </p>
          )}
        </div>

        {/* * Confirm Password *
        <div className="flex flex-col gap-2">
          <label className="text-gray-800 font-medium">Confirm Password</label>
          <input
            name="confirmPassword"
            type="password"
            placeholder="*********"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 transition-all duration-300"
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm transition-opacity duration-300">
              {errors.confirmPassword}
            </p>
          )}
        </div> */}
      </div>

      <button
        type="submit"
        className="w-full mt-4 bg-linear-to-r from-red-500 to-red-600 text-white font-bold py-3 rounded-xl shadow-lg hover:scale-105 transform transition-all duration-300"
      >
        Submit
      </button>

      <OtherOptions />
    </form>
  );
}
