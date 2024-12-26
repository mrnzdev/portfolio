import type { Metadata } from "next"
import { Geist_Mono } from "next/font/google"
import "./globals.css"

const geist = Geist_Mono({ subsets: ["latin"], weight: "400" })

export const metadata: Metadata = {
	title: "mrtnz",
	description: "Frontend developer based in Uruguay.",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html
			lang="en"
			className="bg-black text-white"
		>
			<body className={`${geist.className} min-h-dvh p-8`}>{children}</body>
		</html>
	)
}
