"use client";

import React from "react";
import Link from "next/link";
import { Moon } from "lucide-react";
import { useThemeStore } from "@/store/useThemeStore";
import NavLink from "./nav-link";

const Header = () => {
  const { toggleTheme } = useThemeStore();

  return (
    <header className="flex h-16 items-center justify-between bg-content mx-5 mt-6 px-5 rounded-3xl">
      <Link href="/">
        <h1 className="text-primary font-bold text-lg font-roboto-mono text-center">
          Bleu
        </h1>
      </Link>
      <div className="flex gap-4 text-lg">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/theme-showcase">Theme Showcase</NavLink>
      </div>
      <div className="flex gap-2">
        <button
          className="flex  items-center rounded-full bg-primary/10 p-1"
          onClick={() => toggleTheme()}
        >
          <Moon size={18} className="text-primary" />
        </button>
      </div>
    </header>
  );
};

export default Header;
