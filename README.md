Wowipa React Project
====================

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

[Project Jira Page](https://rvoelker.atlassian.net/wiki/pages/viewpageattachments.action?pageId=49971201&metadataLink=true)

## How to start (development mode)
`
yarn start
`

Below is how I struggled to completed this project

Update on 3:42PM 13 Aug, 2017
- I can now use yarn for scripting and building after I did `yarn remove semantic-ui`
- Then I move to use senmactic-ui-css for just css part of the this project which take advantage of semantic-ui
- I followed this article [Using semantic with create-react-app](https://github.com/Semantic-Org/Semantic-UI-React/issues/1330).


Update on 2:00PM 13 Aug, 2017
- I have to switch from yarn to npm due to a bug with yarn while installing semantic-ui [Bug: unable to install semantic-ui ](https://github.com/yarnpkg/yarn/issues/976)
- [How to add semantic-ui with webpack](https://github.com/Semantic-Org/Semantic-UI/issues/3533)
- I tried this [3th lib](https://react.semantic-ui.com/views/card#card-example-card-props), but I feel uncomfortable, so I don't use it anymore
- This also help me to bootstrap semantic-ui with create-react-app([how to import js into a 'create-react-app' project](https://github.com/Semantic-Org/Semantic-UI-React/issues/1330))