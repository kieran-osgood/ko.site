import * as React from 'react';
import thisCanBeAnything from 'src/styles/css/hero.module.scss';
import another from 'src/styles/css/another.module.scss';
import Layout from 'src/components/layout';
import Heading from 'src/components/heading';

type IndexProps = {
	path: string;
};
const IndexPage = ({ path }: IndexProps) => {
	console.log(thisCanBeAnything);
	return (
		<Layout path={path}>
			{/* <div className={`${thisCanBeAnything.aname} somethigelse`}>styles</div> */}
			<div className={`${thisCanBeAnything.aname} ${another.aname}`}>another</div>
			<div className="aname"></div>
			<HeroBackground/>
			<HeroMessage />
		</Layout>
	);
};

export default IndexPage;

const HeroMessage = () => {
	return (
		<>
			<Heading h='h1'>Hello, my</Heading>
			<Heading h='h1'>name&apos;s Kieran.</Heading>
			<Heading h='h1'>I&apos;m a freelance</Heading>
			<Heading h='h1'>Software Engineer.</Heading>
		</>
	);
};

const HeroBackground = () => {
	return (
		<div className={thisCanBeAnything}>

		</div>
	);
};