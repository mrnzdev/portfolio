import Header from '@/components/header';
import Projects from '@/components/projects';

export default function Home() {
	return (
		<div className='flex min-dvh-screen flex-col py-8'>
			<Header />
			<Projects />
		</div>
	);
}
