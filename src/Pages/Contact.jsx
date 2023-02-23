import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import illustrationUnitedKingdom from '/shared/desktop/illustration-united-kingdom.svg';
import illustrationCanada from '/shared/desktop/illustration-canada.svg';
import illustrationAustralia from '/shared/desktop/illustration-australia.svg';

const Contact = () => {
	// Class name to body tag for SCSS hooks
	useEffect(() => {
		document.body.classList.add('contact');
		return () => {
			document.body.classList.remove('contact');
		};
	}, []);

	// Form
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const handleRegistration = (data) => console.log(data);
	const handleError = (errors) => {};

	let message = "Can't be empty";

	const registerOptions = {
		name: { required: `${message}` },
		email: { required: `${message}` },
		phone: { required: `${message}` },
		message: { required: `${message}` },
	};

	return (
		<HelmetProvider>
			<Helmet>
				<title>Designo | Contact Page</title>
				<meta name="author" content="Steve Portas" />
				<meta name="description" content="Drop us a line." />
			</Helmet>
			<main id="main-content" className="wrapper flow">
				<div
					className="[ card contact-form-wrapper ] [ peach--bc white--fc radius--lg full-bleed ]"
					data-background="pattern--welcome">
					<div className="[ contact-message ] [ flow ]">
						<h1>Contact Us</h1>
						<p>
							Ready to take it to the next level? Let's talk about
							your project or idea and find out how we can help
							your business grow. If you are looking for unique
							digital experiences that's relatable to your users,
							drop us a line.
						</p>
					</div>
					<form
						action="#"
						className="[ form ] [ flow ]"
						onSubmit={handleSubmit(
							handleRegistration,
							handleError
						)}>
						<div className="form-group">
							<label className="visually-hidden">Name</label>
							<input
								name="name"
								type="text"
								placeholder="Name"
								aria-invalid={errors.name ? 'true' : 'false'}
								{...register('name', registerOptions.name)}
							/>
							<small className="text-danger">
								{errors?.name && errors.name.message}
							</small>
						</div>
						<div className="form-group">
							<label className="visually-hidden">Email</label>
							<input
								type="email"
								name="email"
								placeholder="Email"
								aria-invalid={errors.name ? 'true' : 'false'}
								{...register('email', registerOptions.email)}
							/>
							<small className="text-danger">
								{errors?.email && errors.email.message}
							</small>
						</div>
						<div className="form-group">
							<label className="visually-hidden">Phone</label>
							<input
								type="phone"
								name="phone"
								placeholder="Phone"
								aria-invalid={errors.name ? 'true' : 'false'}
								{...register('phone', registerOptions.phone)}
							/>
							<small className="text-danger">
								{errors?.phone && errors.phone.message}
							</small>
						</div>
						<div className="form-group">
							<label className="visually-hidden">Message</label>
							<input
								type="textarea"
								name="message"
								placeholder="Message"
								aria-invalid={errors.name ? 'true' : 'false'}
								{...register(
									'message',
									registerOptions.message
								)}
							/>
							<small className="text-danger">
								{errors?.message && errors.message.message}
							</small>
						</div>
						<button
							aria-label="Submit"
							className="[ button ] [ white--bc radius--sm ]">
							Submit
						</button>
					</form>
				</div>
				<section className="[ card-info--wrapper ] [ flow ]">
					<div className="[ card--info ] [ flow ]">
						<div className="card--info__image">
							<div className="circle" data-rotate="45deg"></div>
							<img src={illustrationCanada} alt="" />
						</div>
						<div className="[ card--info__text ] [ flow ]">
							<h3>Canada</h3>
							<Link
								to="/locations"
								className="[ button ] [ peach--bc radius--sm white--fc ]">
								See location
							</Link>
						</div>
					</div>
					<div className="[ card--info ] [ flow ]">
						<div className="card--info__image">
							<div className="circle" data-rotate="45deg"></div>
							<img src={illustrationAustralia} alt="" />
						</div>
						<div className="[ card--info__text ] [ flow ]">
							<h3>AUSTRALIA</h3>
							<Link
								to="/locations"
								className="[ button ] [ peach--bc radius--sm white--fc ]">
								See location
							</Link>
						</div>
					</div>
					<div className="[ card--info ] [ flow ]">
						<div className="card--info__image">
							<div className="circle" data-rotate="45deg"></div>
							<img src={illustrationUnitedKingdom} alt="" />
						</div>
						<div className="[ card--info__text ] [ flow ]">
							<h3>UNITED KINGDOM</h3>
							<Link
								to="/locations"
								className="[ button ] [ peach--bc radius--sm white--fc ]">
								See location
							</Link>
						</div>
					</div>
				</section>
			</main>
		</HelmetProvider>
	);
};

export default Contact;
