import { ActionFunctionArgs, redirect } from "@remix-run/node";
import { Form } from "@remix-run/react";
import db from "~/db.server";
import { v4 as uuidv4 } from 'uuid';


const inputClassName = `w-full rounded border border-gray-500 px-2 py-1 text-lg`;

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();

  const title = formData.get("title");
  const user = formData.get("user");
  const body = formData.get("body");

  const query = 'INSERT INTO blogs (id, title, user_name , body)  VALUES (?, ?, ?, ?)';
  const id = uuidv4();

 await db.execute(query, [id, title, user, body], { prepare: true });

  console.log('... posted');

  return redirect("/posts");
}

export default function CreatePost() {
  return (
    <Form method="post">
      <h3>add your post</h3>

      <p>
        <label>
          Post Title:{" "}
          <input type="text" name="title" className={inputClassName} />
        </label>
      </p>
      <p>
        <label>
          user name:{" "}
          <input type="text" name="user" className={inputClassName} />
        </label>
      </p>
      <p>
        <label htmlFor="body">Markdown: </label>
        <br />
        <textarea
          id="body"
          rows={8}
          name="body"
          className={`${inputClassName} font-mono`}
        />
      </p>
      <p className="text-right">
        <button
          type="submit"
          className="rounded bg-blue-500 py-2 px-4 text-white hover:bg-blue-600 focus:bg-blue-400 disabled:bg-blue-300"
        >
          Create Post
        </button>
      </p>
    </Form>
  );
}
