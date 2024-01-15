import clsx from "clsx";
import { BsCheckCircle } from "react-icons/bs";
import { BsInfoCircle } from "react-icons/bs";
import { BsExclamationTriangle } from "react-icons/bs";
import { BsExclamationCircle } from "react-icons/bs";

interface AlertProps {
  severity: "success" | "info" | "warning" | "error";
  children: React.ReactNode;
}

/**
 * Component - Alert
 *
 * A reusable component for displaying different types of alerts with icons.
 *
 * @component
 * @example
 * // Example usage for a success alert:
 * <Alert severity="success">Operation completed successfully!</Alert>
 *
 * @param {object} props - The properties of the Alert component.
 * @param {"success" | "info" | "warning" | "error"} props.severity - The severity level of the alert.
 * @param {React.ReactNode} props.children - The content to be displayed within the alert.
 *
 */
const Alert = ({ severity, children }: AlertProps) => {
  // Set default values for the icon and background color
  let Icon = BsCheckCircle;
  let bg = "bg-[#2e7d32]";

  // Customize icon and background based on severity
  switch (severity) {
    case "info":
      Icon = BsInfoCircle;
      bg = "bg-[#0288d1]";
      break;
    case "warning":
      Icon = BsExclamationTriangle;
      bg = "bg-[#ed6c02]";
      break;
    case "error":
      Icon = BsExclamationCircle;
      bg = "bg-[#d32f2f]";
      break;
    default:
      break;
  }

  return (
    <div>
      <div
        className={clsx(
          "rounded-md px-4 py-2 text-sm font-medium text-white flex items-center gap-2",
          bg
        )}
      >
        <Icon className="size-4 flex-shrink-0" />
        <p>{children}</p>
      </div>
    </div>
  );
};

export default Alert;
