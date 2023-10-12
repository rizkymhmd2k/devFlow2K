"use client";
import { sidebarLinks } from "@/constants";
import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { SignOutButton } from "@clerk/nextjs";

const LeftSidebar = () => {
  const pathname = usePathname();

  return (
    // <div className="sticky top-0 left-0 background-light850_dark100 shadow-light100_dark100 flex flex-col flex-between p-7 text-dark100_light900">
    <div className="background-light900_dark200 light-border custom-scrollbar sticky left-0 top-0 flex h-screen flex-col justify-between overflow-y-auto border-r p-6 pt-36 shadow-light-300 dark:shadow-none max-sm:hidden lg:w-[266px]">
      <div className="flex flex-1 flex-col">
        {sidebarLinks.map((item) => {
          const isActive =
            (pathname === item.route && item.route.length > 1) ||
            pathname === item.route;
          // const isActive = true
          return (
            <div
              className={`flex-start mb-10 flex gap-4 rounded-lg p-2 bg-transparent ${
                isActive ? "primary-gradient" : ""
              } `}
              key={item.label}
            >
              <Image
                src={`${item.imgURL}`}
                width={24}
                height={24}
                alt={item.label}
                className={`hidden xs:flex ${isActive ? "" : "invert-colors"}`}
              />
              <h1>{item.label}</h1>
            </div>
          );
        })}
      </div>

      <div className="flex flex-1">
        <SignOutButton >
          <Button className="">Sign in with Clerk</Button>
        </SignOutButton>
      </div>
    </div>
  );
};

export default LeftSidebar;
