"use client";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";

// QueryProvider component
export default function QueryProvider({ children }) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

// Example component to fetch and display data
const fetchData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

function DataComponent() {
  const { data, error, isLoading } = useQuery(["data"], fetchData);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <p> users-react-query</p>
    </div>
  );
}

// // Usage in a Next.js page
// function HomePage() {
//   return (
//     <QueryProvider>
//       <DataComponent />
//     </QueryProvider>
//   );
// }
// QueryProvider: A component that sets up the React Query client.
// fetchData: An async function to fetch data from an API.
// DataComponent: A component that uses useQuery to fetch and display data.
// HomePage: A Next.js page that uses the QueryProvider and DataComponent.
// use client: This directive ensures the component is treated as a client component.
// QueryClientProvider: This component from React Query provides the query client to your application.
// useState: We use useState to create a new instance of QueryClient.
