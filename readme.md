### Squeazee

This project is a web application for building, managing and deploying simple landing pages or microsites called Squeeze pages.  This is the project behind the site https://squeezepage.io.

This project is structured as a `monorepo` meaning that multiple applications live in this repository.  There are currently 3 main application projects, which several helper library projects.  More application and helper library projects could be in the works.

- `packages/server` 
This is serverless based api server.  This serves both RESTful API requests and GraphQL requests using AWS Lambda.
  
- `packages/web`
This is a single page React application where a user can build and manage their squeeze pages.

- `packages/pages` 
This is a single page React application to serve squeeze pages.

- `packages/types`
Since this whole project is written in Typescript, this is a central types library to share definitions between application projects

- `packages/templates`
Both the Web and Pages application need to be aware of available page design templates for building and displaying squeeze pages.  This library houses the available templates.  This will hopefully grow.


## Local Development

To run the full application, you need to start the local server for the API, Web and Pages.

Prior to running anything you will need to:
* install dependencies ( `yarn install` )
  * `packages/server`
  * `packages/web`
  * `packages/pages`
* You will also need Docker installed.

* API
  * In `packages/server`, run:
    * For initial setup only (this does database things):
      * `yarn compose` (Sets up Docker Containers)
      * `yarn provision` (Provisions Database Schema)
    * For running the server:
      * `yarn watch`
* Web
  * In `packages/web`, run:
    * `yarn start`
* Pages
  * In `packages/pages`, run:
    * `yarn start`
  * 
