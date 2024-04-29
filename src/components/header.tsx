import { ModeToggle } from "@/components/mode-toggle";
import GithubIcon from "@/components/github-icon";

const Header = () => {
	return (
		<header className="container">
			<div className="flex items-center justify-between py-4">
				<a
					className="flex items-center space-x-2"
					href="/"
				>
					<div className="flex flex-col space-y-1 text-sm leading-none">
						<h1 className="text-lg font-bold">mrnz</h1>
					</div>
				</a>
				<div className="flex items-center space-x-2">
					<a
						href="https://github.com/mrnzdev"
						target="_blank"
						rel="noreferrer"
						className="text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground rounded-md flex h-7 w-7 items-center justify-center p-0"
					>
						<GithubIcon className="h-4 w-4 fill-current" />
						<span className="sr-only">@mrnzdev</span>
					</a>
					<ModeToggle />
				</div>
			</div>
		</header>
	);
};

export default Header;
