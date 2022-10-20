import { Formik } from 'formik';
import * as yup from 'yup';
import {
  SearcPanel,
  SearchForm,
  ButtonForm,
  Input,
  MessageFormError,
} from './Searchbar.styled';
import { RiSearch2Line } from 'react-icons/ri';

const searchValidationSchema = yup.object().shape({
  search: yup
    .string()
    .min(1, 'Enter search parameters')
    .max(50, 'Too The request must not exceed 50 characters!')
    .required('Enter search parameters'),
});

export const Searchbar = ({ onSubmit }) => {
  return (
    <SearcPanel>
      <Formik
        initialValues={{ search: '' }}
        onSubmit={(values, actions) => {
          onSubmit(values.search.trim());
        }}
        validationSchema={searchValidationSchema}
      >
        <SearchForm>
          <ButtonForm type="submit">
            <RiSearch2Line size="25px" />
          </ButtonForm>
          <Input
            name="search"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <MessageFormError name="search" component="p" />
        </SearchForm>
      </Formik>
    </SearcPanel>
  );
};
