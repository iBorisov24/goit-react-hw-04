import { Formik, Field, Form } from "formik";
import toast, { Toaster } from "react-hot-toast";
export default function SearchBar({ onSubmit }) {
  return (
    <Formik
      initialValues={{ searchQuery: "" }}
      onSubmit={(values, actions) => {
        if (values.searchQuery.trim() === "") {
          toast.error("Please,type any query", { position: "top-right" });
        } else {
          onSubmit(values.searchQuery);
          actions.resetForm();
        }
      }}
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
