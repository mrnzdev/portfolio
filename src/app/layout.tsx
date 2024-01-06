import type { Metadata } from 'next';
import './globals.css';
import { GeistMono } from 'geist/font/mono';
import { ThemeProvider } from '@/components/theme-provider';


export const metadata: Metadata = {
	title: 'mrnz',
	description: 'Software Developer',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={`${GeistMono.className} min-h-dvh bg-background font-sans text-[0.9rem]`}>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
