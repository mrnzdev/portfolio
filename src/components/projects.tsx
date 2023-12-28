import React from 'react';

export default function Projects() {
	return (
		<main className='container'>
			<ul className='space-y-4 py-4'>
				<li>
					<a
						className='flex flex-col space-y-1.5'
						href='https://mrnz.dev'>
						<div>
							<span className='font-medium underline underline-offset-4 '>
								Neat Mail
							</span>
							<span className='ml-2 rounded-lg px-2 py-0.5 font-mono text-xs no-underline bg-primary text-primary-foreground'>
								In development
							</span>
						</div>
						<span className='text-muted-foreground'>
							Email service with a simple and minimalist approach.
						</span>
					</a>
				</li>
			</ul>
		</main>
	);
}