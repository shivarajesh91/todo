# Todo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

<hr>

## Technologies

| Name | Version |
|---|---|
|Angular |18.1.0|
|AngularFire |18.0.1|
|Bootstrap |5.3.8|
|Font Awesome |7.1.0|
|ngx-toastr |19.1.0|

<hr>

## Commands

Todo Project:

```
> ng new todo
```

AngularFire:

```
> ng add @angular/fire@18.0.1
```

Bootstrap:

```
> npm i bootstrap
```

Font Awesome:

```
> npm i --save @fortawesome/fontawesome-free
```

ngx-toastr:

```
> npm i ngx-toastr
```
---

Components:

```
> ng g c layouts/navbar
> ng g c layouts/footer
> ng g c category
> ng g c todo
```

Service:

```
> ng g s service/category
> ng g s service/todo
```
<hr>

## Miscellaneous

Copyright Symbol:

```
alt + 0169 → ©
```
---

Bootstrap changes:

Bootstrap 5:

```html
<div class="badge bg-primary">Category</div>
<div class="float-start">Category</div>
<div class="float-end">Category</div>
```

Bootstrap 4 (and older):

```html
<div class="badge badge-primary">Category</div>
<div class="float-left">Category</div>
<div class="float-right">Category</div>
```
<hr>

## Deploy or Hosting to Firebase

Configure Firebase Hosting (firebase.json):

```json
{
  "hosting": {
    "public": "dist/<your-app-name>/browser",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ]
  }
}
```

Install Firebase cli:

```
> npm install -g firebase-tools
```

Sign in to Google:

```
> firebase login
```

Initiate your Project:

```
> firebase init
```

Edit firebase.json:

```json
{
  "hosting": {
    "public": "dist/<your-app-name>/browser",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

Deploy or Hosting:

```
> firebase deploy
```
(or)
```
> firebase deploy --only hosting
```

Disable Hosting:

```
> firebase hosting:disable
```
<hr>

## Domains

* [Todo app Domain 1](https://todo-670da.web.app/) : https://todo-670da.web.app/
* [Todo app Domain 2](https://todo-670da.firebaseapp.com/) : https://todo-670da.firebaseapp.com/
<hr>

## Screenshots

Category Page and Footer:

![category page](https://github.com/shivarajesh91/todo/blob/Development/images/category-page.png)

---
![category page footer](https://github.com/shivarajesh91/todo/blob/Development/images/category-page2.png)

Todo Page:

![todo page](https://github.com/shivarajesh91/todo/blob/Development/images/todo-page.png)
<hr>
## Reference

* [YouTube Video](https://www.youtube.com/watch?v=EuJsvyFz2kA) : https://www.youtube.com/watch?v=EuJsvyFz2kA

* [Box Shadow Generator](https://cssgenerator.org/box-shadow-css-generator.html) : https://cssgenerator.org/box-shadow-css-generator.html

* [Font Awesome](https://www.npmjs.com/package/@fortawesome/fontawesome-free) : https://www.npmjs.com/package/@fortawesome/fontawesome-free

* [Firebase Console](https://firebase.google.com/) : https://firebase.google.com/

* [Color Palettes](https://colorhunt.co/) : https://colorhunt.co/

* [ngx-toastr](https://www.npmjs.com/package/ngx-toastr) : https://www.npmjs.com/package/ngx-toastr
<hr/>
