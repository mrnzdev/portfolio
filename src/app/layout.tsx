import { ThemeProvider } from "@/components/theme-provider";
import { GeistMono } from "geist/font/mono";
import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
	title: "mrnz",
	description: "Software Developer",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={`${GeistMono.className}`}>
			<body className="min-h-dvh bg-background text-[0.9rem]">
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
