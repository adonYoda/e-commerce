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
    subCategory: string;
    brand: string;
    collection: string;
    season: string;
    style: string;
}


export interface IRating {
    totalRatingScore: number;
    numberOfRated: number;
}

export interface IAboutProduct {
    colorSizeQuantity: [
        {
          color: string;
          size: string;
          quantity: number;
        }
      ];
      mainImgUrl: string;
      photos: string[];
      description: string;
      details: string;
}