<h1 align="center">Nova Framework</h1>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/michael616kriel/nova-framework.svg)](https://github.com/michael616kriel/nova-framework/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/michael616kriel/nova-framework.svg)](https://github.com/michael616kriel/nova-framework/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)
- [Built Using](#built_using)
- [Contributing](../CONTRIBUTING.md)
- [Authors](#authors)
  <!-- - [TODO](../TODO.md) -->
  <!-- - [Deployment](#deployment) -->
  <!-- - [Acknowledgments](#acknowledgement) -->

## 🧐 About <a name = "about"></a>

Nova is a framework that is intended to help setup and maintain servers and integrations with ease. It allows you to setup and configure Graphql, Kafka, Redis, GRPC, Knex, and SocketIO and easily have access to them accross your application without installing any additional dependencies. Custom integrations of any other packages are super simple to do.

## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get the project up and running on your local machine for development and testing purposes. 
<!-- See [deployment](#deployment) for notes on how to deploy the project on a live system. -->

### Prerequisites

- [NodeJs](https://nodejs.org/en/)


### Installing

```
npm i nova-framework
```


End with an example of getting some data out of the system or using it for a little demo.

## 🎈 Usage <a name="usage"></a>

Creating a basic HTTP server:

```
import { Nova, LocalStorage } from "nova-framework";

const novaServer = new Nova({
  rootDir: __dirname, // root source directory
  storage: new LocalStorage(),
  services: [
      // add services here...
  ],
});

novaServer.listen().then(() => {
  console.log("Server Started!");
});

```

Adding and configuring services :

```
import { Nova, Graphql, WebSocket } from "nova-framework";

const novaServer = new Nova({
  services: [
    new WebSocket(),
    new Graphql({
      typeDefs: `
        type Query {
          hello: String
        }
      `,
      playground: true,
      resolvers: {
        Query: {
          hello: () => {
            return "hello";
          },
        },
      },
    }),
  ],
});

```

Creating HTTP controllers:

```
import { Controller } from "nova-framework";

class Users extends Controller {
  constructor() {
    super();
    this.endpoint = "/users";
    this.router.get("/", this.home);
  }
  home(req: any, res: any) {
    res.send("Hello");
  }
}
```

Creating Custom Service:

```
import { Service } from "nova-framework";

class CustomService extends Service {
  constructor(config) {
    super();
    // configure service...
  }
  beforeStart(app: Express, server: Server) {
    // Before server starts...
  }
  afterStart(app: Express, server: Server) {
    // After server starts...
  }
}
```

<!--
## 🚀 Deployment <a name = "deployment"></a>

Add additional notes about how to deploy this on a live system. -->

## ⛏️ Built Using <a name = "built_using"></a>

- [Express](https://expressjs.com/) - Server Framework
- [NodeJs](https://nodejs.org/en/) - Server Environment
- [TypeScript](https://www.typescriptlang.org/) - Programming Language

## ✍️ Authors <a name = "authors"></a>

- [@michael616kriel](https://github.com/michael616kriel) - Idea & Initial work

See also the list of [contributors](https://github.com/michael616kriel/nova-framework/contributors) who participated in this project.

<!--
## 🎉 Acknowledgements <a name = "acknowledgement"></a>

- Hat tip to anyone whose code was used
- Inspiration
- References -->
