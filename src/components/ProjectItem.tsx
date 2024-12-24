interface ProjectItemProps {
	url: string
	title: string
	description: string
}

const ProjectItem: React.FC<ProjectItemProps> = ({
	url,
	title,
	description,
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
		</div>
	)
}

export default ProjectItem
