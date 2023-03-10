export interface IProduct {
	productId: number;
	productName: string;
	productReceiptDate: string;
	productAttributes: IProductAttributes;
	currency: string;
	price: number;
	discount: number;
	promoCode: string;
	rating: IRating;
	aboutProduct: IAboutProduct;
}

export interface IProductAttributes {
	category: string;
	subCategory: IProductSubCategory;
	brand: string;
	collection: string;
	season: string;
	style: string;
}

export interface IProductSubCategory {
	name: string;
	extendableCategories: string[];
}
export interface IRating {
	totalRatingScore: number;
	numberOfRated: number;
}

export interface IAboutProduct {
	colorSizeQuantity: IColorSize[];
	mainImgUrl: string;
	photos: string[];
	description: string;
	details: string;
}

export interface IColorSize {
	color: string;
	size: string;
	quantity: number;
	iconUrl: string;
}

export interface ISubCategory {
	name: string;
	totalProducts: number;
	extendableCategories: string[];
}

export interface IRegisterForm {
	email: string;
	password: string;
	confirmPassword: string;
	firstName: string;
	lastName: string;
}

export interface ILoginForm {
	email: string;
	password: string;
}

export interface IResponseRegister {
	userId: string;
	email: string;
	firstName: string;
	lastName: string;
	registrationDate: string;
	jwtToken: string;
	jwtRefreshToken: string;
	roles: string[];
}

export interface IRating {
	totalRatingScore: number;
	numberOfRated: number;
}

export interface IAboutProduct {
	colorSizeQuantity: IColorSize[];
	mainImgUrl: string;
	photos: string[];
	description: string;
	details: string;
}

export interface IColorSize {
	color: string;
	size: string;
	quantity: number;
	iconUrl: string;
}

export interface ISubCategory {
	name: string;
	totalProducts: number;
	extendableCategories: string[];
}
