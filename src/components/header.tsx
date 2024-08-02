import { ModeToggle } from "@/components/mode-toggle";
import GithubIcon from "@/components/github-icon";

const Header = () => {
	return (
		<header className="container">
			<div className="flex justify-between items-center py-4">
				<a
					className="flex items-center space-x-2"
					href="/"
				>
					<div className="flex flex-col space-y-1 text-sm leading-none">
						<h1 className="text-lg font-bold">MRTNZ</h1>
					</div>
				</a>
				<div className="flex items-center space-x-2">
					<a
						href="https://github.com/mrnzdev"
						target="_blank"
						rel="noreferrer"
						className="ring-offset-background w-7 h-7 flex justify-center items-center p-0 text-sm font-medium rounded-md transition-colors disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 hover:bg-accent hover:text-accent-foreground"
					>
						<GithubIcon className="w-4 h-4 fill-current" />
						<span className="sr-only">@mrnzdev</span>
					</a>
					<ModeToggle />
				</div>
			</div>
		</header>
	);
};

export default Header;
