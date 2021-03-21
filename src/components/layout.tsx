import * as React from 'react';
import Footer from 'src/components/footer';
import Header from 'src/components/header';

export const Context = React.createContext<string | null>(null);

type LayoutProps = {
	children: React.ReactNode;
	path: string;
};
const Layout = ({ children, path }: LayoutProps) => {
	return (
		<Context.Provider value={path}>
			<div className='bg-primary-background min-h-screen text-primary-text'>
				<Header />
				<main className='w-full h-full relative block mx-auto'>
					<div className='mx-auto pb-6 pt-16 px-8 lg:max-w-screen-md xl:w-3/4 xl:max-w-screen-lg break-words'>
						{children}
					</div>
				</main>
				<Footer />
			</div>
		</Context.Provider>
	);
};

export default Layout;

