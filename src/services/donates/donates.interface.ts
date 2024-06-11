export interface IDonate {
    data: IDonateData[]
  }
  
  export interface IDonateData {
    id: number
    book: IDonateBook
    price: string
    deadline: string
    started: boolean
  }
  
  export interface IDonateBook {
    id: number
    title: string
    description: string
    image: IDonateImage[]
  }
  
  export interface IDonateImage {
    id: number
    imageable_type: string
    imageable_id: string
    file_name: string
    is_main: string
    created_at: string
    updated_at: string
  }