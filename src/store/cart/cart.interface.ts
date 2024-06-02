export interface ICart {
    id: number
    quantity: string
    title: string
    description: string
    price: string
    language: string
    slug: string
    author: string
    image: Image[]
    reviews: Review[]
    audio: Audio[]
  }

  export interface ICartRoot {
    item: ICart
  }
  
  export interface Image {
    id: number
    imageable_id: string
    imageable_type: string
    file_name: string
    is_main: string
    image_url: string
  }
  
  export interface Review {
    id: number
    user_id: string
    name: string
    text: string
    rating: string
  }
  
  export interface Audio {
    id: number
    title: string
    is_free: boolean
    is_available: boolean
    slug: string
    audio_url: string
  }