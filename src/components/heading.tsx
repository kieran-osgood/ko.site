import * as React from 'react';

type HeadingType = 'h1' | 'h2' | 'h3' | 'h4';
type HeadingProps = {
	h: HeadingType;
	children: React.ReactNode;
};
const Heading = ({ h = 'h1', children }: HeadingProps) => {
	switch (h) {
	case 'h1':
		return (
			<h1 className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight'>{children}</h1>
		);
	case 'h2':
		return <h2>{children}</h2>;
	case 'h3':
		return <h3>{children}</h3>;
	case 'h4':
		return <h4>{children}</h4>;
	}
};

export default Heading;
