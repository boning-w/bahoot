## Git

- git status
- git add
- git commit
- git branch
- git checkout

Q. How to create a new branch in git

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

