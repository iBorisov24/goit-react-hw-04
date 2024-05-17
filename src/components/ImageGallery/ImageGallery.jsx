import ImageCard from "../ImageCard/ImageCard";
export default function ImageGallery({ gallery }) {
  return (
    <ul>
      {gallery.map((item) => (
        <li key={item.id}>
          <ImageCard url={item.urls.small} alt={item.alt_description} />
        </li>
      ))}
    </ul>
  );
}
