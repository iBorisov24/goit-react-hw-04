import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
export default function ImageGallery({ gallery, onClickFoo }) {
  return (
    <ul className={css.gallery}>
      {gallery.map((item) => (
        <li key={item.id} className={css.galleryItem}>
          <ImageCard
            url={item.urls.small}
            alt={item.alt_description}
            onClickFoo={onClickFoo}
            bigUrl={item.urls.regular}
          />
        </li>
      ))}
    </ul>
  );
}
