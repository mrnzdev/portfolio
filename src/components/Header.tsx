import Link from "next/link"
import GithubIcon from "./GithubIcon"

const Header = () => {
	return (
		<header className="container mx-auto">
			<div className="flex items-center justify-between">
				<h1 className="text-sm font-medium">
					<Link href="/">mrtnz</Link>
				</h1>
				<a
					href="https://github.com/mrnzdev"
					target="_blank"
					rel="noopener noreferrer"
					className="cursor-pointer rounded-md p-2 hover:bg-[#27272a]"
				>
					<GithubIcon />
				</a>
			</div>
		</header>
	)
}
export default Header
