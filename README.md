# Marley Spoon Frontend Challenge

## I've deployed on Netlify and you can see it [here]([https://link-url-here.org](https://marley-spoon-challenge.netlify.app/))

## How to run locally

### Clone the repository

```bash
git clone https://github.com/TimAngus321/marley-spoon-challenge.git
```

```bash
cd marley-spoon-challenge/
```

### Install the packages

```bash
yarn install 
```

### Please add the .env variables to a .env file in the root of the project like so: 

```plainText

REACT_APP_SPACE_ID = [SPACE ID]
REACT_APP_ENV_ID = [master]
REACT_APP_ACCESS_TOKEN = [ACCESS TOKEN]
```

### Run locally on http://localhost:3000/

```bash
yarn start 
```

### Ensure the port is set to 3000 then open on http://localhost:3000/

## Shortcuts

- Only looked into contentful API docs briefly to find the api call I needed and tested it out quickly using Thunder Client. Perhaps the SDK would have been a quicker way to implement what I needed.
- Used a Material UI to quickly create my components rather than building myself
- Use package react-markdown to quickly render markdown
- Desided against implementing rating as I didn't set up a backend or db to do it properly.
- Responsvieness handled with material UI and some TS that switches coulmns to 1 when under window.innerWidth is under 900px wide

## What could be improved if I had time

- Take more time to come up with a better design
- Investigte how to properly use and implement Material UI 
- Add tests with Jest & React Testing Library
- Use Next and use SSR Component for the recipe list as it doesn't need to be re-rendered as it's a fixed list (I'm currently learning Next but in order to implement this quickly I went with CRA with typescript. If I was to setup a react app without Next I'd use Vite as I've been enjoying using it.
- Use proper types throughout app. I've occasionally use type any to develop quickly.
