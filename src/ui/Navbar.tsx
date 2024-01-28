"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, Search } from "lucide-react";
import { ModeToggle } from "./DarkModeToggle";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [state, setState] = useState(false);
  const menus = [
    { title: "Home", path: "/" },
    { title: "Blog", path: "/posts" },
    { title: <ModeToggle /> },
  ];

  return (
    <>
      <nav className=" w-full border-b-2 border-secondary-foreground/20 bg-background">
        <div className="  max-w-screen-3xl mx-auto items-center px-4 lg:flex lg:px-8">
          <div className="flex items-center justify-between py-3 lg:block lg:py-5">
            <Link href="/">
              <h1 className="ml-8 text-3xl font-bold text-primary">Blog app</h1>
            </Link>
            <div className="lg:hidden">
              <button
                className="rounded-md p-2 text-secondary-foreground outline-none focus:border focus:border-gray-400"
                onClick={() => setState(!state)}
              >
                <Menu />
              </button>
            </div>
          </div>
          <div
            className={`mt-8 flex-1 justify-self-center pb-3 lg:mt-0 lg:block lg:pb-0 ${
              state ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-end space-y-8  lg:flex lg:space-x-10 lg:space-y-0">
              <li className="text-secondary-foreground ">Home</li>
              <li className="text-secondary-foreground ">Dashboard</li>
              <li className="text-secondary-foreground ">
                <ModeToggle />
              </li>
              <form className="flex items-center  space-x-2 rounded-md border p-2">
                <Search className="h-5 w-5 flex-none text-secondary-foreground" />
                <input
                  className="w-full appearance-none bg-inherit text-secondary-foreground outline-none sm:w-auto"
                  type="text"
                  placeholder="Search"
                />
              </form>
              <Button className="bg-primary text-white">Sign in</Button>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
