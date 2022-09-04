# Skoove Coding Challenge

[Test assignment](https://github.com/Learnfield-GmbH/CodingChallenge/tree/master/shared/simple%20audio%20player)

### How to start

``
yarn 
``
### IOS
```
cd ios
bundle install (if no cocoapods)
pod install
yarn ios
```
### Android
```
yarn android
```

if some errors with paths in Android, should:

```
yarn start --reset-cache

cd android
./gradlew clean
yarn android
```

### Run Tests

```
yarn test
```

### Use

I've chosen to use [feature-sliced](https://feature-sliced.design/) design approach because it's
1) well documented architectural approach with rules and conventions on organizing code.
2) I have successfully used the modified approach in several projects. It also helps to separate into modules (in future it can be lerna and packages shared with web)

`app` -  for initializing application logic

`entitites` - business entities, for building the business logic of the application; reused between different features

`features` - one feature is a part of the business logic

`screens` - contain navigation setup, render different features and layout elements

`shared` - UIKIT (shared/ui), functions and methods working with API, app configs, common hooks, common utils, lib services

I've chosen to use [redux-toolkit](https://redux-toolkit.js.org/) state management because
1) simple logic with fetching data
2) Less code, has convenient wrappers
3) Good for mocking and testing
4) You might consider using [RTK-hooks](https://redux-toolkit.js.org/rtk-query/overview) and autogeneration of hooks with project expansion

I've chosen to use [react-native-track-player](https://react-native-track-player.js.org/) for auto player
1) Customizable and scalable
2) Media Controls support
3) works for both android & ios

I've chosen [React Native Styled Components](https://styled-components.com/docs/basics) for styles
1) It's really good for building themes and dark mode (I used styled-components in all my previous projects)
2) cleaner JSX code
3) Extendable components, very good for building design-system

I've added [react-native-fast-image](https://github.com/DylanVann/react-native-fast-image) for caching cover image and optimization

I've added [react-native-svg](https://github.com/react-native-svg/react-native-svg) for 2 icons play and pause button

I've added [@react-native-community/slider](https://www.npmjs.com/package/@react-native-community/slider) for slider

I've added [axios](https://www.npmjs.com/package/axios) for queries (also universal and expandable thing)

Didn't have time to write the tests but primarily covered business logic using jest (reducers, utils with formatinng date), then hooks and components using

[React Native Testing Library](https://testing-library.com/docs/react-native-testing-library/intro/)

[React Native Testing Hooks Library](https://github.com/testing-library/react-hooks-testing-library)

Now when entering a new track screen the jump stops. The description does not say about it, so I thought it is the simplest and best option.

Another option is to stay when the user clicked on another track play button
