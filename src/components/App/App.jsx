import { useState, useEffect } from "react";
import { fetchUrl } from "./fetchUrl";
import SearchBar from "../SearchBar/SearchBar";
import Loader from "../Loader/Loader";
import ImageGallery from "../ImageGallery/ImageGallery";
import ErrorMesage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import toast, { Toaster } from "react-hot-toast";
import ReactModal from "react-modal";

function App() {
  const [query, setQuery] = useState("");
  const [collection, setCollection] = useState([]);
  const [page, setPage] = useState(1);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [IsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const request = async () => {
      try {
        setError(false);
        setLoader(true);
        const result = await fetchUrl(query, page);
        if (page > result.total_pages) {
          toast.error("Sorry, it is last page");
        }
        result.results.length !== 0
          ? setCollection((prevCollection) => [
              ...prevCollection,
              ...result.results,
            ])
          : toast.error("Nothing to this query not finded, sorry", {
              position: "top-right",
            });
      } catch (error) {
        setError(true);
      } finally {
        setLoader(false);
      }
    };

    function openModal() {
      setIsOpen(true);
    }

    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = "#f00";
    }

    function closeModal() {
      setIsOpen(false);
    }

    if (query !== "") request();
  }, [query, page]);

  const onSubmit = (value) => {
    setCollection([]);
    setQuery(value);
  };
  const onLoadMore = () => {
    setPage(page + 1);
  };
  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      <ImageGallery gallery={collection} />
      {loader && <Loader />}
      {error && <ErrorMesage />}
      {collection.length > 0 && <LoadMoreBtn clickBtn={onLoadMore} />}
    </>
  );
}

export default App;
