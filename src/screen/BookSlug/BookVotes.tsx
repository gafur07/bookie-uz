
const BookVotes = () => {
  return (
    <div className="flex flex-col mt-[16px] gap-y-[16px]">
        <h4 className="vote-h4">Dawis berin:</h4>
        <div className="flex items-center flex-wrap gap-[16px]">
            <button className="rounded-[16px] duration-200 hover:opacity-70 py-[7px] text-[14px] font-bold text-[#2d71ae] flex items-center gap-[12px] px-[24px] border border-[#2d71ae]">
                <i className='bx bx-book-bookmark font-bold text-[16px]'></i>
                Esittim
                <span>7</span>    
            </button>
            <button className="rounded-[16px] duration-200 hover:opacity-70 py-[7px] text-[14px] font-bold text-[#2d71ae] flex items-center gap-[12px] px-[24px] border border-[#2d71ae]">
                <i className='bx bx-book-reader font-bold text-[16px]'></i>
                Esitip atirman
                <span>7</span>    
            </button>
            <button className="rounded-[16px] duration-200 hover:opacity-70 py-[7px] text-[14px] font-bold text-[#2d71ae] flex items-center gap-[12px] px-[24px] border border-[#2d71ae]">
                <i className='bx bx-book-open font-bold text-[16px]'></i>
                Esitejaqpan
                <span>7</span>    
            </button>
            <button className="rounded-[16px] duration-200 hover:opacity-70 py-[7px] text-[14px] font-bold text-[#2d71ae] flex items-center gap-[12px] px-[24px] border border-[#2d71ae]">
                <i className='bx bx-like font-bold text-[16px]'></i>
                Usinis etemen
                <span>7</span>    
            </button>
        </div>
    </div>
  )
}

export { BookVotes }