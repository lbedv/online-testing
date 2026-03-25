// Select option type for dropdowns and multiple choice questions in the test interface.
export type SelectOption<T = string> = {
  value: T;
  label: string;
};