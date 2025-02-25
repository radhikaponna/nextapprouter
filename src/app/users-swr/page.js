"use client"; // Mark this as a client component

import React from "react";
import useSWR from "swr"; // swr library

export default function User() {
  //another form for fetching data
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/users",
    fetcher
  );
  //fetcher ..aargs is url gives response as json and assigns to data
  // no need of use effect and use state
  //fetch is inbuilt http api call method

  if (error) return <p>Error loading data</p>;
  if (!data) return <p>Loading...</p>;

  return ( 
    <div>
      {data.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}
