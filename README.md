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

## Installation

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

View the project at [http://localhost:3000](http://localhost:3000)

## Available Commands

```bash
# build for production
npm run build
# or
yarn build
# or
pnpm build

# start the server
npm run start
# or
yarn start
# or
pnpm start
```
