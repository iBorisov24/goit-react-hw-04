import SearchBar from '../../SearchBar/SearchBar';
import Loader from '../../Loader/Loader';
import { fetchUrl } from './fetchUrl';
import { useState, useEffect } from 'react';
import ImageGallery from '../../ImageGallery/ImageGallery';
function App() {
	const [query, setQuery] = useState('');
	const [collection, setCollection] = useState([]);
	const [page, setPage] = useState(1);
	const [loader, setLoader] = useState(false);
	const [error, setError] = useState(false);

	useEffect(() => {
		const request = async () => {
			try {
				setError(false);
				setLoader(true);
				const result = await fetchUrl(query);
				setCollection(result.results);
			} catch (error) {
				setError(true);
			} finally {
				setLoader(false);
			}
		};
		if (query !== '') request();
	}, [query, page]);

	const onSubmit = value => {
		setQuery(value);
	};

	return (
		<>
			<SearchBar onSubmit={onSubmit} />
			<ImageGallery gallery={collection} />
			{loader && <Loader />}
		</>
	);
}

export default App;
