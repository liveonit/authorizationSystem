export const validateEmailError = (required?: boolean) => (value: string) => {
  if (required && !value) return 'Email is required';
  if (value && !/^[\w+-.]+@([\w-]+.)+[\w-]{2,4}$/.test(value)) return 'Invalid email address';

  return undefined;
};

export const validateUsernameError = (required?: boolean) => (value: string) => {
  if (required && !value) return 'Username is required';
  if (value?.startsWith(' ')) return `Name can not start with a blank space`;
  if (value?.length < 5) return 'Min length of 5 is allowed';
  if (value?.length > 20) return 'Max length of 20 is allowed';
  if (value && !/^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$/.test(value))
    return 'Invalid username format. The username must start and end with an alphanumeric character and only the special characters ".", "-" and "-" are allowed';

  return undefined;
};

interface IValidatePasswordOptions {
  minLength?: number;
  digit?: boolean;
  lowercase?: boolean;
  uppercase?: boolean;
}

export const validatePasswordError =
  (
    required: IValidatePasswordOptions = {
      digit: true,
      lowercase: true,
      uppercase: true,
      minLength: 8,
    },
  ) =>
  (value: string) => {
    if (!value) return 'Password is required';
    if (value.length < (required.minLength || 8))
      return `Min length of ${required.minLength || 8} is required`;
    if (required?.digit && !/\d/.test(value)) return 'At least one number is required';
    if (required?.lowercase && !/(?=.*[a-z])/.test(value))
      return 'At least one lowercase letter is required';
    if (required?.uppercase && !/(?=.*[A-Z])/.test(value))
      return 'At least one uppercase letter is required';
    return undefined;
  };

export const validateConfirmPasswordError = (password1: string) => (value: string) => {
  if (password1 !== value) return 'The password and confirmation password do not match';
  return undefined;
};
