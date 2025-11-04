"use client";

export default function FormHero() {
  return (
    <section className="mt-20 shadow-md">
      <h1
        style={{ fontFamily: "var(--font-rubik-wet-paint" }}
        className="font-rubik text-5xl md:text-6xl max-w-3xl lg:text-8xl text-white"
      >
        Your Nightmare, Your Rules
      </h1>

      <p className="text-white p-2 text-2xl md:text-3xl mt-4 max-w-xl">
        Get started today and join hundreds of{" "}
        <span className="text-red-500 bg-black/20 p-1 font-bold">spooks </span>
        like you this Halloween. Building their nightmare with AI.{" "}
      </p>
    </section>
  );
}
