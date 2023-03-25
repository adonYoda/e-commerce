export interface IPost {
	id: string;
	dateCreated: string;
	title: string;
	content: {
		text: string;
		imgUrl: string[];
	};
	author: string;
}
