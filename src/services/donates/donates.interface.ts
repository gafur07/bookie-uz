export interface IDonateData {
	id: number;
	book: IDonateBook;
	price: string;
	deadline: string;
	started: boolean;
	accumulated: IDonateAccumulated | null;
}

export interface IDonateBook {
	id: number;
	title: string;
	description: string;
	image: IDonateImage[];
}

export interface IDonateImage {
	id: number;
	imageable_type: string;
	imageable_id: string;
	file_name: string;
	is_main: string;
	image_url: string;
	created_at: string;
	updated_at: string;
}

export interface IDonatePayment {
	url: string;
}

export interface IDonateChange {
	donate_id: number;
	name: string;
	price: string;
}

export interface IDonateAccumulated {
	id: number;
	donate_id: string;
	money: string;
	created_at: string;
	updated_at: string;
}
