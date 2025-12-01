export default function Categories({ onSelect }) {
  const cats = ["Mountain", "Beaches", "Birds", "Food"];

  return (
    <div className="flex justify-center gap-4 mt-4">
      {cats.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className="px-4 py-1 bg-gray-900 text-white rounded-lg hover:bg-gray-700"
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
