import { styled } from '@mui/material';
import React from 'react';
import LastPostsBlog from 'src/components/Blog';
import Categories from 'src/components/Categories';
import Header from 'src/components/Header';
import Layout from 'src/components/Layout/Layout';
import Newsletter from 'src/components/Newsletter/Newsletter';
import Section from 'src/components/Section/Section';

const LandingPage = () => {
	return (
		<>
			<Layout dark>
				<Header />
				<Section title='Products'>{/* <Products /> */}</Section>
				<Section title='Categories'>
					<Categories />
				</Section>
				<Section title='Blog'>
					<LastPostsBlog />
				</Section>
				<Newsletter />
			</Layout>
		</>
	);
};

export default LandingPage;
