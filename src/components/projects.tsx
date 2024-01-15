
export default function Projects() {
	return (
		<main className='container'>
			<ul className='space-y-4 py-4'>
				<li>
					<div className='flex flex-col space-y-1.5'>
						<div>
							<span className='font-medium underline underline-offset-4 '>
								<a href="href='https://neatmail.xyz'">Neat Mail</a>
							</span>
							<span className='ml-2 rounded-lg px-2 py-0.5 font-mono text-xs no-underline bg-primary text-primary-foreground'>
								In development
							</span>
						</div>
						<span className='text-muted-foreground'>
							Email service with a simple and minimalist approach.
						</span>
					</div>
				</li>
				<li>
					<div className='flex flex-col space-y-1.5'>
						<div>
							<span className='font-medium underline underline-offset-4 '>
								<a href="https://github.com/mrnzdev/neat-theme">
									Neat Theme
								</a>
							</span>
							<span className='ml-2 rounded-lg px-2 py-0.5 font-mono text-xs no-underline bg-primary text-primary-foreground'>
								v0.0.2
							</span>
						</div>
						<span className='text-muted-foreground'>
							Sleek black and white VSCode color theme.
						</span>
					</div>
				</li>
			</ul>
		</main>
	);
}
