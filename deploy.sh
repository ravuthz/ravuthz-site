#!/bin/sh

# git submodule update --recursive --remote
git pull --recurse-submodules

hugo --minify

cd ./public

# git config --global user.name = "Ravuthz"
# git config --global user.email = "ravuthz@gmail.com"
# git config --global init.defaultBranch = "gh-pages"

git remote remove origin

git init
git remote add origin  https://github.com/ravuthz/ravuthz.github.io.git
git checkout -b gh-pages
git add . && git commit -m "Deploy Githun Page at `date +'%Y-%m-%d %H:%M:%S'`"
git push -f origin gh-pages

# https://github.com/ravuthz/ravuthz.github.io/tree/gh-pages