import { FILTERS_BUTTONS } from "../consts";
import { type FilterValue } from "../types";
interface Props {
  filterSelected: FilterValue;
  onFilterChange: (filter: FilterValue) => void;
}

export const Filters: React.FC<Props> = ({
  filterSelected,
  onFilterChange,
}) => {
  return (
    <ul>
      {Object.entries(FILTERS_BUTTONS).map(([key, { label, href }]) => (
        <li key={key}>
          <a
            href={href}
            className={filterSelected === key ? "selected" : ""}
            onClick={(event) => {
              event.preventDefault();
              onFilterChange(key as FilterValue);
            }}
          >
            {label}
          </a>
        </li>
      ))}
    </ul>
  );
};
