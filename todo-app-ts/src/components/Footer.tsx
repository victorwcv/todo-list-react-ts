import { FilterValue } from "../types";
import { Filters } from "./Filter";

interface Props {
  activeCount: number;
  completedCount: number;
  filterSelected: FilterValue;
  onClearCompleted: () => void;
  handleFilterChange: (filter: FilterValue) => void;
}

export const Footer: React.FC<Props> = ({
  activeCount = 0,
  completedCount = 0,
  filterSelected,
  onClearCompleted,
  handleFilterChange,
}) => {
  return (
    <footer>
      <span>
        <strong>{activeCount}</strong> tareas pendientes
      </span>
      <Filters
        filterSelected={filterSelected}
        onFilterChange={handleFilterChange}
      />
      {
        completedCount > 0 && (
          <button
            className="clear-completed"
            onClick={onClearCompleted}
          >
            Limpiar completadas
          </button>
        )
      }
    </footer>
  );
};
