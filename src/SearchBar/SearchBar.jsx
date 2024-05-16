import { Formik, Field, Form } from 'formik';
import toast, { Toaster } from 'react-hot-toast';
export default function SearchBar({ onSubmit }) {
	return (
		<Formik
			initialValues={{ searchQuery: '' }}
			onSubmit={values =>
				values.searchQuery === ''
					? toast.error('Please,type any query', { position: 'top-right' })
					: onSubmit(values.searchQuery)
			}
		>
			<Form>
				<Field
					name="searchQuery"
					type="text"
					placeholder="Search images and photos"
				/>
				<button type="submit">Search</button>
				<Toaster />
			</Form>
		</Formik>
	);
}
