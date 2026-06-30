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
```
