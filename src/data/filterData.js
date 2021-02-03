export const FILTER_MAP = {
  All: () => true,
  Active: todo => !todo.isDone,
  Completed: todo => todo.isDone
};

export const FILTER_NAMES = Object.keys(FILTER_MAP);

