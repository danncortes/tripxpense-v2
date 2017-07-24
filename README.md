# TripxpenseV2

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0-rc.1.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

`ng s -e dev` for 'dev' environment api endpoint `http://proyectos.local:8888/tripxpense-api/public`
`ng s -e vp` for 'vp' environment api endpoint `http://localhost:8080/api`

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Setting Deployment

Create a file `dandelion.yml` with the next content.

```
adapter: sftp
host: hostname.com
username: username
password: your_password
path: public_html/tripxpense-v2
local_path: dist

exclude:
    - .gitignore
    - dandelion.yml
````

## Deploy to production

Run `ng build --prod`.
Run `dandelion deploy`.

## .htaccess for Production

Create a file .htaccess in the project directory with the next content:

```
RewriteEngine on
RewriteCond %{REQUEST_FILENAME} -s [OR]
RewriteCond %{REQUEST_FILENAME} -l [OR]
RewriteCond %{REQUEST_FILENAME} -d
RewriteRule ^.*$ - [NC,L]

RewriteRule ^(.*) /index.html [NC,L]
```