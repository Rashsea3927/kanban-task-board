"use client";
import IconShowSidebar from "@assets/icon-show-sidebar.svg";
import Image from "next/image";
import { Button } from "./ui/button";
import { useSidebar } from "./ui/sidebar";

export function ShowSidebarButton() {
  const { toggleSidebar } = useSidebar();
  return (
    <Button
      variant="ghost"
      className="rounded-r-10xl fixed bottom-8 left-0 hidden h-12 w-14 cursor-pointer bg-purple-500 p-0 transition-colors duration-400 hover:bg-purple-400 md:flex"
      onClick={() => {
        toggleSidebar();
      }}
    >
      <Image src={IconShowSidebar} width={18} height={16} className="h-auto w-4" alt="" />
    </Button>
  );
}
