//import { Wrapper, Input, Icon } from './SearchBox.styled';
import { useSearchParams } from 'react-router-dom';
export const SearchBox = () => {
  const [, setSearchParams] = useSearchParams();

  const handleSubmitForm = e => {
    e.preventDefault();

    if (e.target[0].value.trim().length === 0) {
      alert('Please, enter another value');
      return;
    }
    setSearchParams({ query: e.target[0].value });
  };
  return (
    <form onSubmit={handleSubmitForm}>
      <input type="text" />
      <button type="submit">Search</button>
    </form>
  );
};
