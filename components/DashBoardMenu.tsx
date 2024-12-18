"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const DashBoardMenu = () => {
  const pathname = usePathname();
  return (
    <div className="flex flex-col gap-2 my-2">
      <Link href="/dashboard">
        <div
          className={`${
            pathname === "/dashboard"
              ? "bg-foreground text-background"
              : "bg-border"
          } flex  gap-2 items-center p-2 rounded-md hover:bg-foreground hover:text-background`}
        >
          Головна
        </div>
      </Link>
      <Link href="/dashboard/wallets">
        <div
          className={`${
            pathname === "/dashboard/wallets"
              ? "bg-foreground text-background"
              : "bg-border"
          } flex gap-2 items-center p-2 rounded-md hover:bg-foreground hover:text-background`}
        >
          Рахунок
        </div>
      </Link>
      <Link href="/dashboard/categories">
        <div
          className={`${
            pathname === "/dashboard/categories"
              ? "bg-foreground text-background"
              : "bg-border"
          } flex gap-2 items-center p-2 rounded-md hover:bg-foreground hover:text-background`}
        >
          Категорії
        </div>
      </Link>
      <Link href="/dashboard/currencies">
        <div
          className={`${
            pathname === "/dashboard/currencies"
              ? "bg-foreground text-background"
              : "bg-border"
          } flex gap-2 items-center p-2 rounded-md hover:bg-foreground hover:text-background`}
        >
          Валюти
        </div>
      </Link>
    </div>
  );
};

export default DashBoardMenu;
