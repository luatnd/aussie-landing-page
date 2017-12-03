# Landing page for Aussie

## CLI Commands

``` bash
# install dependencies
yarn install

# serve with hot reload at localhost:8080
yarn dev

# build for production with minification
yarn build

# test the production build locally
yarn serve2
```

## Deploy

1. JUST know that your `build` directory is a static web. That contain HTML, CSS, JS only. No server side required.
2. Use `nginx` to point your domain to this static website. Ensure your serve using