import {
  SearchbarHeader,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.styled';
import { BsSearch } from 'react-icons/bs';
export const Searchbar = ({ onSubmit, queryText, onChangeQueryText }) => {
  return (
    <SearchbarHeader>
      <SearchForm onSubmit={onSubmit}>
        <SearchFormButton type="submit">
          <BsSearch size={28} />

          <SearchFormButtonLabel>Search</SearchFormButtonLabel>
        </SearchFormButton>
        <SearchFormInput
          onChange={onChangeQueryText}
          type="text"
          name="query"
          value={queryText}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          required
        />
      </SearchForm>
    </SearchbarHeader>
  );
};
