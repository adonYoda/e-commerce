import { createTheme, ThemeOptions } from "@mui/material/styles";
import React from "react";
declare module "@mui/material/styles" {
	interface TypographyVariants {
		display: React.CSSProperties;
		lead: React.CSSProperties;
		body15: React.CSSProperties;
		body17: React.CSSProperties;
		body21: React.CSSProperties;
		caption1: React.CSSProperties;
		caption2: React.CSSProperties;
		caption3: React.CSSProperties;
		caption4: React.CSSProperties;
	}

	// allow configuration using `createTheme`
	interface TypographyVariantsOptions {
		display?: React.CSSProperties;
		lead?: React.CSSProperties;
		body15?: React.CSSProperties;
		body17?: React.CSSProperties;
		body21?: React.CSSProperties;
		caption1?: React.CSSProperties;
		caption2?: React.CSSProperties;
		caption3?: React.CSSProperties;
		caption4?: React.CSSProperties;
	}

	interface FormControlPropsSize {
		large: string;
	}
	interface FormControlPropsSizeOptions {
		large?: string;
	}
	interface TextFieldPropsSize {
		large: string;
	}
	interface TextFieldPropsSizeOptions {
		large?: string;
	}
	interface FormControlLabelProps {
		size: {
			large: string;
			medium: string;
			small: string;
		};
	}
	interface FormControlLabelPropsOptions {
		size?: {
			large?: string;
			medium?: string;
			small?: string;
		};
	}
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
	interface TypographyPropsVariantOverrides {
		display: true;
		lead: true;
		body15: true;
		body17: true;
		body21: true;
		caption1: true;
		caption2: true;
		caption3: true;
		caption4: true;
	}
}
declare module "@mui/material/FormControl" {
	interface FormControlPropsSizeOverrides {
		large: true;
	}
	interface FormControlPropsVariantOverrides {
		darkOutlined: true;
	}
}
declare module "@mui/material/FormControlLabel" {
	interface FormControlLabelProps {
		size?: "small" | "medium" | "large";
	}
}
// FormControlLabelProps

declare module "@mui/material/TextField" {
	interface TextFieldPropsSizeOverrides {
		large: true;
	}
}
declare module "@mui/material/styles/createPalette" {
	interface Text {
		extra: string;
		placeholder: string;
	}
	interface TypeText {
		extra?: string;
		placeholder?: string;
	}
}

