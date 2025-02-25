// Importing useRouter
import { useRouter } from "next/router";

export default function Gfg() {
  // Initializing useRouter
  const router = useRouter();

  // Accessing the dynamic slug from the URL
  const { slug } = router.query; // slug will be the dynamic segments of the path

  return (
    <div>
      <h1>Path: {router.asPath}</h1>
      <h2>Slug: {JSON.stringify(slug)}</h2>
      {/* Displaying dynamic path segments */}
    </div>
  );
}
