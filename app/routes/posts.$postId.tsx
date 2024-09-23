import { json, type LoaderFunctionArgs } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import db from "~/db.server";
import { Blog } from "./posts._index";



export async function loader({params}:LoaderFunctionArgs){
  const id = params.postId;

  const query = 'SELECT * FROM blogs WHERE id = ?';
  const blog = await db.execute(query, [id], { prepare: true })
  const post =  blog.rows as unknown as Blog[];
 
 
  return json({post:post[0]})


}

export default function OnePost() {

  const {post} = useLoaderData <typeof loader> ();
  return (
    <div className="px-40 pt-20">
      <p>@{post.user_name}</p>
      <h1 className="font-bold text-2xl text-center">{post.title}</h1>

      <p className=" text-black">
        {post.body} <br/>
         
      </p>
    </div>
  );
}
