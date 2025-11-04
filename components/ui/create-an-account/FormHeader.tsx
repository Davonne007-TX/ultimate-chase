"use client";

export default function FormHeader() {
  const links = [
    { name: "Build Your House", href: "#build" },
    { name: "Haunted Creatures", href: "#creatures" },
    { name: "Custom Scare", href: "#tips" },
    { name: "Community Builds", href: "#community" },
  ];

  return (
    <header className="w-full p-6 bg-black/70 backdrop-blur-md shadow-lg flex flex-col lg:flex-row items-center justify-between">
      {/* Title */}
      <h1 className="text-3xl lg:text-4xl font-rubik text-white tracking-wide">
        <span className="text-transparent bg-clip-text bg-red-500">
          Build Your Nightmare
        </span>
      </h1>

      {/* Links + Buttons */}
      <div className="flex flex-col lg:flex-row items-center gap-8 mt-4 lg:mt-0 w-full lg:w-auto">
        {/* Navigation Links */}
        <nav className="hidden lg:flex gap-6">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-white/80 font-geist hover:text-white transition-all duration-300 px-2 py-1 rounded group"
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-red-500 transition-all group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Buttons */}
        <div className="flex gap-4 mt-4 lg:mt-0">
          <button className="px-4 py-2 border border-white text-white rounded-md hover:bg-white hover:text-black transition-all duration-300 shadow-lg hover:scale-105">
            Sign In
          </button>
          <button className="px-4 py-2 bg-linear-to-r from-red-800 via-red-700 to-red-600 text-white rounded-md shadow-lg hover:scale-105 transition-transform duration-300">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}
