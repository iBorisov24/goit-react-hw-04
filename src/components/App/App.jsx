import { useState, useEffect } from 'react';
import { fetchUrl } from './fetchUrl';
import SearchBar from '../SearchBar/SearchBar';
import Loader from '../Loader/Loader';
import ImageGallery from '../ImageGallery/ImageGallery';
import ErrorMesage from '../ErrorMessage/ErrorMessage';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import toast, { Toaster } from 'react-hot-toast';
import ImageModal from '../ImageModal/ImageModal';

function App() {
	const [query, setQuery] = useState('');
	const [collection, setCollection] = useState([]);
	const [page, setPage] = useState(1);
	const [loader, setLoader] = useState(false);
	const [error, setError] = useState(false);
	const [isOpen, setisOpen] = useState(false);
	const [imageInfo, setimageInfo] = useState('');

	useEffect(() => {
		const request = async () => {
			try {
				setError(false);
				setLoader(true);
				const result = await fetchUrl(query, page);

				if (page > result.total_pages && collection.length > 1) {
					toast.error('Sorry, it is last page');
				}
				result.results.length !== 0
					? setCollection(prevCollection => [
							...prevCollection,
							...result.results,
					  ])
					: toast.error('Nothing to this query not finded, sorry', {
							position: 'top-right',
					  });
			} catch (error) {
				setError(true);
			} finally {
				setLoader(false);
			}
		};

		if (query !== '') request();
	}, [query, page]);

	const openModal = url => {
		setisOpen(true);
		setimageInfo(url);
	};

	const closeModal = () => {
		setisOpen(false);
		setimageInfo('');
	};

	const onSubmit = value => {
		setCollection([]);
		setPage(1);
		setQuery(value);
	};

	const onLoadMore = () => setPage(page + 1);

	return (
		<>
			<SearchBar onSubmit={onSubmit} />
			<ImageGallery gallery={collection} onClickFoo={openModal} />
			<ImageModal
				openModal={openModal}
				closeModal={closeModal}
				imageInfo={imageInfo}
				isOpen={isOpen}
			/>
			{loader && <Loader />}
			{error && <ErrorMesage />}
			{collection.length > 0 && <LoadMoreBtn clickBtn={onLoadMore} />}
		</>
	);
}

export default App;
