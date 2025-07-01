import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/components/theme-provider";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="border-theme-yellow-400 hover:border-theme-yellow-500 dark:border-theme-yellow-500 dark:hover:border-theme-yellow-400 bg-transparent hover:bg-transparent dark:bg-transparent dark:hover:bg-transparent focus:ring-2 focus:ring-theme-yellow-400 focus:ring-offset-2 dark:focus:ring-theme-yellow-500 dark:focus:ring-offset-black focus-visible:ring-2 focus-visible:ring-theme-yellow-400 focus-visible:ring-offset-2 dark:focus-visible:ring-theme-yellow-500 dark:focus-visible:ring-offset-black"
        >
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-theme-yellow-500 dark:text-theme-yellow-400" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-theme-yellow-500 dark:text-theme-yellow-400" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="z-[9999] bg-white dark:bg-black border-theme-yellow-400 dark:border-theme-yellow-500"
      >
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className="text-theme-yellow-600 dark:text-theme-yellow-400 hover:bg-theme-yellow-50 dark:hover:bg-theme-yellow-900/10 focus:bg-theme-yellow-50 dark:focus:bg-theme-yellow-900/10"
        >
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className="text-theme-yellow-600 dark:text-theme-yellow-400 hover:bg-theme-yellow-50 dark:hover:bg-theme-yellow-900/10 focus:bg-theme-yellow-50 dark:focus:bg-theme-yellow-900/10"
        >
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("system")}
          className="text-theme-yellow-600 dark:text-theme-yellow-400 hover:bg-theme-yellow-50 dark:hover:bg-theme-yellow-900/10 focus:bg-theme-yellow-50 dark:focus:bg-theme-yellow-900/10"
        >
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
