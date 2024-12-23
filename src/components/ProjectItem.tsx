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
			<h3 className="text-sm text-white hover:underline underline-offset-4">
				<a
					href={url}
					target="_blank"
					rel="noopener noreferrer"
				>
					{title}
				</a>
			</h3>
			<p className="text-sm text-zinc-400">{description}</p>
		</div>
	)
}

export default ProjectItem
