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
}

export interface ISubCategory {
	name: string;
	totalProducts: number;
	extendableCategories: string[];
}
