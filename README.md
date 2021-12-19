# PROJECT_NAME

## Get Started

1. To create a project based on this template click on the `Use this template` button
2. Find and Replace `PROJECT_NAME` placeholder with the real project name
3. Delete libraries which do not satisfy project needs
4. Delete this section from `README`
5. To cover your tracks and incorporate the changes to the project's `Initial commit`, run these commands:

```sh
git commit -a --amend
git push -f origin master
```

---

## Documentation

Project is based on `Expo`, a framework and a platform for universal React applications. Check out the [documentation](https://docs.expo.dev/) for more information.

## Prerequisites

- `node`
- `npm`

## Usage

**Firstly, install all necessary dependencies:**

```sh
npm install
```

**To start a Metro Bundler:**

```sh
npm start
```

## Folder structure

```
template-expo/
├── .expo
├── expo-shared
├── assets (images etc.)
├── config (theme, constants etc.)
└── src
│   ├── components (inspired by atomic design principles)
│   │   ├── elements (small building blocks)
│   │   ├── layouts (wrappers for templates)
│   │   ├── modules (more building blocks together)
│   │   └── templates (screen specific content)
│   ├── graphql (each module and its queries and mutations)
│   ├── i18n (translations)
│   ├── screens
│   ├── services (graphql client and other services)
│   ├── stores (state management)
│   ├── types (more complex interfaces)
│   └── utils (tab navigator etc.)
└── web (simulate mobile in browser window)
```

## Expo Go

If you want to preview your app directly in your mobile device, then install Expo Go app on App Store/Google Play and scan the QR code that is on http://localhost:19002/.

## What's Inside

- React Native Framework

  - [Expo](https://expo.dev/)

- Type-checking

  - [TypeScript](https://www.typescriptlang.org/docs/home.html)

- Code quality tools

  - [Prettier](https://prettier.io/)
  - [ESLint](https://eslint.org/)

- Other
  - [Sentry](https://sentry.io/welcome/)
