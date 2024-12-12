import { auth } from "@/auth";
import React from "react";

const Middleware = async () => {
  const session = await auth();
  return (
    <main className="flex h-full items-center justify-center flex-col gap-2">
      <h1 className="text-3xl">Middleware Page</h1>
      <div className="text-lg">Logged in as {session?.user?.email}</div>
    </main>
  );
};

export default Middleware;
