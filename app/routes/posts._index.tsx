import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import db from "~/db.server";

export interface Blog {
  id: string;
  title: string;
  body: string;
  user_name:string;
}

export async function loader() {
  // return new Response(JSON.stringify(posts), {
  //   status: 200,
  //   headers: {
  //     "Content-Type": " application/json",
  //   },
  // });
  const results = await db.execute("SELECT * FROM blogs LIMIT 10");
  const posts = results.rows as unknown as Blog[];

  return json({ posts });
}

export default function Posts() {
  const { posts } = useLoaderData<typeof loader>();
  return (
      <main className="w-full">
    <div className="px-40 pt-20  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((p) => (
        
        
        

        
      
            <div className="bg-white p-6 rounded-lg shadow-lg "  key={p.id} >
                <img src="https://picsum.photos/300" alt="Blog Post 6" className="rounded-t-lg mb-4"/>
                <h2 className="text-xl font-semibold mb-2">{p.title}</h2>
                <p className="text-gray-700 mb-4 line-clamp-2">{p.body}</p>
                  <Link to={`${p.id}`} className="text-blue-500 hover:underline"> Read more</Link>
            </div>
         
        
      ))}
    </div>
      </main>
  );
}


<div className="flex flex-col w-80">
<div className="bg-gray-200 rounded-sm px-2 py-1 mt-4  h-64 hover:shadow-md">
<img src=''></img>
  <h1 className="font-bold text-2xl text-center"></h1>
 
</div>
</div>

 