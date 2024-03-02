import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Article from "./components/Article";
import HeroSection from "./components/HeroSection";

const App = () => {
	const [openModal, setOpenModal] = useState(false);

	const handleModal = (state) => {
		setOpenModal(state);
	};
	return (
		<div>
			<Navbar handleModal={handleModal} />
			<HeroSection openModal={openModal} handleModal={handleModal} />
			<Article />
		</div>
	);
};

export default App;
