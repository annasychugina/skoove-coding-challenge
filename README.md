# Test Assignment

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

### How to test

```
yarn test
```

### Use

[Feature-sliced methodology for project structure](https://feature-sliced.design/en/)

[React-native-safe-area-context for Header](https://github.com/th3rdwave/react-native-safe-area-context)

[React Native Styled Components](https://styled-components.com/docs/basics)

[React Native Testing Library](https://testing-library.com/docs/react-native-testing-library/intro/)
