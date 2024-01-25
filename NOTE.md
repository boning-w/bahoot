## HTML

## CSS

## JavaScript / TypeScript

## Module Bundler

Q. What is a module Bundler and why we need it?

- [Module Bundlers Explained... Webpack, Rollup, Parcel, and Snowpack](https://www.youtube.com/watch?v=5IG4UmULyoA&ab_channel=Fireship)
- [Build tools](https://javascript.info/modules-intro#build-tools)

Q. What are the popular module bundlers nowadays?

## Transpiler

Q. What is a transpiler and why we need it?

- [Polyfills and transpilers](https://javascript.info/polyfills)

Q. What are the popular transpilers nowadays?

## Next.js

### Best Practices

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

- `git status`: It's a git command to display the state of the working directory. It lets you see which changes have been staged, which haven't, and which files aren't being tracked by Git.

- `git add`: It's a git command to add changes in the working directory to the staging area. It tells Git that you want to include updates to a particular file in the next commit. However, git add doesn't really affect the repository in any significant way - changes are not actually recorded until you run git commit.

- `git commit`: It's a git command to commit all the changes to the repository.

- `git branch`: If you want to know what branches you have, you can use `git branch`.

- `git checkout`: If you want to switch to other branches, you can use `git checkout`.

- `git push`: If you want to upload your local repository content to a remote repository, you can use `git push`.

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

- `Ctrl + U`: Clear the entire line of input.
- `Ctrl + L`: Clear the entire terminal screen.
