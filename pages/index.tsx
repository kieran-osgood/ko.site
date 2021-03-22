import * as React from 'react';

import Layout from 'src/components/layout';
import Heading from 'src/components/heading';

type IndexProps = {
	path: string;
};
const IndexPage = ({ path }: IndexProps) => {
	return (
		<Layout path={path}>
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
