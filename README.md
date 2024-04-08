# Daily Vote

## Supabase Functions

```
DECLARE
  new_id integer;
BEGIN
  INSERT INTO vote(description, end_date, title)
  VALUES (description, end_date, title)
  RETURNING id INTO new_id;

  INSERT INTO vote_options(options, vote_id)
  VALUES (options, new_id);

  RETURN new_id;
END;
```
