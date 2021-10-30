# hygen-react-ts

Hygen prompted scripts for building out React (and Typescript) feature folders, components, contexts, and hooks.

## Installation

`npx hygen-add react-ts`

## Available Generators

### Feature

`hygen feature help`

```
Usage:
  hygen feature new

Overview:
  Generates a feature folder with subfolders for components, contexts, and hooks.

  Prompts for <Name>.

  Creates the following file/directory structure:

  - src
    - <Name>
      -components
        - index.ts
      - contexts
        - index.ts
      - hooks
        - index.ts
```

### Component

`hygen component help`

```
Usage:
  hygen component new

Overview:
  Generates a functional component, Jest test, and Storybook story inside of a named folder.

  Prompts for <Name> and <Feature>.

  Creates the following file/directory structure:

  - src
    - <Feature>
      - components
        - index.ts (adds ./<Name> to exports)
        - <Name>
          - index.ts (exports everything from <Name>.component.tsx)
          - <Name>.component.tsx
          - <Name>.spec.tsx
          - <Name>.stories.tsx
```

### Context

`hygen context help`

```
Usage:
  hygen context new

Overview:
  Generates a context definition, context tests, context test provider (for use in other tests), context provider, and context provider tests.

  Prompts for <Name> and <Feature>.

  Creates the following file/directory structure:

  - src
    - <Feature>
      - components
        - index.ts (adds ./<Name>Provider to exports)
        - <Name>Provider
          - index.ts (exports everything from <Name>Provider.component.tsx)
          - <Name>Provider.component.tsx
          - <Name>Provider.spec.tsx
      - contexts
        - index.ts (adds ./<Name> to exports)
        - <Name>
          - index.ts (exports everything from <Name>.context.tsx)
          - <Name>.context.tsx
          - <Name>.spec.tsx
          - <Name>TestProvider.tsx
```

### Hook

`hygen hook help`

```
Usage:
  hygen hook new

Overview:
  Generates a hook and Jest test inside of a named folder.

  Prompts for <Name> and <Feature>.

  Creates the following file/directory structure:

  - src
    - <Feature>
      - hooks
        - index.ts (adds ./<Name> to exports)
        - <Name>
          - index.ts (exports everything from <Name>.hook.ts)
          - <Name>.hook.ts
          - <Name>.spec.tsx
```

## Contributors

[Adam Doyle](https://github.com/adamldoyle)

## License

MIT
