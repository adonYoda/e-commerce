import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Checkbox,
	FormControlLabel,
	FormGroup,
	Radio,
	RadioGroup,
	styled,
	Typography,
} from '@mui/material';
import React, { FC } from 'react';
import SvgIcon from 'src/components/globals/SvgIcon';
import theme from 'src/utils/theme/theme';
import { ReactComponent as ExpandMoreIcon } from '../../../assets/icons/Navigation/angle-down.svg';
import { ReactComponent as OnIcon } from '../../../assets/icons/Controls/Checkbox/On.svg';
import { ReactComponent as OffIcon } from '../../../assets/icons/Controls/Checkbox/Off.svg';
import { ReactComponent as DisabledIcon } from '../../../assets/icons/Controls/Checkbox/Disabled.svg';
import { ReactComponent as OnRadioIcon } from '../../../assets/icons/Controls/Radio Button/On.svg';
import { ReactComponent as OffRadioIcon } from '../../../assets/icons/Controls/Radio Button/Off.svg';
import { ReactComponent as DisabledRadioIcon } from '../../../assets/icons/Controls/Radio Button/Disabled.svg';
import { matchPath, redirect, useNavigate, useParams } from 'react-router';
import { productsPath } from 'src/utils/constants/routes.constants';
import { NavLink } from 'react-router-dom';

const SidebarContainer = styled('div')`
	width: 250px;
`;

const SvgIconArrow = styled(SvgIcon)``;
SvgIconArrow.defaultProps = {
	color: theme.palette.text.placeholder,
};
const CategoryTitle = styled(Typography)`
	display: block;
	margin-bottom: 10px;

	cursor: pointer;
	&:hover {
		color: ${({ theme }) => theme.palette.primary.light};
	}
`;
CategoryTitle.defaultProps = {
	variant: 'caption3',
};

const subcategories = [
	{ title: 'All', disabled: false },
	{ title: 'Coats & Jackets', disabled: false },
	{ title: 'T-shirts', disabled: false },
	{ title: 'Tops', disabled: false },
	{ title: 'Trousers', disabled: false },
	{ title: 'Jumpsuits & Rompers', disabled: false },
	{ title: 'Pants', disabled: false },
	{ title: 'Shorts', disabled: false },
	{ title: 'Sweaters', disabled: false },
	{ title: 'Shoes', disabled: false },
];
const price = [
	{ title: 'Under 100$', disabled: false },
	{ title: '100$ - 200$', disabled: false },
	{ title: '200$ - 400$', disabled: false },
	{ title: '400$ - 600$', disabled: false },
	{ title: 'Over 600$', disabled: false },
];
const size = [
	{ title: 'XS', disabled: true },
	{ title: 'S', disabled: false },
	{ title: 'M', disabled: false },
	{ title: 'L', disabled: false },
	{ title: 'XL', disabled: true },
	{ title: 'XXL', disabled: false },
];
const brand = [
	{ title: "Levi's", disabled: false },
	{ title: 'Jungmaven', disabled: false },
	{ title: 'Sunspel', disabled: false },
	{ title: 'Uniqlo', disabled: false },
	{ title: 'Aime Leon Dore', disabled: false },
];
const styles = [
	{ title: 'All styles', disabled: false },
	{ title: 'A-Line', disabled: false },
	{ title: 'Graphic T-Shirts', disabled: false },
];

interface Props {
	categoryParam: string;
}

