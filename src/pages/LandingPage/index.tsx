import LastPostsBlog from "src/components/Blog";
import Categories from "src/components/Categories";
import Banner from "src/components/Banner";
import Newsletter from "src/components/Newsletter/Newsletter";
import Section from "src/components/Section/Section";
import { LandingPageContainer } from "./LandingPage.styled";
import Product from "src/components/Products";

const LandingPage = () => {
	return (
		<>
			<LandingPageContainer>
				<Banner />
				<Section title='New arrivals'>
					<Product contained='true' />
				</Section>
				<Section title='Categories'>
					<Categories />
				</Section>
				<Section title='Blog'>
					<LastPostsBlog />
				</Section>
			</LandingPageContainer>
			<Newsletter />
		</>
	);
};

export default LandingPage;
