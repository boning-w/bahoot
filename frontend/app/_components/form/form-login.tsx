import ButtonAuth from "../button/button-auth";
import InputAuth from "../input/input-auth";

/**
 * Component - Form - Sign Up
 *
 * This component represents a login form. It includes input fields for email
 * and password, along with a "Login" button.
 *
 */
export default function FormLogin() {
  return (
    <form className="w-full sm:max-w-sm flex flex-col px-6 py-12 gap-6">
      <div className="flex flex-col gap-2">
        <InputAuth
          type="email"
          id="email"
          label="Email"
          placeholder="you@example.com"
          required
        />
        <InputAuth type="password" id="password" label="Password" required />
      </div>
      <ButtonAuth label="Login" />
    </form>
  );
}
