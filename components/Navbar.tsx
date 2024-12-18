import { auth } from "@/auth";
import Link from "next/link";
import React from "react";
import Logout from "./Logout";
import Image from "next/image";
import ThemeButton from "./ThemeButton";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const Navbar = async () => {
  const session = await auth();

  return (
    <nav className="border-b bg-background w-full flex items-center">
      <div className="flex w-full items-center justify-between my-4">
        <Link className="font-bold" href={"/"}>
          Spender
        </Link>
        <div className="flex items-center gap-x-5">
          {/* <Link className="" href={"/middleware"}>
            Middleware
          </Link>
          <Link className="" href={"/server"}>
            Server
          </Link> */}
        </div>
        <div className="flex items-center gap-x-5">
          {!session?.user ? (
            <Link className="" href={"/sign-in"}>
              <Button>Login</Button>
            </Link>
          ) : (
            <>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <div className="flex items-center gap-2">
                    {session.user.name || session.user.email.split("@")[0]}
                    {session?.user?.image && (
                      <Image
                        className="rounded-full"
                        src={session?.user?.image || ""}
                        width={30}
                        height={30}
                        alt="avatar"
                      />
                    )}
                    
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {session?.user?.role ==='ADMIN' && (<DropdownMenuItem><Link href="/adminPanel">Admin Panel</Link></DropdownMenuItem>)}
                  <DropdownMenuItem><Link href="/dashboard">Дашборд</Link></DropdownMenuItem>
                  <DropdownMenuItem><Link href="/profile">Профіль</Link></DropdownMenuItem>
                  <DropdownMenuItem>
                    <Logout />
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <ThemeButton />
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
