# yomyom-backend instructions

Requirements:

Node.js (v.16) LTS version
MySQL Community (GPL) version
git 2.36.1 version

Try on console this commands to check if you have installed this programs:

    node --version

> v16.13.2

    npm --version

> 8.1.2

Open a MySQL 8.0 CLI , login and type:

    SELECT VERSION();

> +-----------+
> | VERSION() |
> +-----------+
> | 8.0.29 |
> +-----------+
> 1 row in set (0.00 sec)

On console type:

    git --version

> git version 2.33.0.windows.2

If one or more of this commands don't displays a similar response like last ones,
try to install or reinstall following this instructions:

Node.js (v.16) LTS version
WINDOWS -> [https://phoenixnap.com/kb/install-node-js-npm-on-windows]
MacOS -> [https://www.webucator.com/article/how-to-install-nodejs-on-a-mac/]
INSTALLER >>> [https://nodejs.org/es/download/]

MySQL Community (GPL) version
WINDOWS -> [https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/windows-installation.html]
MacOS -> [https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/macos-installation.html]
INSTALLER >>> [https://dev.mysql.com/downloads/]

Git 2.36.1 version
WINDOWS, MacOS, Linux -> [https://git-scm.com/book/en/v2/Getting-Started-Installing-Git]
INSTALLER >>> [http://git-scm.com/downloads]

## Installing yomyom-backend

First you have to clone the repository. Make a directory to clone the repository, you can do it typing on console:

    mkdir yomyom-test
    cd .. yomyom-test

Clone the repository:

    git clone https://github.com/JPCervantes/yomyom-backend.git

You recibe this response:

> Cloning into 'yomyom-backend'...
> remote: Enumerating objects: 3, done.
> remote: Counting objects: 100% (3/3), done.
> remote: Compressing objects: 100% (2/2), done.
> remote: Total 3 (delta 0), reused 0 (delta 0), pack-reused 0
> Receiving objects: 100% (3/3), 4.45 KiB | 325.00 KiB/s, done.

Enter to the repository route:

    cd yomyom-backend

Install all the dependencies with:

    npm install

Now use the follow script to start the server:

    npm start

You will recibe the following response:

> yomyom_test@1.0.0 start
> node src/app.tsx

> Server is running at http://localhost:8080
> Database connected successfully!

The first time you start the server you must access to the following route to create the database
and load the data:

[http://localhost:8080]

You will recibe the following display on browser screen:

> Created and Using yomyom_test Database with data loaded successfully!!!

You will recibe the following prompt in console:

> Database Created Successfully !
> Using Database
> Data load into Database

Now you can access to the following address:

[http://localhost:8080/api/v1/categories]

If you recibe the following json response the installation was successfully:

> [{"id":1,"name":"Bebidas","active":1,"timestart":"08:00:00","timeend":"22:00:00"},
> > {"id":2,"name":"Desayunos","active":1,"timestart":"08:00:00","timeend":"13:00:00"},
> > {"id":3,"name":"Comidas","active":1,"timestart":"13:00:00","timeend":"18:00:00"},
> > {"id":4,"name":"Postres","active":1,"timestart":"08:00:00","timeend":"22:00:00"},
> > {"id":5,"name":"Licores","active":1,"timestart":"13:00:00","timeend":"22:00:00"}]

## Available Scripts

To dev usage you can run:

    npm run dev

To start the server you can run:

    npm start

## Routes

Open [http://localhost:8080/api/v1/categories]

to fetch all categories in the database.

Open [http://localhost:8080/api/v1/categories/:id]

to fetch category by id.

Open [http://localhost:8080/api/v1/plates]

to fetch all the plates in the database.

Open [http://localhost:8080/api/v1/plates/:id]

to fetch plate by id.
