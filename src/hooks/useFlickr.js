import { useState, useEffect } from "react";

export default function useFlickr(query) {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_KEY = "YOUR_API_KEY";

  useEffect(() => {
    if (!query) return;
    setLoading(true);

    const fetchImages = async () => {
      const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&text=${query}&per_page=24&format=json&nojsoncallback=1`;

      const res = await fetch(url);
      const data = await res.json();

      const formatted = data.photos.photo.map((img) => ({
        id: img.id,
        url: `https://live.staticflickr.com/${img.server}/${img.id}_${img.secret}_w.jpg`,
      }));

      setImages(formatted);
      setLoading(false);
    };

    fetchImages();
  }, [query]);

  return { images, loading };
}
