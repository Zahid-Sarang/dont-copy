import React from "react";

const Navbar = ({ handleModal }) => {
	const searchIcon =
		"data:image/svg+xml;base64," +
		btoa(
			`<svg width='22' height='22' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <g id='baseline-search-24px' clip-path='url(%23clip0_1_1172)'>
                <path id='Vector' d='M14.2083 12.8333H13.4842L13.2275 12.5858C14.1258 11.5408 14.6667 10.1842 14.6667 8.70833C14.6667 5.4175 11.9992 2.75 8.70833 2.75C5.4175 2.75 2.75 5.4175 2.75 8.70833C2.75 11.9992 5.4175 14.6667 8.70833 14.6667C10.1842 14.6667 11.5408 14.1258 12.5858 13.2275L12.8333 13.4842V14.2083L17.4167 18.7825L18.7825 17.4167L14.2083 12.8333ZM8.70833 12.8333C6.42583 12.8333 4.58333 10.9908 4.58333 8.70833C4.58333 6.42583 6.42583 4.58333 8.70833 4.58333C10.9908 4.58333 12.8333 6.42583 12.8333 8.70833C12.8333 10.9908 10.9908 12.8333 8.70833 12.8333Z' fill='%237A7A7A'/>
            </g>
            <defs>
                <clipPath id='clip0_1_1172'>
                    <rect width='22' height='22' fill='white'/>
                </clipPath>
            </defs>
        </svg>`
		);

	return (
		<div className="header-container container d-none d-lg-flex align-items-center justify-content-between p-3">
			<div className="header-img" style={{ zIndex: 1 }}>
				<img
					src="https://dont-copy.netlify.app/assets/logo-S2lIhR8K.svg"
					width="162.57px"
					height="24px"
					alt="Logo"
				/>
			</div>
			<div className="header-form">
				<form
					className="d-flex"
					style={{ width: "360px", borderRadius: "21px" }}
				>
					<button className="custom-search" type="submit">
						<img
							alt="Search"
							style={{ border: "none" }}
							className="search-img"
							src={searchIcon}
							width="22"
							height="22"
						/>
					</button>
					<input
						className="form-control custom-input-search"
						type="search"
						placeholder="Search for your favorite groups in ATG"
						aria-label="Search"
					/>
				</form>
			</div>
			<div className="header-button">
				<button
					onClick={() => handleModal(true)}
					id="show"
					className="btn custom-btn-create p-0 m-0"
					data-bs-toggle="modal"
					data-bs-target="#exampleModal"
					fdprocessedid="hd62ne"
				>
					create Account.{" "}
					<span className="text-primary fw-bold">It's Free!</span>
					<img
						className="rounded-circle"
						alt="Profile"
						src="data:image/svg+xml,%3csvg%20width='22'%20height='22'%20viewBox='0%200%2022%2022'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='baseline-arrow_drop_down-24px'%20clip-path='url(%23clip0_1_1136)'%3e%3cpath%20id='Vector'%20d='M6.41667%209.16669L11%2013.75L15.5833%209.16669H6.41667Z'%20fill='black'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1_1136'%3e%3crect%20width='22'%20height='22'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
					/>
				</button>
			</div>
		</div>
	);
};

export default Navbar;
