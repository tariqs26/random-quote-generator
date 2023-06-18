# Random Quote Generator

## Description

This is a simple web app that generates random quotes from a database.

## Technologies

| Name                                    | Description         |
| --------------------------------------- | ------------------- |
| [Next.js](https://nextjs.org/)          | Fullstack framework |
| [DrizzleORM](https://orm.drizzle.team/) | ORM                 |
| [MySQL](https://www.mysql.com/)         | Database            |
| [PlanetScale](https://planetscale.com/) | Database hosting    |
| [TailwindCSS](https://tailwindcss.com/) | CSS framework       |

## Models

```sql
# authors
CREATE TABLE authors (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  author varchar(255) NOT NULL UNIQUE
);

# categories
CREATE TABLE categories (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  category varchar(255) NOT NULL UNIQUE
);

# quotes
CREATE TABLE quotes (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  quote varchar(255) NOT NULL  UNIQUE,
  author_id int NOT NULL,
  category_id int NOT NULL,
  FOREIGN KEY (author_id) REFERENCES authors(id),
  FOREIGN KEY (category_id) REFERENCES categories(id)
);
```

## Installation and Available Commands

```bash
# install dependencies
npm i

# run the development server (localhost:3000)
npm run dev

# build for production
npm run build

# start the production server
npm run start

# introspect the database (pull DDL from existing db and generate <schema.ts>)
npm run introspect

# migrate changes to the database
npm run migrate

# push changes to the database (does not create migrations)
npm run push
```
