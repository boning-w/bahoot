import React from "react";

interface InputAuthProps {
  type: string;
  id: string;
  label: string;
  placeholder?: string;
  required?: boolean;
}

/**
 * Component - Input - Auth
 *
 * This component represents a basic authentication input field. It includes
 * a label and an input element for capturing user input in authentication forms.
 *
 * @param {InputAuthProps} props - Properties for the authentication input.
 */
const InputAuth = React.forwardRef<HTMLInputElement, InputAuthProps>(
  (
    { type, id, label, placeholder, required, ...props }: InputAuthProps,
    ref
  ) => {
    return (
      // Container for label and input, styled as an inline-flex column
      <div>
        {/* Label associated with the input element */}
        <label
          htmlFor={id}
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          {label}
        </label>
        {/* Input element for capturing user input */}
        <input
          type={type}
          id={id}
          name={id}
          placeholder={placeholder}
          required={required}
          className="mt-2 block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          {...props}
          ref={ref}
        />
      </div>
    );
  }
);

export default InputAuth;
