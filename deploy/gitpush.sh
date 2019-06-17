#!/bin/sh

setup_git() {
  git config --global user.email "travis@travis-ci.org"
  git config --global user.name "Travis CI"
}


create_git_repo() {
  rm -rf .git
  cd dist/blogApp
  git init
  git add . 
  git commit --message "Travis build: $TRAVIS_BUILD_NUMBER"
}


upload_files() {
  git remote add origin-pages https://${GH_TOKEN}@github.com/dharmanshaggarwal/blogbuild.git > /dev/null 2>&1
  git push --quiet --set-upstream origin-pages master --force
}

setup_git
create_git_repo
commit_website_files
upload_files