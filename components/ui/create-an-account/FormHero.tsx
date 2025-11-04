"use client";

export default function FormHero() {
  return (
    <section className="bg-gray-800/40 rounded p-4 mt-20 shadow-md">
      <h1
        style={{ fontFamily: "var(--font-rubik-wet-paint" }}
        className="font-rubik text-6xl max-w-3xl lg:text-8xl text-white"
      >
        Your Nightmare, Your Rules
      </h1>

      <p className="text-white p-2 text-2xl mt-4">
        Get started today and join hundreds of{" "}
        <span className="text-red-500 bg-black/20 p-2 font-bold">spooks </span>
        like you this Halloween.{" "}
      </p>
    </section>
  );
}