let theme = createTheme({
	palette: {
		grey: {
			A100: "rgba(0,0,0,0.05)",
			A200: "rgba(0,0,0,0.1)",
			A400: "rgba(0,0,0,0.4)",
		},
		primary: {
			main: "#2D74FF",
			light: "#568FFF",
			dark: "#1156DB",
			contrastText: "#F1F4FA",
		},
		secondary: {
			main: "#FA4A69",
			dark: "#E31F43",
			light: "#FB6E87",
			contrastText: "#FEF3F5",
		},
		background: {
			default: "#000",
			paper: "#fff",
		},
		text: {
			primary: `#000000`,
			secondary: "rgba(0, 0, 0, 0.6)",
			disabled: "rgba(0, 0, 0, 0.3)",
			extra: "rgba(0, 0, 0, 0.5)",
			placeholder: "rgba(0, 0, 0, 0.3)",
		},
		success: {
			main: "#90DA1A",
		},
		warning: {
			main: "#FEB72F",
		},
		error: {
			main: "#FF4E4E",
		},
		action: {
			disabledBackground: "rgba(0,0,0,0.05)",
		},
	},
	typography: {
		fontFamily: "Inter",
		fontSize: 16,
		htmlFontSize: 16,
		display: {
			fontWeight: 500,
			fontSize: "120px",
			lineHeight: "120px",
			letterSpacing: "-6px",
		},
		lead: {
			fontSize: "24px",
			lineHeight: "30px",
			letterSpacing: "-1px",
		},
		body15: {
			fontSize: "15px",
			lineHeight: "23px",
			letterSpacing: "-0.6px",
		},
		body17: {
			fontSize: "17px",
			lineHeight: "25px",
			letterSpacing: "-0.7px",
		},
		body21: {
			fontSize: "21px",
			lineHeight: "30px",
			letterSpacing: "-0.8px",
		},
		caption1: {
			fontSize: "20px",
			lineHeight: "24px",
			letterSpacing: "-0.6px",
		},
		caption2: {
			fontSize: "18px",
			lineHeight: "20px",
			letterSpacing: "-0.3px",
		},
		caption3: {
			fontSize: "16px",
			lineHeight: "18px",
			letterSpacing: "-0.5px",
		},
		caption4: {
			fontSize: "13px",
			lineHeight: "15px",
			letterSpacing: "-0.2px",
		},
		h1: {
			fontWeight: 500,
			fontSize: "72px",
			lineHeight: "80px",
			letterSpacing: "-4.5px",
		},
		h2: {
			fontSize: "64px",
			fontWeight: 500,
			lineHeight: "70px",
			letterSpacing: "-3px",
		},
		h3: {
			fontSize: "48px",
			fontWeight: 500,
			lineHeight: "54px",
			letterSpacing: "-1.6px",
		},
		h4: {
			fontSize: "36px",
			fontWeight: 500,
			lineHeight: "44px",
			letterSpacing: "-1.2px",
		},
		h5: {
			fontSize: "28px",
			fontWeight: 500,
			lineHeight: "34px",
			letterSpacing: "-0.8px",
		},
		button: {
			fontSize: 16,
		},
	},
	shape: {
		borderRadius: 10,
	},
	components: {
		MuiFormControlLabel: {
			variants: [
				{
					props: { size: "large" },
					style: ({ theme }) => ({
						height: "50px",
						marginLeft: "16px",
						"& .MuiCheckbox-root": {
							"& svg": {
								height: "24px",
								width: "24px",
								"& path": {},
							},
						},
						"& .MuiTypography-root": {
							marginLeft: "10px",
							fontSize: "20px",
							lineHeight: "24px",
							letterSpacing: "-0.6px",
						},
					}),
				},
				{
					props: { size: "medium" },
					style: ({ theme }) => ({
						height: "40px",
						marginLeft: "12px",
						"& .MuiCheckbox-root": {
							"& svg": {
								height: "20px",
								width: "20px",
								"& path": {},
							},
						},
						"& .MuiTypography-root": {
							marginLeft: "8px",
							fontSize: "18px",
							lineHeight: "20px",
							letterSpacing: "-0.3px",
						},
					}),
				},
				{
					props: { size: "small" },
					style: ({ theme }) => ({
						height: "30px",
						marginLeft: "8px",
						"& .MuiButtonBase-root, .MuiCheckbox-root": {
							minHeight: "inherit",
							width: "18px",
							"& svg": {
								height: "18px",
								width: "18px",
								"& path": {},
							},
						},
						"& .MuiTypography-root": {
							marginLeft: "6px",
							fontSize: "16px",
							lineHeight: "18px",
							letterSpacing: "-0.5px",
						},
					}),
				},
			],
			defaultProps: {
				size: "small",
			},
			styleOverrides: {
				root: ({ theme }) => ({
					"& .MuiCheckbox-root": {
						"& svg": {
							"& path:nth-child(2)": {
								fill: theme.palette.text.extra,
							},
						},
					},
				}),
			},
		},
		MuiAccordion: {
			defaultProps: {
				disableGutters: true,
			},
			styleOverrides: {
				root: {
					borderTopLeftRadius: "0px",
					borderTopRightRadius: "0px",
					boxShadow: "none",
					"&:before, &.Mui-expanded:before, &:first-of-type:before": {
						display: "block !important",
						position: "absolute",
						left: "0",
						top: "-1px",
						right: "0",
						height: "1px",
						content: "",
						opacity: "1",
						backgroundColor: "rgba(0,0,0,0.12)",
					},
					" .MuiButtonBase-root": {
						minHeight: "50px",
						padding: "0",
						"&.Mui-expanded": {
							minHeight: "50px",
						},
						" .MuiAccordionSummary-content": {
							margin: "10px 0",
						},
						" .MuiTypography-root": {
							fontSize: "18px",
							lineHeight: "30px",
							letterSpacing: "-0.3px",
							fontWeight: "500",
						},
					},
					" .MuiAccordionDetails-root": {
						padding: "0",
						margin: "6px 0 24px",
					},
				},
			},
		},
		MuiDivider: {
			styleOverrides: {
				root: {
					borderColor: "rgba(0, 0, 0, 0.2)",
				},
			},
		},
		MuiContainer: {
			styleOverrides: {
				root: {
					position: "relative",
				},
				maxWidthLg: {
					maxWidth: "1290px !important",
				},
			},
		},
		MuiPaper: {
			styleOverrides: {
				root: {
					"&.MuiPopover-paper": {
						marginTop: "10px",
						border: "1px solid rgba(0, 0, 0, 0.1)",
						boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.06), 0px 3px 6px rgba(0, 0, 0, 0.1) !important",
					},
				},
			},
		},
		MuiMenu: {
			styleOverrides: {
				root: ({ theme }) => ({
					"& .MuiMenu-list": {
						padding: "4px !important",
					},
					"& .MuiMenuItem-root": {
						borderRadius: "5px",
						"&:not(:last-child)": {
							marginBottom: "4px !important",
						},
						"&.Mui-selected": {
							backgroundColor: `${theme.palette.primary.main} !important`,
							color: theme.palette.common.white,
							"&:hover": {},
						},
					},
				}),
			},
		},
		MuiMenuItem: {
			defaultProps: {
				dense: true,
			},
			styleOverrides: {
				root: {
					fontWeight: 400,
				},
			},
		},
		MuiFormControl: {
			variants: [
				{
					props: { size: "large" },
					style: ({ theme }) => ({
						"& .MuiFormLabel": {
							"&-root": {
								transform: "translate(calc((60px - 22px)/2), calc(60px / 2 - 16px / 2)) scale(1)",
								fontSize: "20px",
								'&[data-shrink="true"]': {
									transform: "translate(12px, -9px) scale(0.75)",
								},
							},
						},
						"& .MuiInputBase": {
							"&-root": {
								height: "60px",
								"&.Mui-focused fieldset": {},
							},
							"&-input": {
								padding: "0px calc((60px - 22px)/2)",
								fontSize: "20px",
							},
							"&-adornedStart": {
								paddingLeft: "0px calc((60px - 22px)/2)",
							},
							"&-adornedEnd": {
								paddingRight: "0px calc((60px - 22px)/2)",
							},
						},
						"& .MuiIconButton-root": {
							padding: "calc((60px - 22px)/2)",
							"& svg": {
								width: "22px",
								height: "22px",
							},
						},
						"& .MuiInputAdornment": {
							"&-root": {
								"& svg": {
									width: "22px",
									height: "22px",
								},
							},
							"&-positionStart": {},
						},
						"& .MuiSelect-select": {
							fontSize: "20px",
							letterSpacing: "-0.6px",
							paddingRight: "46px !important",
							"& ~ svg": {
								right: "15px",
							},
						},
					}),
				},
				{
					props: { size: "medium" },
					style: ({ theme }) => ({
						"& .MuiFormLabel": {
							"&-root": {
								transform: "translate(calc((50px - 18.3px)/2), calc(50px / 2 - 16px / 2)) scale(1)",
								fontSize: "18px",
								'&[data-shrink="true"]': {
									transform: "translate(14px, -9px) scale(0.75)",
								},
							},
						},
						"& .MuiInputBase": {
							"&-root": {
								height: "50px",
								"&.Mui-focused fieldset": {},
							},
							"&-input": {
								padding: "0px calc((50px - 18.3px)/2)",
								fontSize: "18px",
							},
							"&-adornedStart": {
								paddingLeft: "0px calc((50px - 18.3px)/2)",
							},
							"&-adornedEnd": {
								paddingRight: "0px calc((50px - 18.3px)/2)",
							},
						},
						"& .MuiIconButton-root": {
							padding: "calc((50px - 18.3px)/2)",
							"& svg": {
								width: "18.3px",
								height: "18.3px",
							},
						},
						"& .MuiInputAdornment": {
							"&-root": {
								"& svg": {
									width: "18.3px",
									height: "18.3px",
								},
							},
							"&-positionStart": {},
						},
						"& .MuiSelect-select": {
							fontSize: "18px",
							letterSpacing: "-0.3px",
							paddingRight: "42px !important",
							"& ~ svg": {
								right: "11px",
							},
						},
					}),
				},
				{
					props: { size: "small" },
					style: ({ theme }) => ({
						"& .MuiFormLabel": {
							"&-root": {
								transform: "translate(calc((40px - 16.5px)/2), calc(40px / 2 - 16px / 2)) scale(1)",
								fontSize: "16px",
								'&[data-shrink="true"]': {
									transform: "translate(16px, -9px) scale(0.75)",
								},
							},
						},
						"& .MuiInputBase": {
							"&-root": {
								height: "40px",
								"&.Mui-focused fieldset": {},
							},
							"&-input": {
								padding: "0px calc((40px - 16.5px)/2)",
								fontSize: "16px",
							},
							"&-adornedStart": {
								paddingLeft: "0px calc((40px - 16.5px)/2)",
							},
							"&-adornedEnd": {
								paddingRight: "0px calc((40px - 16.5px)/2)",
							},
						},
						"& .MuiIconButton-root": {
							padding: "calc((40px - 16.5px)/2)",
							"& svg": {
								width: "16.5px",
								height: "16.5px",
							},
						},
						"& .MuiInputAdornment": {
							"&-root": {
								"& svg": {
									width: "16.5px",
									height: "16.5px",
								},
							},
							"&-positionStart": {},
						},
						"& .MuiSelect-select": {
							fontSize: "16px",
							letterSpacing: "-0.5px",
							"& ~ svg": {
								right: "7px",
							},
						},
					}),
				},
			],
			defaultProps: {
				size: "medium",
			},
			styleOverrides: {
				root: ({ theme, ownerState }) => ({
					borderRadius: theme.shape.borderRadius,
					"&:has(input:focus)": {
						"& .MuiFormLabel-root": {
							color: theme.palette.primary.main,
						},
					},
					"& .MuiFormLabel-root": {
						color: theme.palette.text.disabled,
						fontWeight: 400,
						lineHeight: "16px",
					},
					"& .MuiInputBase": {
						"&-root": {
							"& fieldset": {
								borderColor: theme.palette.grey["A200"],
								transition: "all 0.3s ease 0s",
							},
							"&:not(:has(input:focus)):hover fieldset": {
								borderColor: theme.palette.grey[400],
							},
							"&.Mui-focused fieldset": {},
						},
						"&-input": {
							fontWeight: 400,
						},
					},
					"& .MuiInputAdornment": {
						"&-root": {
							margin: 0,
							"& svg": {
								"& path": {
									fill: theme.palette.text.placeholder,
								},
							},
						},
					},
					"& svg": {
						transition: "all 0.2s ease 0s",
					},
					"& .MuiSelect-select": {
						fontWeight: "500",
						"& ~ svg": {
							position: "absolute",
							width: "20px !important",
							height: "20px !important",
						},
					},
					"& .MuiMenuItem-root": {
						fontSize: "10px",
					},
				}),
			},
		},
		MuiTextField: {
			variants: [
				{
					props: { size: "large" },
					style: ({ theme }) => ({
						"& .MuiFormLabel": {
							"&-root": {
								transform: "translate(calc((60px - 22px)/2), calc(60px / 2 - 16px / 2)) scale(1)",
								fontSize: "20px",
								'&[data-shrink="true"]': {
									transform: "translate(12px, -9px) scale(0.75)",
								},
							},
						},
						"& .MuiInputBase": {
							"&-root": {
								height: "60px",
								"&.Mui-focused fieldset": {},
							},
							"&-input": {
								padding: "0px calc((60px - 22px)/2)",
								fontSize: "20px",
							},
							"&-adornedStart": {
								paddingLeft: "0px calc((60px - 22px)/2)",
							},
							"&-adornedEnd": {
								paddingRight: "0px calc((60px - 22px)/2)",
							},
						},
						"& .MuiIconButton-root": {
							padding: "calc((60px - 22px)/2)",
							"& svg": {
								width: "22px",
								height: "22px",
							},
						},
						"& .MuiInputAdornment": {
							"&-root": {
								"& svg": {
									width: "22px",
									height: "22px",
								},
							},
							"&-positionStart": {},
						},
					}),
				},
				{
					props: { size: "medium" },
					style: ({ theme }) => ({
						"& .MuiFormLabel": {
							"&-root": {
								transform: "translate(calc((50px - 18.3px)/2), calc(50px / 2 - 16px / 2)) scale(1)",
								fontSize: "18px",
								'&[data-shrink="true"]': {
									transform: "translate(14px, -9px) scale(0.75)",
								},
							},
						},
						"& .MuiInputBase": {
							"&-root": {
								height: "50px",
								"&.Mui-focused fieldset": {},
							},
							"&-input": {
								padding: "0px calc((50px - 18.3px)/2)",
								fontSize: "18px",
							},
							"&-adornedStart": {
								paddingLeft: "0px calc((50px - 18.3px)/2)",
							},
							"&-adornedEnd": {
								paddingRight: "0px calc((50px - 18.3px)/2)",
							},
						},
						"& .MuiIconButton-root": {
							padding: "calc((50px - 18.3px)/2)",
							"& svg": {
								width: "18.3px",
								height: "18.3px",
							},
						},
						"& .MuiInputAdornment": {
							"&-root": {
								"& svg": {
									width: "18.3px",
									height: "18.3px",
								},
							},
							"&-positionStart": {},
						},
					}),
				},
				{
					props: { size: "small" },
					style: ({ theme }) => ({
						"& .MuiFormLabel": {
							"&-root": {
								transform: "translate(calc((40px - 16.5px)/2), calc(40px / 2 - 16px / 2)) scale(1)",
								fontSize: "16px",
								'&[data-shrink="true"]': {
									transform: "translate(16px, -9px) scale(0.75)",
								},
							},
						},
						"& .MuiInputBase": {
							"&-root": {
								height: "40px",
								"&.Mui-focused fieldset": {},
							},
							"&-input": {
								padding: "0px calc((40px - 16.5px)/2)",
								fontSize: "16px",
								"&::placeholder": {
									letterSpacing: "-0.5px",
								},
							},

							"&-adornedStart": {
								paddingLeft: "0px calc((40px - 16.5px)/2)",
							},
							"&-adornedEnd": {
								paddingRight: "0px calc((40px - 16.5px)/2)",
							},
						},
						"& .MuiIconButton-root": {
							padding: "calc((40px - 16.5px)/2)",
							"& svg": {
								width: "16.5px",
								height: "16.5px",
							},
						},
						"& .MuiInputAdornment": {
							"&-root": {
								"& svg": {
									width: "16.5px",
									height: "16.5px",
								},
							},
							"&-positionStart": {},
						},
					}),
				},
			],
			defaultProps: {
				size: "medium",
			},
			styleOverrides: {
				root: ({ theme }) => ({
					borderRadius: theme.shape.borderRadius,

					"&:has(input:focus)": {
						"& .MuiFormLabel-root": {
							color: theme.palette.primary.main,
						},
					},
					"& .MuiFormLabel-root": {
						color: theme.palette.text.placeholder,
						fontWeight: 400,
						lineHeight: "16px",
					},
					"& .MuiInputBase": {
						"&-root": {
							"& fieldset": {
								borderColor: theme.palette.grey["A200"],
								transition: "all 0.3s ease 0s",
							},
							"&:not(:has(input:focus)):hover fieldset": {
								borderColor: theme.palette.grey[400],
							},
							"&.Mui-focused fieldset": {},
						},
						"&-input": {
							fontWeight: 400,
						},
					},
					"& .MuiInputAdornment": {
						"&-root": {
							margin: 0,
							"& svg": {
								"& path": {
									fill: theme.palette.text.secondary,
								},
							},
						},
					},
				}),
			},
		},
		MuiChip: {
			styleOverrides: {
				root: ({ theme }) => ({
					height: 24,
					background: `${theme.palette.secondary.light}33`,
					transition: "all 0.3s ease 0s",
					"& .MuiChip-label": {
						padding: "0 10px",
						fontSize: theme.typography.body1,
					},
					"& .MuiChip-deleteIcon": {
						color: theme.palette.secondary.main,
						transition: "all 0.3s ease 0s",
						"&:hover": {
							color: theme.palette.secondary.dark,
						},
					},
				}),
			},
		},
		MuiButton: {
			styleOverrides: {
				root: ({ theme }) => ({
					color: theme.palette.text.primary,
					boxShadow: "none",
					textTransform: "initial",
					padding: 0,
					minWidth: "auto",
					"&:disabled": {
						color: theme.palette.text.disabled,
						background: theme.palette.action.disabledBackground,
						borderColor: theme.palette.grey["A200"],
					},
				}),
				sizeSmall: {
					height: 40,
					padding: 14,
					fontWeight: 500,
					fontSize: "16px",
					lineHeight: "18px",
					letterSpacing: "-0.5px",
				},
				sizeMedium: {
					height: 50,
					padding: 18,
					fontWeight: 500,
					fontSize: "18px",
					lineHeight: "20px",
					letterSpacing: "-0.3px",
				},
				sizeLarge: {
					height: 60,
					padding: 22,
					fontSize: "20px",
					lineHeight: "24px",
					letterSpacing: "-0.6px",
				},
				outlined: ({ theme }) => ({
					borderColor: theme.palette.grey["A200"],
					color: theme.palette.text.primary,
					"&:hover": {
						background: theme.palette.grey["A100"],
						borderColor: theme.palette.grey["A200"],
					},
				}),
			},
		},
		MuiIconButton: {
			styleOverrides: {
				sizeLarge: {
					width: "60px",
					height: "60px",
				},
				sizeMedium: {
					width: "50px",
					height: "50px",
				},
				sizeSmall: {
					width: "40px",
					height: "40px",
				},
				root: ({ theme }) => ({
					"& svg path": {
						fill: theme.palette.text.primary,
					},
				}),
				colorPrimary: ({ theme }) => ({
					background: theme.palette.primary.main,
					"& svg path": {
						fill: theme.palette.common.white,
					},
					"&:hover": {
						background: theme.palette.primary.dark,
					},
				}),
			},
		},
		MuiPagination: {
			styleOverrides: {
				root: ({ theme }) => ({
					border: `1px solid ${theme.palette.grey["A200"]}`,
					borderRadius: theme.shape.borderRadius,
					"& li div": {
						height: "100%",
					},
				}),
			},
		},
		MuiPaginationItem: {
			styleOverrides: {
				root: ({ theme }) => ({
					color: theme.palette.text.disabled,
					fontSize: 18,
					borderRadius: 0,
					margin: 0,
				}),
				sizeSmall: {
					height: 40,
					width: 40,
				},
				sizeLarge: {
					height: 60,
					width: 60,
				},
			},
		},
		MuiSwitch: {
			styleOverrides: {
				sizeSmall: ({ theme }) => ({
					width: 54,
					height: 30,
					padding: 0,
					"& .MuiSwitch-switchBase": {
						padding: 0,
						margin: "2px",
						transitionDuration: "300ms",
						"&.Mui-checked": {
							transform: "translateX(24px)",
							color: "#fff",
							"& + .MuiSwitch-track": {
								backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : theme.palette.primary.main,
								opacity: 1,
								border: 0,
							},
							"&.Mui-disabled + .MuiSwitch-track": {
								opacity: 0.5,
							},
						},
						"&.Mui-focusVisible .MuiSwitch-thumb": {
							color: "#33cf4d",
							border: "6px solid #fff",
						},
						"&.Mui-disabled .MuiSwitch-thumb": {
							color: theme.palette.mode === "light" ? theme.palette.grey[100] : theme.palette.grey[600],
						},
						"&.Mui-disabled + .MuiSwitch-track": {
							opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
						},
					},
					"& .MuiSwitch-thumb": {
						boxSizing: "border-box",
						width: 26,
						height: 26,
					},
					"& .MuiSwitch-track": {
						borderRadius: 26 / 2,
						backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
						opacity: 1,
						transition: theme.transitions.create(["background-color"], { duration: 500 }),
					},
				}),
				sizeMedium: ({ theme }) => ({
					width: 42,
					height: 24,
					padding: 0,
					"& .MuiSwitch-switchBase": {
						padding: 0,
						margin: "2px",
						transitionDuration: "300ms",
						"&.Mui-checked": {
							transform: "translateX(18px)",
							color: "#fff",
							"& + .MuiSwitch-track": {
								backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : theme.palette.primary.main,
								opacity: 1,
								border: 0,
							},
							"&.Mui-disabled + .MuiSwitch-track": {
								opacity: 0.5,
							},
						},
						"&.Mui-focusVisible .MuiSwitch-thumb": {
							color: "#33cf4d",
							border: "6px solid #fff",
						},
						"&.Mui-disabled .MuiSwitch-thumb": {
							color: theme.palette.mode === "light" ? theme.palette.grey[100] : theme.palette.grey[600],
						},
						"&.Mui-disabled + .MuiSwitch-track": {
							opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
						},
					},
					"& .MuiSwitch-thumb": {
						boxSizing: "border-box",
						width: 20,
						height: 20,
					},
					"& .MuiSwitch-track": {
						borderRadius: 26 / 2,
						backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
						opacity: 1,
						transition: theme.transitions.create(["background-color"], { duration: 500 }),
					},
				}),
			},
		},
	},
});

export default theme;
