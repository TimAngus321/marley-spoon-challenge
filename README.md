# Marley Spoon Frontend Challenge

## How to run locally

### Clone the repository

```bash
git clone https://github.com/TimAngus321/marley-spoon-challenge.git
```

### Install the packages

```bash
yarn install 
```

### Run locally on http://localhost:3000/

```bash
yarn start 
```

## Shortcuts

- Only looked into contentful API docs briefly to find the api call I needed and tested it out quickly using Thunder Client. Perhaps the SDK would have been a quicker way to implement what I needed.
- Used a Material UI to quickly create my components rather than building myself
- Use package react-markdown to quickly render markdown
- Desided against implementing rating as I didn't set up a backend or db to do it properly.
- Responsvieness handled with material UI and some TS that switches coulmns to 1 when under

## What could be improved if I had time

- Take more time to come up with a better design
- Investigte how to properly use and implement a component library (first time using material UI)
- Add tests
- Use Next and use SSR Component for the recipe list as it doesn't need to be re-rendered as it's a fixed list (I'm currently learning Next but in order to implement this quickly I went with CRA with typescript. Next time I'd use Vite instead though as I've been enjoying using it)
- Use proper types when I occasionally use any for speed of development
