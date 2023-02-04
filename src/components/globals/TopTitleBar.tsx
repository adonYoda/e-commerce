import { FormControl, MenuItem, Select, SelectChangeEvent, styled, Typography } from '@mui/material';
import React, { FC } from 'react';
import { ReactComponent as ArrowDownIcon } from '../../assets/icons/Navigation/angle-down.svg';

const TopTitleBarContainer = styled('div')`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 30px;
`;

interface Props {
	title: string;
	selectorList?: Array<string>;
	handleGetValue?: (value: string) => void;
	selectorWidth?: string;
}

const TopTitleBar: FC<Props> = ({ title, selectorList, handleGetValue, selectorWidth }) => {
	const [selected, setSelected] = React.useState<string>(selectorList![0]);

	const handleChange = (event: SelectChangeEvent) => {
		setSelected(event.target.value);
		handleGetValue && handleGetValue(event.target.value);
	};

	return (
		<TopTitleBarContainer>
			<Typography variant='h3'>{title}</Typography>
			{selectorList && (
				<FormControl size='small' sx={{ minWidth: selectorWidth ?? 'auto' }}>
					<Select
						fullWidth
						value={selected}
						onChange={handleChange}
						displayEmpty
						inputProps={{ 'aria-label': 'Without label' }}
						IconComponent={ArrowDownIcon}
					>
						{selectorList?.map((item) => (
							<MenuItem key={item} value={item}>
								{item}
							</MenuItem>
						))}
					</Select>
					{/* <FormHelperText>Without label</FormHelperText> */}
				</FormControl>
			)}
		</TopTitleBarContainer>
	);
};

export default TopTitleBar;
