import Header from "@/components/Header"
import ProjectItem from "@/components/ProjectItem"

export default function Home() {
	return (
		<>
			<Header />
			<main className="container mx-auto flex flex-col gap-8 pt-16">
				<ProjectItem
					url="https://infopaseos.com"
					title="info-paseos"
					description="web platform that allows users to see all the tours that take place in Uruguay."
				/>
				<ProjectItem
					url="https://journey.mrnz.dev"
					title="journey"
					description="website where you can take a look at the amount of weeks that you have been alive."
				/>
			</main>
		</>
	)
}
