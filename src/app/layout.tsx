import type { Metadata } from 'next';
import './globals.css';
import { GeistMono } from 'geist/font/mono'
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
		<html className={`${GeistMono.className} lang='en'`}>
			<body className='min-h-dvh bg-background  text-[0.9rem] '>
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
