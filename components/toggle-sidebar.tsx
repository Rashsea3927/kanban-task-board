"use client";

import { IconHideSidebar } from "./icon/icon-hide-sidebar";
import { Button } from "./ui/button";
import { useSidebar } from "./ui/sidebar";

export function ToggleSidebar({ className }: { className?: string }) {
  const { toggleSidebar } = useSidebar();
  return (
    <Button
      variant="ghost"
      className="rounded-r-10xl h-12 cursor-pointer justify-start gap-[15px] pl-8 text-gray-400 transition-colors duration-400 hover:bg-purple-400 hover:text-purple-500 dark:hover:bg-white"
      onClick={() => {
        toggleSidebar();
      }}
    >
      <IconHideSidebar className="h-4 w-[18px] text-inherit" />
      <span className="text-[15px] font-bold tracking-normal">Hide Sidebar</span>
    </Button>
  );
}
