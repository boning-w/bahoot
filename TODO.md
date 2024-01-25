## Frontend

- Enhancing the user experience involves modifying the interaction for the sign-up/login button. Upon hovering over the button, the surface now brightens. The press and bounce effect is selectively activated only when the user clicks the button.

## Backend

- To enhance code maintainability, it's recommended to replace API route paths with constant variables instead of hardcoding strings. By doing so, when a path change is necessary, adjusting the variable value is sufficient, eliminating the need to modify every string related to the path.

For instance:

```js
// Original code
router.get("/api/signup", signup);

// In test, you also need to write this:
const { body } = await request(app).post("/api/auth/signup").send(newUser);
```

In the provided example, the signup route path is written twice. To maintain code efficiently, we propose the following adjustment:

```js
// Adjusted code
const API_SIGNUP = "/api/signup";

router.get(API_SIGNUP, signup);

// In test, you also need to write this:
const { body } = await request(app).post(API_SIGNUP).send(newUser);
```

This modification simplifies the process of changing the route path by requiring only an update to the value of `API_SIGNUP`.
