import db from "~/db.server";

export async function loader() {
  await db.execute(`
   CREATE TABLE IF NOT EXISTS blogs (
         ...     title TEXT,
         ...     body TEXT,
         ...     user_name TEXT,
         ...     id uuid,
         ... PRIMARY KEY (id,user_name)
         ... );

`);

  await db.shutdown();
}

loader();
