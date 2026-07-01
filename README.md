## Database tables

```
CREATE TABLE client (
  id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "client_id_seq"),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  streetAddress text,
  city text,
  state text,
  zipcode text
);

CREATE TABLE category (
  id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "category_id_seq"),
  name text NOT NULL UNIQUE
);

CREATE TABLE product (
  id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "product_id_seq"),
  name text NOT NULL UNIQUE,
  category text NOT NULL,
  price NUMERIC NOT NULL,
  icon text NOT NULL,
  description text NOT NULL,
  qte integer NOT NULL,
  isPromo boolean DEFAULT false NOT NULL
);

CREATE TABLE command (
  id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "command_id_seq"),
  client_id integer NOT NULL,
  product_id integer NOT NULL,
  qte numeric NOT NULL
);
```
