interface ProjectItemProps {
	url: string
	title: string
	description: string
	technologies: string[] // Add technologies array prop
}

const ProjectItem: React.FC<ProjectItemProps> = ({
	url,
	title,
	description,
	technologies,
}) => {
	return (
		<div className="flex flex-col gap-2">
			<h3 className="text-sm">
				<a
					href={url}
					target="_blank"
					rel="noopener noreferrer"
					className="underline-offset-4 hover:underline"
				>
					{title}
				</a>
			</h3>
			<p className="text-sm text-zinc-400">{description}</p>
			<div className="flex flex-wrap gap-2">
				{technologies.map((tech, index) => (
					<span
						key={index}
						className="rounded-lg bg-zinc-800 px-2 py-1 text-xs text-zinc-400"
					>
						{tech}
					</span>
				))}
			</div>
		</div>
	)
}

export default ProjectItem
