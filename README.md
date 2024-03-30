# Daily Vote

## Supabase Database Configuration

Create Vote: Could not find the function public.create_vote in the schema cache

Solution: Log into supabase and manually add the function

```
DECLARE
  new_id integer;

BEGIN
  INSERT INTO vote(description, end_date)
  VALUES (description, end_date)
  RETURNING id INTO new_id;

  INSERT INTO vote_options(options, vote_id)
  VALUES (options, new_id);

  RETURN new_id;
END;
```
