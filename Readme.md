# Desafio Globo

A simple live search using JSON.

## Getting Started

### Instalation

First of all, install the dependencies to run this boilerplate.

- [NodeJS](http://nodejs.org/)
- [GulpJS](http://gulpjs.com/)


# Clone this repository

```
$ git clone git://github.com/willianjusten/desafio-globo.git
$ cd desafio-globo

#install dependencies
$ npm install
```

### Folders and Files

```
├── app
│   ├── css
│   ├── img
│   └── js
├── model
├── node_modules
├── routes
├── src
│   ├── img
│   ├── js
│   └── styl
├── utils
└── views
.gitignore
gulpfile.js
package.json
Readme.md
server.js
```

### How it Works

We have an API with 2 routes:

Retrieve feature suggestions:

* GET /busca/featureContent/
* Data params: query


```
// /busca/featureContent/?q=shows
[
    {
        "title": "Pop & Art",
        "url": "http://g1.globo.com/pop-arte/index.html",
        "logo": "http://s.glbimg.com/bu/i/fc/5fb2e18d-a47f-4bb8-9a7e-b66871cf53c0.png",
        "queries": [
            "musica",
            "pop",
            "art",
            "arte",
            "cultura",
            "shows"
        ]
    }
]
```

---

Retrieve all suggestions:

* GET /busca/suggestions/
* Data params: query

```
// /busca/suggestions/?q=mus
[
    "musica",
    "musicas",
    "musica inedita de raul"
]
```

### Tasks

- `gulp js`: execute js files
- `gulp stylus`: compile stylus files
- `gulp imagemin`:compress image files
- `gulp watch`: call for watch files
- `gulp serve`: start express server
- `gulp`: default task (run all tasks and watch)

