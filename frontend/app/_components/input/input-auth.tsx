import React from "react";
import { FieldError } from "react-hook-form";
import clsx from "clsx";

interface InputAuthProps {
  type: string;
  id: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  error?: FieldError;
  autoComplete?: string;
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
    {
      type,
      id,
      label,
      placeholder,
      required,
      error,
      autoComplete,
      ...props
    }: InputAuthProps,
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
          autoComplete={autoComplete}
          className={clsx(
            "mt-2 block w-full rounded-md border px-3 py-1.5 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[3px]",
            error
              ? "border-red-400 focus:border-red-600"
              : "border-gray-400 focus:border-blue-600"
          )}
          {...props}
          ref={ref}
        />
      </div>
    );
  }
);

export default InputAuth;
