export default function Gallery({ images, title, loading }) {
  return (
    <div className="text-center mt-10">
      <h2 className="text-3xl font-semibold">{title} Pictures</h2>

      {loading ? (
        <p className="text-xl mt-8 animate-pulse">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-8">
          {images.map((img) => (
            <img
              key={img.id}
              src={img.url}
              className="rounded-lg shadow-md hover:scale-105 transition cursor-pointer"
            />
          ))}
        </div>
      )}
    </div>
  );
}
