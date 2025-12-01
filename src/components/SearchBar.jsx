import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== "") onSearch(text);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center mt-6"
    >
      <input
        type="text"
        placeholder="Search..."
        className="border border-gray-300 w-80 rounded-l-lg px-3 py-2 outline-none"
        onChange={(e) => setText(e.target.value)}
      />
      <button className="bg-gray-900 text-white px-4 rounded-r-lg">
        🔍
      </button>
    </form>
  );
}
