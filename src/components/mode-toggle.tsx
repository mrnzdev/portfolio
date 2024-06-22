"use client"

import { SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import MoonIcon from "./moon-icon"

export function ModeToggle() {
	const { theme, setTheme } = useTheme()

	const toggleTheme = () => {
		setTheme(theme === "dark" ? "light" : "dark")
	}

	return (
		<Button
			size='icon'
			variant='outline'
			onClick={toggleTheme}
		>
			<SunIcon className='h-[1rem] w-[1rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
			<MoonIcon className='absolute h-[1rem] w-[1rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
			<span className='sr-only'>Toggle theme</span>
		</Button>
	)
}
