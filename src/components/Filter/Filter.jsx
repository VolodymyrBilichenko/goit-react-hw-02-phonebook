import { FilterStyle } from './Filter.styled';

export const Filter = ({ title }) => {
  return (
    <FilterStyle>
      <input className="filter__input" type="text" />
    </FilterStyle>
  );
};
