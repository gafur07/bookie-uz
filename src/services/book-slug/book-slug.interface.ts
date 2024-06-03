export interface IBookSlug {
    title: string;
    description: string;
    price: string;
    category: ICategory[];
    genre: IGenre[];
    author: IAuthor[];
    reviews: IReviews[];
    audios: IAudio[],
    narrator: INarrator[],
    image: Image[];
  }

  export interface ISlug {
    slug: string
  }
  
  export interface IReviews {
    id: number;
    user_id: string;
    name: string;
    text: string;
    rating: number;
  }
  
  export interface IPostReview {
    slug: string;
    text: string;
    rating: number;
  }
  
  export interface Image {
    id: number;
    imageable_id: string;
    imageable_type: string;
    file_name: string;
    is_main: string;
    image_url: string;
  }
  
  export interface ICategory {
    id: number;
    name: string;
    slug: string;
  }
  
  export interface IAuthor {
    name: string;
    slug: string;
  }
  
  export interface IGenre {
    name: string;
    slug: string;
  }
  
  export interface IAudio {
    id: number;
    title: string;
    is_free: boolean;
    slug: string;
    audio_url: string;
  }
  
  
  export interface INarrator {
      name: string,
      slug: string
  }