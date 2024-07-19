export const TODO_FILTERS = {
  ALL: "all",
  ACTIVE: "active",
  COMPLETED: "completed",
} as const;

export const FILTERS_BUTTONS = {
  [TODO_FILTERS.ALL]: {
    label: "Todos",
    href: `/?filter=${TODO_FILTERS.ALL}`,
  },
  [TODO_FILTERS.ACTIVE]: {
    label: "Pendientes",
    href: `/?filter=${TODO_FILTERS.ACTIVE}`,
  },
  [TODO_FILTERS.COMPLETED]: {
    label: "Completados",
    href: `/?filter=${TODO_FILTERS.COMPLETED}`,
  },
} as const;