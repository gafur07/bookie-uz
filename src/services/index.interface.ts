export * from "./auth/auth.interface";
export * from "./category/category.interface";
export * from "./book-slug/book-slug.interface";
export * from "./payment/payment.interface";
export * from "./donates/donates.interface";

export interface IResponseSingleData<T> {
	message?: string;
	data: T;
}

export interface IResponseData<T> {
	message?: string;
	data: T[];
}

export interface IError {
	code: string;
	config: any;
	name: string;
	message: string;
	request: any;
	response: {
		data: {
			message: string;
			data: {
				message: string;
				error: string;
			};
		};
		status: number;
		statusText: string;
	};
	stack: string;
}