const Sidebar: FC<Props> = ({ categoryParam }) => {
	const checkbox = (disabled: boolean) => (
		<Checkbox icon={disabled ? <DisabledIcon /> : <OffIcon />} checkedIcon={<OnIcon />} />
	);
	const radio = (disabled: boolean) => (
		<Radio icon={disabled ? <DisabledRadioIcon /> : <OffRadioIcon />} checkedIcon={<OnRadioIcon />} />
	);

	return (
		<SidebarContainer>
			<Accordion>
				<AccordionSummary
					expandIcon={<SvgIconArrow icon={<ExpandMoreIcon />} />}
					aria-controls='panel1a-content'
					id='panel1a-header'
				>
					<Typography>Category</Typography>
				</AccordionSummary>
				<AccordionDetails>
					{subcategories.map((c, i) => (
						<NavLink
							key={c.title}
							style={({ isActive, isPending }) => ({
								color: isActive ? theme.palette.primary.main : theme.palette.text.primary,
							})}
							to={categoryParam + '/' + c.title}
						>
							<CategoryTitle key={c.title}>{c.title}</CategoryTitle>
						</NavLink>
					))}
				</AccordionDetails>
			</Accordion>
			<Accordion>
				<AccordionSummary
					expandIcon={<SvgIconArrow icon={<ExpandMoreIcon />} />}
					aria-controls='panel2a-content'
					id='panel2a-header'
				>
					<Typography>Price</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<FormGroup sx={{ gap: '3px' }}>
						{price.map((p, i) => (
							<FormControlLabel
								key={p.title}
								disabled={p.disabled}
								sx={{ marginLeft: '0px' }}
								control={checkbox(p.disabled)}
								label={p.title}
							/>
						))}
					</FormGroup>
				</AccordionDetails>
			</Accordion>
			<Accordion>
				<AccordionSummary
					expandIcon={<SvgIconArrow icon={<ExpandMoreIcon />} />}
					aria-controls='panel2a-content'
					id='panel2a-header'
				>
					<Typography>Size</Typography>
				</AccordionSummary>
				<AccordionDetails sx={{ display: 'flex', gap: '80px' }}>
					<FormGroup sx={{ gap: '3px' }}>
						{size.map(
							(p, i) =>
								i <= 2 && (
									<FormControlLabel
										key={p.title}
										disabled={p.disabled}
										sx={{ marginLeft: '0px' }}
										control={checkbox(p.disabled)}
										label={p.title}
									/>
								)
						)}
					</FormGroup>
					<FormGroup sx={{ gap: '3px' }}>
						{size.map(
							(p, i) =>
								i > 2 && (
									<FormControlLabel
										key={p.title}
										disabled={p.disabled}
										sx={{ marginLeft: '0px' }}
										control={checkbox(p.disabled)}
										label={p.title}
									/>
								)
						)}
					</FormGroup>
				</AccordionDetails>
			</Accordion>
			<Accordion>
				<AccordionSummary
					expandIcon={<SvgIconArrow icon={<ExpandMoreIcon />} />}
					aria-controls='panel2a-content'
					id='panel2a-header'
				>
					<Typography>Collection</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit
						amet blandit leo lobortis eget.
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion>
				<AccordionSummary
					expandIcon={<SvgIconArrow icon={<ExpandMoreIcon />} />}
					aria-controls='panel2a-content'
					id='panel2a-header'
				>
					<Typography>Brand</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<FormGroup sx={{ gap: '3px' }}>
						{brand.map((p, i) => (
							<FormControlLabel
								key={p.title}
								disabled={p.disabled}
								sx={{ marginLeft: '0px' }}
								control={checkbox(p.disabled)}
								label={p.title}
							/>
						))}
					</FormGroup>
				</AccordionDetails>
			</Accordion>
			<Accordion>
				<AccordionSummary
					expandIcon={<SvgIconArrow icon={<ExpandMoreIcon />} />}
					aria-controls='panel2a-content'
					id='panel2a-header'
				>
					<Typography>Style</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<RadioGroup
						aria-labelledby='demo-radio-buttons-group-label'
						defaultValue='female'
						name='radio-buttons-group'
					>
						{styles.map((s, i) => (
							<FormControlLabel
								key={s.title}
								disabled={s.disabled}
								sx={{ marginLeft: '0px' }}
								value={s.title}
								control={radio(s.disabled)}
								label={s.title}
							/>
						))}
					</RadioGroup>
				</AccordionDetails>
			</Accordion>
			<Accordion>
				<AccordionSummary
					expandIcon={<SvgIconArrow icon={<ExpandMoreIcon />} />}
					aria-controls='panel2a-content'
					id='panel2a-header'
				>
					<Typography>Season</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit
						amet blandit leo lobortis eget.
					</Typography>
				</AccordionDetails>
			</Accordion>
		</SidebarContainer>
	);
};

export default Sidebar;
