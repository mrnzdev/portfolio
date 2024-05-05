import ProjectItem from "@/components/project-item";

const Projects = () => {
	return (
		<main className="container">
			<ul className="space-y-4 py-4">
				<ProjectItem
					title="Mane Studio"
					url="https://mane.studio"
					status="In development"
					description="Building my own digital agency that specializes in web development and design."
				/>
			</ul>
		</main>
	);
};
export default Projects;
