interface MoonIconProps {
	className?: string;
}

const MoonIcon: React.FC<MoonIconProps> = ({ className }) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		className={className}
		width='24'
		height='24'
		viewBox='0 0 24 24'
		fill='none'
		stroke='currentColor'
		strokeWidth='2'
		strokeLinecap='round'
		strokeLinejoin='round'
	>
		<path d='M12 3a6.364 6.364 0 0 0 9 9 9 9 0 1 1-9-9Z'></path>
	</svg>
);

export default MoonIcon;
