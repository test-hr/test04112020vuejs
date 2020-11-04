# Sinpex frontend

<img src="./public/logo.png" alt="logo" title="Sinpex Logo" width="140" style="margin-top:35px; margin-bottom: 10px;"/>

This repository contains the frontend code for the Sinpex Frontend Test

Technologies:
 - Vue js 2.0

## Project setup

Install dependencies:

```
npm install
```

### Development

To start a local development server with hot-reload:

```
npm run serve
```

### Production

To build the production files: 

```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## How To create new entity module (crud module)
- Copy/Paste one module
- Define Entity for module (@shared/entities/...)
- Define Api for entity, if there is one (@services/api/newmodule_api)
- Define Response and Request types for entity api
- Derive Api class from CrudApiImpl Class and implement NewModuleApi interface
- Define createNewModuleModule which returns a decorated Module which dynamically registers into the global vuex store.
- Change the Module name in NewModuleModule

## Documentation
The documentation is powered by vue-styleguidist. To work with the documentation start the documentation server with ``vue-styleguidist server``
<br/> 
All groups and sections are configured in styleguide.config.js 

The resources can be found in './docs'

