import css from "./LoadMoreBtn.module.css";
export default function LoadMoreBtn({ clickBtn }) {
  return (
    <button type="button" onClick={clickBtn} className={css.btn}>
      LoadMore
    </button>
  );
}
