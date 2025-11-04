"use client";

export default function FormHeader() {
  const links = [
    { name: "About", href: "#home" },
    { name: "Build Your House", href: "#build" },
    { name: "Haunted Creatures", href: "#creatures" },
    { name: "Tips & Tricks", href: "#tips" },
    { name: "Community Builds", href: "#community" },
  ];
  return (
    <header className="w-full p-6 bg-black/80 backdrop-blur-md shadow-lg flex flex-col lg:flex-row items-center justify-between">
      <h1 className="text-3xl lg:text-4xl font-rubik  text-white text-gradient animate-text-glow">
        Build Your Nightmare
      </h1>

      {/* Navigation Links */}
      <nav className="mt-4 lg:mt-0 flex gap-6">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="hover:bg-white hover:text-black transition-all duration-300 text-white/80 font-geist  lg:p-1 rounded"
          >
            {link.name}
          </a>
        ))}
      </nav>
    </header>
  );
}
