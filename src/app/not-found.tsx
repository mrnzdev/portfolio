import GithubIcon from "@/components/icons/github"

export default function NotFoundPage() {
	return (
		<main className="flex flex-1 items-center justify-center">
			<div className="flex items-center gap-8">
				<a
					href="mailto:mrtnz@mrtnz.dev"
					className="rounded-lg px-3 py-2 text-xs text-zinc-500 transition-all duration-300 hover:bg-zinc-900/50 hover:text-zinc-200 focus-visible:bg-zinc-900/50 focus-visible:text-zinc-200"
				>
					mrtnz [at] mrtnz.dev
				</a>
				<a
					href="https://github.com/mrnzdev"
					target="_blank"
					rel="noopener noreferrer"
					className="rounded-lg p-2 text-zinc-500 transition-all duration-300 hover:bg-zinc-900/50 hover:text-zinc-200 focus-visible:bg-zinc-900/50 focus-visible:text-zinc-200"
				>
					<GithubIcon />
				</a>
			</div>
		</main>
	)
}
