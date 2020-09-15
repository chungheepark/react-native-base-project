# react-native-base-project

ReactNative boilerplate project

## Goal

자주 사용되는 컴퍼넌트들을 미리 작성한다.

## Tech

- react-native
- react-navigation
- typescript
- styled-components
- eslint & prettier
- absolute import
- react-native-webview

## Tree

```text
.
├── assets
│   └── images # image들이 저장되는 위치
├── babel.config.js # 상대경로 지정 때문에 수정해야 하는 부분
├── src
│   ├── @types # 앱 작성에 필요한 타입들 선언
│   │   └── navigation.d.ts # 네비게이션 타입 선언
│   ├── components # @components
│   ├── constants # @constants
│   │   ├── images.tsx # image 소스들이 저장되어 있음.
│   │   └── theme.tsx # 테마, 컬러가 저장되어 있음
│   └── screens # 페이지들이 저장됨
├── tsconfig.json # 상대경로 지정 때문에 수정해야 하는 부분
└── yarn.lock
```

## react-native

```
$ npx react-native init AwesomeTSProject --template react-native-template-typescript
```

## eslint & prettier

- react-native-template-typescript 에 같이 설치되는 @react-native-community/eslint-config 패키지 덕에 eslint, prettier가 함께 설치된다.
- 예전처럼 설정하지 않아도 된다.

## react-navigation

## styled-components

## absolute import

모듈을 상대 경로로 임포트 할 수 있다.
1. babel.config.js, tsconfig.json을 함께 수정한다.
2. IntelliJ 같은 경우 eslint 설정에서 Automatic ESLint configuration을 선택하고, Run eslint --fix on save를 선택한다.

```javascript
// babel.config.js
...
[
  'module-resolver',
  {
    root: ['.'],
    alias: {
      src: './src',
      '@screens': './src/screens',
      '@components': './src/components',
      '@constants': './src/constants',
      '@assets': './assets',
    },
  },
],
...
```

```json
/* tsconfig.json */
...
"baseUrl": "./",
"paths": {
  "src/*": ["src/*"],
  "@screens/*": ["src/screens/*"],
  "@components/*": ["src/components/*"],
  "@constants/*": ["src/constants/*"],
  "@assets/*": ["assets/*"]
},
...
```

## react-native-webview
