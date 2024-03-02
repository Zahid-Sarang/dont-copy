import React from "react";
import { Modal, Button } from "react-bootstrap";
function HeroSection({ openModal, handleModal }) {
	return (
		<>
			<Modal show={openModal} onHide={handleModal}>
				<Modal.Header closeButton>
					<Modal.Title>
						Let's learn, share & inspire each other with our passion for
						computer engineering. Sign up now 🤘🏼
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div className="container text-center">
						<div className="row">
							<div className="col">
								<div className="d-flex flex-column gap-2">
									<div className="d-flex">
										<input
											type="text"
											className="form-control custom-input"
											placeholder="First Name"
										/>
										<input
											type="text"
											className="form-control custom-input"
											placeholder="Last Name"
										/>
									</div>
									<input
										type="email"
										className="form-control custom-input"
										placeholder="Email"
									/>
									<div className="d-flex align-items-center justify-content-between position-relative">
										<input
											type="password"
											className="form-control custom-input"
											placeholder="Password"
										/>
										<button
											className="btn position-absolute"
											style={{ right: "10px" }}
										>
											<img
												src="data:image/svg+xml,%3csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cg id='icon/action/visibility_24px'%3e%3cpath id='icon/action/visibility_24px_2' fill-rule='evenodd' clip-rule='evenodd' d='M0.75 9C2.0475 5.7075 5.25 3.375 9 3.375C12.75 3.375 15.9525 5.7075 17.25 9C15.9525 12.2925 12.75 14.625 9 14.625C5.25 14.625 2.0475 12.2925 0.75 9ZM15.615 9C14.3775 6.4725 11.8425 4.875 9 4.875C6.1575 4.875 3.6225 6.4725 2.385 9C3.6225 11.5275 6.1575 13.125 9 13.125C11.8425 13.125 14.3775 11.5275 15.615 9ZM9 7.125C10.035 7.125 10.875 7.965 10.875 9C10.875 10.035 10.035 10.875 9 10.875C7.965 10.875 7.125 10.035 7.125 9C7.125 7.965 7.965 7.125 9 7.125ZM5.625 9C5.625 7.14 7.14 5.625 9 5.625C10.86 5.625 12.375 7.14 12.375 9C12.375 10.86 10.86 12.375 9 12.375C7.14 12.375 5.625 10.86 5.625 9Z' fill='%23525252'/%3e%3c/g%3e%3c/svg%3e"
												alt="eye"
												width="18px"
												height="18px"
											/>
										</button>
									</div>
									<input
										type="password"
										className="form-control mb-4 custom-input"
										placeholder="Confirm password"
									/>
									<button
										className="btn btn-primary rounded-5 d-flex justify-content-center align-items-center mb-4"
										data-bs-dismiss="modal"
									>
										Create Account
									</button>
									<div className="d-flex flex-column gap-2">
										<button className="btn d-flex align-items-center justify-content-center gap-2 button-signup-group">
											<img
												src="https://dont-copy.netlify.app/assets/facebook-ImnSLa_q.svg"
												alt="facebook"
											/>
											Sign Up with Facebook
										</button>
										<button className="btn d-flex align-items-center gap-2 button-signup-group justify-content-center">
											<img
												src="data:image/svg+xml,%3csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cg clip-path='url(%23clip0_1_2217)'%3e%3cpath d='M3.54594 9.66905L2.989 11.7482L0.953406 11.7912C0.345063 10.6629 0 9.37192 0 8.00005C0 6.67345 0.322625 5.42245 0.8945 4.32092H0.894938L2.70719 4.65317L3.50106 6.45455C3.33491 6.93895 3.24434 7.45895 3.24434 8.00005C3.24441 8.5873 3.35078 9.14995 3.54594 9.66905Z' fill='%23FBBB00'/%3e%3cpath d='M15.8602 6.50562C15.9521 6.98955 16 7.48933 16 8.00012C16 8.57287 15.9398 9.13155 15.8251 9.67046C15.4357 11.5043 14.4181 13.1056 13.0084 14.2388L13.008 14.2384L10.7253 14.1219L10.4023 12.1052C11.3377 11.5566 12.0687 10.6981 12.4537 9.67046H8.1759V6.50562H12.5161H15.8602Z' fill='%23518EF8'/%3e%3cpath d='M13.0081 14.2382L13.0085 14.2386C11.6375 15.3406 9.89596 15.9999 8.00015 15.9999C4.95355 15.9999 2.30477 14.2971 0.953552 11.7911L3.54608 9.66895C4.22168 11.472 5.96102 12.7555 8.00015 12.7555C8.87662 12.7555 9.69774 12.5186 10.4023 12.105L13.0081 14.2382Z' fill='%2328B446'/%3e%3cpath d='M13.1064 1.84175L10.5148 3.9635C9.78553 3.50769 8.92353 3.24438 8.00003 3.24438C5.91475 3.24438 4.14288 4.58678 3.50113 6.4545L0.894969 4.32088H0.894531C2.22597 1.75384 4.90816 0 8.00003 0C9.94112 0 11.7209 0.691438 13.1064 1.84175Z' fill='%23F14336'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='clip0_1_2217'%3e%3crect width='16' height='16' fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
												alt="google"
											/>
											Sign Up with Google
										</button>
									</div>
								</div>
							</div>
							<div className="col">
								<div className="d-flex flex-column">
									<img
										src="https://dont-copy.netlify.app/assets/signup-OCG-APNN.svg"
										alt="atg-illustration"
									/>
									<p className="info-signup">
										By signing up, you agree to our Terms & conditions, Privacy
										policy
									</p>
								</div>
							</div>
						</div>
					</div>
				</Modal.Body>
			</Modal>

			<div className="container1" style={{ zIndex: 1 }}>
				<div className="container1-text">
					<h1 className="text-white">Computer Engineering</h1>
					<p className="text-white mb-5">
						142,765 Computer Engineers follow this
					</p>
				</div>
			</div>
			<div className="container2">
				<div
					className="d-none d-lg-flex justify-content-between mx-auto align-items-center container sticky-top"
					style={{
						maxWidth: "1040px",
						height: "68px",
						background: "rgb(255, 255, 255)",
						borderTop: "1px solid rgba(0, 0, 0, 0.2)",
					}}
				>
					<ul className="nav my-2 nav-underline">
						<li className="nav-item">
							<a className="nav-link active" href="/">
								All Posts (32)
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/">
								Article
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/">
								Event
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/">
								Education
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/">
								Job
							</a>
						</li>
					</ul>
					<div className="d-flex my-2 align-items-center">
						<button
							className="btn"
							aria-label="write-post"
							style={{ background: "rgb(242, 242, 242)" }}
						>
							Write Post
							<img
								src="data:image/svg+xml,%3csvg width='22' height='22' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cg id='baseline-arrow_drop_down-24px' clip-path='url(%23clip0_1_1136)'%3e%3cpath id='Vector' d='M6.41667 9.16669L11 13.75L15.5833 9.16669H6.41667Z' fill='black'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='clip0_1_1136'%3e%3crect width='22' height='22' fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
								alt="arrow down"
							/>
						</button>
						<button
							className="btn btn-primary ms-2 gap-2 d-flex align-items-center "
							aria-label="Join group"
							style={{ border: "0.8px solid rgb(152, 152, 153)" }}
						>
							<img
								src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 22 22' fill='none'%3e%3cg clip-path='url(%23clip0_1_859)'%3e%3cpath d='M7.33333 9.16671H4.58333V6.41671H2.75V9.16671H0V11H2.75V13.75H4.58333V11H7.33333V9.16671ZM16.5 10.0834C18.0217 10.0834 19.2408 8.85504 19.2408 7.33337C19.2408 5.81171 18.0217 4.58337 16.5 4.58337C16.2067 4.58337 15.9225 4.62921 15.6658 4.71171C16.1883 5.45421 16.4908 6.35254 16.4908 7.33337C16.4908 8.31421 16.1792 9.20337 15.6658 9.95504C15.9225 10.0375 16.2067 10.0834 16.5 10.0834ZM11.9167 10.0834C13.4383 10.0834 14.6575 8.85504 14.6575 7.33337C14.6575 5.81171 13.4383 4.58337 11.9167 4.58337C10.395 4.58337 9.16667 5.81171 9.16667 7.33337C9.16667 8.85504 10.395 10.0834 11.9167 10.0834ZM17.985 12.0634C18.7458 12.7325 19.25 13.585 19.25 14.6667V16.5H22V14.6667C22 13.255 19.8275 12.3842 17.985 12.0634ZM11.9167 11.9167C10.0833 11.9167 6.41667 12.8334 6.41667 14.6667V16.5H17.4167V14.6667C17.4167 12.8334 13.75 11.9167 11.9167 11.9167Z' fill='white'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='clip0_1_859'%3e%3crect width='22' height='22' fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
								alt="Join group"
							/>
							Join Group
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default HeroSection;
