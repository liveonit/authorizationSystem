import { validatePasswordError, validateUsernameError } from '@utils/Forms/validators';

export type ValidateResult = 'success' | 'error' | 'default' | 'warning';

export type ValidateFunction = (text?: any, required?: boolean) => ValidateResult;

export interface SelectionOption {
  id: number | string;
  value: string;
  description?: string;
  disabled?: boolean;
}

export interface FormInputControl {
  required: boolean;
  validate: ValidateFunction;
}

type FieldType =
  | 'TextInput'
  | 'SelectWithFilter'
  | 'ToggleSwitch'
  | 'MultiSelectWithFilter'
  | 'Password';

export interface Field<T> {
  keyName: keyof T;
  label: string;
  type: FieldType;
  helperText: string;
  helperTextInvalid: (value: any) => string | undefined;
  inputControl: FormInputControl;
  textInputType?:
    | 'number'
    | 'time'
    | 'text'
    | 'date'
    | 'datetime-local'
    | 'email'
    | 'month'
    | 'password'
    | 'search'
    | 'tel'
    | 'url';
  options?: SelectionOption[];
  direction?: 'up' | 'down';
}

export const validateAge: ValidateFunction = (s, r) =>
  !s
    ? r
      ? 'error'
      : 'default'
    : /^[1-9]?[1-2]?[0-9]{1}$/.test(s.toString())
    ? 'success'
    : 'error';

export const validateFullName: ValidateFunction = (s, r) =>
  !s
    ? r
      ? 'error'
      : 'default'
    : /^[a-zA-Z]+ +[a-zA-Z]+[a-zA-Z ]+?$/.test(s.toString())
    ? 'success'
    : 'error';

export const validateCountry: ValidateFunction = (s, r) =>
  !s
    ? r
      ? 'error'
      : 'default'
    : /^[a-zA-Z]+[a-zA-Z ]+?$/.test(s.toString())
    ? 'success'
    : 'error';

export const validateString: ValidateFunction = (s, r) => (!s && r ? 'error' : 'success');

export const validateId: ValidateFunction = (s, r) =>
  !s ? (r ? 'error' : 'default') : /^[1-9][0-9]*$/.test(s.toString()) ? 'success' : 'error';

export const validateBoolean: ValidateFunction = (s, r) =>
  !s ? (r ? 'error' : 'success') : 'success';

export const validateUsername: ValidateFunction = (s, r) => {
  if (r && !s) return 'error';
  if (s) return validateUsernameError(!!r)(s) ? 'error' : 'success';
  return 'default';
};

export const validateEmail: ValidateFunction = (s, r) =>
  !s
    ? r
      ? 'error'
      : 'default'
    : /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/.test(s.toString())
    ? 'success'
    : 'error';

export const validateAtLeastOneOptionRequired: ValidateFunction = (s, r) =>
  s && (s as string[]).length >= 1 ? 'success' : r ? 'error' : 'default';

export const validatePassword: ValidateFunction = (s, r) => {
  let result;
  if (r && !s) result = 'error';
  if (s) result = validatePasswordError()(s) ? 'error' : 'success';
  result = 'default';
  return result;
};
