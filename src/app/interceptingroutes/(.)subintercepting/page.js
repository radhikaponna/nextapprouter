"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function F2() {
  const router = useRouter();

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisitedSubintercepting");
    console.log("hasVisited:", hasVisited);

    if (hasVisited) {
      //console.log("Redirecting to /interceptingroutes in 1 minutes");
      setTimeout(() => {
        router.push("/interceptingroutes");
      }, 60000); // 120000 milliseconds = 1 minutes
    } else {
      //console.log("Setting hasVisitedSubintercepting to true");
      sessionStorage.setItem("hasVisitedSubintercepting", "true");
    }
  }, [router]);

  return <h1>(.)Intercepting F2 page in sub folder</h1>;
}
