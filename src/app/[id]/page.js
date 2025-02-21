export default async function Page({ params }) {
  const id = (await params).id;
  return <div>My Post: {id}</div>;
}
//based on id/role data rendeing may ocuur
//dynamic routing would be http://localhost:3000/1
