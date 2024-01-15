interface ButtonAuthProps {
  /**
   * Button contents
   */
  label: string;
}

/**
 * Component - Button - Auth
 *
 * This component represents an authentication button used for sign un and login.
 *
 * @param {ButtonAuthProps} props - Properties for the authentication button.
 *
 */
export default function ButtonAuth({ label }: ButtonAuthProps) {
  return (
    <button className="font-mono font-semibold bg-[rgb(38,137,12)] text-white min-h-[42px] text-sm px-4 pb-1 rounded shadow-[rgba(0,0,0,0.25)_0px_-4px_inset] hover:min-h-10 hover:mt-0.5 hover:pb-0.5 hover:bg-[rgb(35,126,11)] hover:shadow-[rgba(0,0,0,0.25)_0px_-2px_inset] w-full">
      {label}
    </button>
  );
}
