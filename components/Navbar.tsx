import { auth } from "@/auth";
import Link from "next/link";
import React from "react";
import Logout from "./Logout";
import Image from "next/image";

const Navbar = async () => {
  const session = await auth();
  return (
    <nav className="border-b bg-background w-full flex items-center">
      <div className="flex w-full items-center justify-between my-4">
        <Link className="font-bold" href={"/"}>
          Home
        </Link>
        <div className="flex items-center gap-x-5">
          <Link className="" href={"/middleware"}>
            Middleware
          </Link>
          <Link className="" href={"/server"}>
            Server
          </Link>
        </div>
        <div className="flex items-center gap-x-5">
          {!session?.user ? (
            <Link className="" href={"/sign-in"}>
              <div className="bg-blue-600 text-white text-sm px-4 py-2 rounded-md">
                Login
              </div>
            </Link>
          ) : (
            <>
            <div className="flex items-center gap-x-2 text-sm">
                {session?.user?.name}
                {session?.user?.image && (<Image src={session?.user?.image ||''} width={30} height={30} alt="avatar" />)}
            </div>
              <Logout />
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
