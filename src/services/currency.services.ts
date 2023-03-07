export const currencyFormated = (currencyFormat: string, currency: string, price: number) => {
	const formated = new Intl.NumberFormat(currencyFormat, {
		style: "currency",
		currency,
		minimumFractionDigits: Number.isInteger(price) ? 0 : 2,
		maximumFractionDigits: Number.isInteger(price) ? 0 : 2,
	});
	return formated.format(price);
};
