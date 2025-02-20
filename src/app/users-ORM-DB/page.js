export default async function UsersPage() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  //console.log(users);

  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {users.map((user) => (
        <div key={user.id} className="p-4 border rounded-lg shadow-lg">
          <h2 className="text-xl font-bold">{user.name} DB</h2>
          <p className="text-gray-700">Username DB: {user.username}</p>
          <p className="text-gray-700">Email DB: {user.email}</p>
          <p className="text-gray-700">Phone DB: {user.phone}</p>
          <p>users-ORM_DB</p>
        </div>
      ))}
    </div>
  );
}
// export default async function Post() {
//   const responsepost = await fetch("https://api.vercel.app/blog");
//   const postresult = await responsepost.json();
//   console.log(postresult);
//   return (
//     <div className="grid grid-cols-4 gap-2">
//       {postresult.map((posts) => (
//         <h1 className="text-lg p-2">Title Name:{posts.title}</h1>
//       ))}
//     </div>
//   );
// }
// data fecth with orm or database
// import { db, posts } from "@/lib/db";

// export default async function Page() {
//   let allPosts = [];
//   try {
//     allPosts = await db.select().from(posts);
//   } catch (error) {
//     console.error("Error fetching posts:", error);
//   }

//   return (
//     <ul>
//       {allPosts.map((post) => (
//         <li key={post.id}>{post.title}</li>
//       ))}
//     </ul>
//   );
// }
