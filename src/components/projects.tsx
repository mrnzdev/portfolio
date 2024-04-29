import ProjectItem from "@/components/project-item";

const Projects = () => {
	return (
		<main className="container">
			<ul className="space-y-4 py-4">
				<ProjectItem
					url="https://neatmail.xyz"
					title="Neat Mail"
					status="In development"
					description="Gmail service with a simple and minimalist approach."
				/>
				<ProjectItem
					url="https://marketplace.visualstudio.com/items?itemName=mrnzdev.neat-theme"
					title="Neat Theme"
					status="v0.1.2"
					description="Sleek black VSCode color theme."
				/>
			</ul>
		</main>
	);
};
export default Projects;
