interface ProjectItemProps {
	url: string;
	title: string;
	status: string;
	description: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({
	url,
	title,
	status,
	description,
}) => (
	<li>
		<div className="flex flex-col space-y-1.5">
			<div>
				<span className="font-medium underline underline-offset-4 ">
					<a href={url}>{title}</a>
				</span>
				<span className="ml-2 rounded-lg px-2 py-0.5 font-mono text-xs no-underline bg-primary text-primary-foreground">
					{status}
				</span>
			</div>
			<span className="text-muted-foreground">{description}</span>
		</div>
	</li>
);

export default ProjectItem;
