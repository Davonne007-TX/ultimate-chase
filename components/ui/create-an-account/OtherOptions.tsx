"use client";

export default function OtherOptions() {
  return (
    <section>
      <div className="relative flex items-center py-5">
        <div className="grow border-t border-gray-400"></div>
        <span className="shrink mx-4  text-white p-2 text-sm  bg-white dark:bg-gray-800">
          OR
        </span>
        <div className="grow border-t border-gray-400"></div>
      </div>
      <div className="flex flex-col gap-6">
        <button className="border p-2 cursor-pointer text-lg hover:bg-red-500 hover:text-white transition-all duration-300 border-black rounded font-extralight">
          🍜 Sign in with Noodle
        </button>

        <button className="border p-2 cursor-pointer text-lg hover:bg-red-500 hover:text-white transition-all duration-300 border-black rounded font-extralight">
          🎻 Sign in with Fiddle
        </button>
      </div>
    </section>
  );
}
