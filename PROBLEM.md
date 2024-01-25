## Frontend

### HTML

Q. Input elements should have autocomplete attributes

[Helping Users AutoFill Their Web Forms](https://www.youtube.com/watch?v=DYib51Cm05A&ab_channel=SteveGriffith-Prof3ssorSt3v3)

### CSS

Q. I want to change the input border color when focusing, but it doesn't change when I focus or click the input element. It's always blue.

Solution: https://stackoverflow.com/a/76274632/18697833

### React

Q. Warning: Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?

Read these article:

- [Integrating an existing form](https://react-hook-form.com/get-started#Integratinganexistingform)
- [Custom Input Component with React Hook Form](https://vincent-huang.medium.com/custom-input-component-with-react-hook-form-d00b898feb8c)

Bug code:

```TypeScript
<InputAuth
  type="email"
  id="email"
  label="Email"
  placeholder="you@example.com"
  required
  {...register("email")}
/>
```

```TypeScript
const InputAuth = ({
  type,
  id,
  label,
  placeholder,
  required,
  ...props
}: InputAuthProps) => {
  return (
    <div>
      <input
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        required={required}
        {...props}
      />
    </div>
  );
};
```

Solution: 

One way is to use the `React.forwardRef()` to pass the `ref` to the custom component.

```TypeScript
const InputAuth = React.forwardRef<HTMLInputElement, InputAuthProps>(
  (
    { type, id, label, placeholder, required, ...props }: InputAuthProps,
    ref
  ) => {
    return (
      <div>
        <input
          type={type}
          id={id}
          name={id}
          placeholder={placeholder}
          required={required}
          {...props}
          ref={ref}
        />
      </div>
    );
  }
);
```


### Cypress

Q. Unable to run Cypress open command in Next.js project with Typescript

[Unable to run Cypress open command in Next.js project with Typescript](https://stackoverflow.com/questions/76875739/unable-to-run-cypress-open-command-in-next-js-project-with-typescript)

The same as: [Unable to compile TypeScript with "moduleResolution": "bundler" option in v5](https://github.com/cypress-io/cypress/issues/27731)

#### Workaround

See: https://github.com/cypress-io/cypress/issues/27448#issuecomment-1663611056

## Backend

### Nodejs

Q. How do I remove a value in process.env?

Solution:

Link: https://stackoverflow.com/questions/42170365/how-do-i-remove-a-value-in-process-env

### Express

Q. TypeError: Cannot destructure property 'email' of 'req.body' as it is undefined.

The error you're encountering (TypeError: Cannot destructure property 'email' of 'req.body' as it is undefined) typically indicates that req.body is undefined when trying to destructure its properties.

This issue commonly occurs when the server is not configured to parse JSON data from the request body. To resolve this, you need to ensure that your Express server is set up to use a middleware like express.json().

Solution:

```TypeScript
// Middleware to parse JSON in the request body, you need to put this at the top of all the end points
app.use(express.json());
```

### JWT

Q. I can decode the JWT token and view the payload information, including the email, on the website debugger:https://jwt.io/. Is this secure? If someone knows the client's payload, could they generate a JWT token and send it to a server, acquiring equivalent authorizations as the client?

See: https://stackoverflow.com/a/62095037/18697833

If you aim to enhance the security of your JWT and prevent sensitive information from being exposed to the public, you can adopt more secure practices during token generation:

1. Encrypt Payload and Generate JWT:

    - Encrypt the payload data using encryption algorithms.
    - Generate the JWT token by incorporating the encrypted payload along with your secret key.

2. Encrypt the Entire JWT:

    - Apply encryption to the complete JWT token, including both header and payload.
    - This ensures end-to-end confidentiality of the entire token.

These approaches add an extra layer of security, safeguarding sensitive details within the token. Choose the method that aligns with your security requirements and implementation preferences.

### Vitest

Q. Integration test: If you are on a Mac, you will also need to run the following command to install and alias a command that is used within the `wait-for-it.sh` script:

```bash
brew install coreutils && alias timeout=gtimeout
```

