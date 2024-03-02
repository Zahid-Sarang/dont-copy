import React from "react";
import Article from "./components/Article";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

const App = () => {
	return (
		<div>
			<Navbar />
			<HeroSection />
			{/* navigation and buttons */}
			<Article
				title="✍️ Article
        "
				image="https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg?auto=compress&cs=tinysrgb&w=600"
				description="I’ve worked in UX for the better part of a decade. From now on, I plan to rei…"
				Heading="What if famous brands had regular fonts? Meet RegulaBrands!"
				userName="Siddharth Goyal"
			/>

			<Article
				title="Meetup"
				image="https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg?auto=compress&cs=tinysrgb&w=600"
				description="I’ve worked in UX for the better part of a decade. From now on, I plan to rei…"
				Heading="What if famous brands had regular fonts? Meet RegulaBrands!"
				userName="Siddharth Goyal"
			/>
		</div>
	);
};

export default App;
