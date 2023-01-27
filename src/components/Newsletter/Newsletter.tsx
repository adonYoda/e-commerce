import React from 'react';
import {
	NewsletterCaption,
	NewsletterContainer,
	NewsletterContent,
	NewsletterForm,
	NewsletterImage,
	NewsletterTitle,
	NewsletterBody,
	FormControlStyled,
	ButtonStyled,
} from './Newsletter.styled';
import newsletterImg from '../../assets/Images/Base.png';
import {
	Button,
	Container,
	FormControl,
	FormHelperText,
	IconButton,
	InputAdornment,
	InputLabel,
	OutlinedInput,
	TextField,
} from '@mui/material';
import { ReactComponent as MailIcon } from '../../assets/icons/Base/envelope.svg';
{
	/* <SvgIcon icon={<MailIcon/>}/> */
}

const Newsletter = () => {
	return (
		<NewsletterContainer>
			<NewsletterContent>
				<Container>
					<NewsletterBody>
						<NewsletterCaption>Newsletter</NewsletterCaption>
						<NewsletterTitle>Subscribe and get info about new releases first</NewsletterTitle>
						<NewsletterForm>
							<FormControlStyled size='large'>
								<OutlinedInput
									id='outlined-adornment-amount'
									placeholder='Enter you email'
									startAdornment={
										<InputAdornment position='end'>
											<MailIcon />
										</InputAdornment>
									}
								/>
							</FormControlStyled>
							<ButtonStyled variant='contained' size='large'>
								Subscribe
							</ButtonStyled>
						</NewsletterForm>
					</NewsletterBody>
				</Container>
			</NewsletterContent>
			<NewsletterImage>
				<img src={newsletterImg} alt='' />
			</NewsletterImage>
		</NewsletterContainer>
	);
};

export default Newsletter;
