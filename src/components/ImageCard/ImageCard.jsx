import css from "./ImageCard.module.css";
export default function ImageCard({ url, alt, onClickFoo, bigUrl }) {
  return (
    <div>
      <img
        className={css.img}
        onClick={() => {
          onClickFoo(bigUrl);
        }}
        src={url}
        alt={alt}
        width={"250"}
        height={"150"}
      />
    </div>
  );
}
