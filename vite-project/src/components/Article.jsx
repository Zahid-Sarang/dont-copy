import React from "react";

const Article = ({
	title,
	image,
	Heading,
	description,
	profileImage,
	userName,
}) => {
	return (
		<div>
			<img src={image} />
			<h1>{title}</h1>
			<h2>{Heading}</h2>
			<p>{description}</p>
			<img src={profileImage} alt="profile_image" />
			<p>{userName}</p>
			<p>
				<span>icon</span>1.4k views
			</p>
			<p>shareIcond</p>
		</div>
	);
};

export default Article;
