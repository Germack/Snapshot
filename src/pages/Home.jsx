import { useState } from "react";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import Gallery from "../components/Gallery";
import useFlickr from "../hooks/useFlickr";

export default function Home() {
  const [query, setQuery] = useState("Mountain");
  const { images, loading } = useFlickr(query);

  return (
    <div className="text-center">
      <h1 className="text-6xl font-bold mt-14 mb-8 font-serif">SnapShot</h1>

      <SearchBar onSearch={(value) => setQuery(value)} />

      <Categories onSelect={(cat) => setQuery(cat)} />

      <Gallery title={query} images={images} loading={loading} />
    </div>
  );
}
