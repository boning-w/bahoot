## JavaScript

## CSS

## Next.js

## Best Practices

### JavaScript

### CSS

### Next.js

- [NextJS 13 folder structure best practice](https://stackoverflow.com/a/76506760/18697833)
- [Project organization strategies](https://nextjs.org/docs/app/building-your-application/routing/colocation#project-organization-strategies)
- [`src` Directory](https://nextjs.org/docs/app/building-your-application/routing/colocation#src-directory)
  - If you're using Tailwind CSS, you'll need to add the `/src` prefix to the `tailwind.config.js` file in the [content section](https://tailwindcss.com/docs/content-configuration).

- [Route Groups](https://nextjs.org/docs/app/building-your-application/routing/colocation#route-groups)

- [Module Path Aliases](https://nextjs.org/docs/app/building-your-application/routing/colocation#module-path-aliases)

## Network

### HTTP Status

- 500?

### CORS

Q. Why don't we encounter CORS issues when making requests with Next.js, while we face them when using React?



## Git

- git status
- git add
- git commit
- git branch
- git checkout
- git push

Q. How to create a new branch in git locally and push it to remote repository

To create a new branch in Git, you can use the git branch command followed by the name of the new branch. Then, you can switch to the newly created branch using git checkout.

```bash
git branch <branch_name>
git checkout <branch_name>
```

If you want to create and immediately switch to the new branch, you can use the `-b` option with `git checkout`:

```bash
git checkout -b <branch_name>
```

You can verify that you are now on the newly created branch by using the `git branch` command without any arguments. It will display a list of branches in your repository, highlighting the current branch with an asterisk (`*`).

```bash
git branch
```

**Push the newly created branch to the remote repository**. Use the following command to push the branch and set the upstream (tracking branch) at the same time:

```bash
git push --set-upstream origin new_branch_name
```

**Verify the creation of the new branch on the remote repository**. You can check your remote repository (like GitHub, GitLab, or Bitbucket) to confirm that the new branch has been created and pushed successfully.

## Linux Command

## Terminal Shortcut

Q. How to clear the input in terminal

**Linux/macOS**: Press `Ctrl + U`. This shortcut clears the entire line of input.

To clear the entire terminal screen (`Ctrl + L`).
