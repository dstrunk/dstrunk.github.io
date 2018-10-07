---
title: A branch by any other name
tags: [git]
category: Git
description: How to push to a remote branch with a different name than your local branch
---

Normally when you're pushing to a remote repository, you want it to reflect the
name you specified locally. In some fringe cases, though, you'll need a
different name to explicitly state that this branch is a "scratch" branch that
shouldn't be used.

To push to a remote branch that needs to be a different name than your local
branch, separate your local and remote names with a colon:

```sh
git push origin local:remote
```
