import type { Metadata } from "next"
import { JetBrains_Mono } from "next/font/google"
import "./globals.css"

const jetBrains = JetBrains_Mono({ subsets: ["latin"], display: "block" })

export const metadata: Metadata = {
	title: "mrtnz",
	description: "Software Developer and Minimalist Enthusiast",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html
			lang="en"
			className="bg-black"
		>
			<body
				className={`${jetBrains.className} flex min-h-dvh flex-col px-4 py-12 text-zinc-200 antialiased md:px-8 md:py-16`}
			>
				{children}
			</body>
		</html>
	)
}
