import { useGetVotesQuery, usePostVotesMutation, useRemoveVotesMutation } from "@/services/votes/votes.api"
import { BiSolidLike } from "react-icons/bi"
import { FaBookOpen, FaBookReader } from "react-icons/fa"
import { FaBookBookmark } from "react-icons/fa6"
import { useParams } from "react-router-dom"

const BookVotes = () => {
    const params = useParams()
    const {data} = useGetVotesQuery(params.slug)
    const {mutate: postVote} = usePostVotesMutation()
    const {mutate: removeVote} = useRemoveVotesMutation()

    const handleDelete = (value: number) => {
        removeVote({
            slug: params.slug,
            vote_id: value
        })
    }

    const handleClickVote = (voteId: number) => {
        switch (voteId) {
            case 1:
              !data?.esittim[1] ? postVote({ vote_id: voteId, slug: params.slug! }) : handleDelete(voteId)
              break
            case 2:
              !data?.esitip_atirman[1] ? postVote({ vote_id: voteId, slug: params.slug! }) : handleDelete(voteId)
              break
            case 3:
              !data?.esitejaqpan[1] ? postVote({ vote_id: voteId, slug: params.slug! }) : handleDelete(voteId)
              break
            case 4:
              !data?.usinis_etemen[1] ? postVote({ vote_id: voteId, slug: params.slug! }) : handleDelete(voteId)
              break
          }
    }

    
  return (
    <div className="flex flex-col mt-[16px] gap-y-[16px]">
        <h4 className="text-lg leading-[130%]">Dawis berin:</h4>
        <div className="flex items-center flex-wrap gap-[16px]">
            <button onClick={() => handleClickVote(1)} className="rounded-[16px] duration-200 hover:opacity-70 py-[7px] text-[14px] font-bold text-[#2d71ae] flex items-center gap-[12px] px-[24px] border border-[#2d71ae]">
              <FaBookBookmark />
                Esittim
                <span>{data?.esittim[0]}</span>    
            </button>
            <button onClick={() => handleClickVote(2)} className="rounded-[16px] duration-200 hover:opacity-70 py-[7px] text-[14px] font-bold text-[#2d71ae] flex items-center gap-[12px] px-[24px] border border-[#2d71ae]">
                <FaBookReader />
                Esitip atirman
                <span>{data?.esitip_atirman[0]}</span>    
            </button>
            <button onClick={() => handleClickVote(3)} className="rounded-[16px] duration-200 hover:opacity-70 py-[7px] text-[14px] font-bold text-[#2d71ae] flex items-center gap-[12px] px-[24px] border border-[#2d71ae]">
              <FaBookOpen />
                Esitejaqpan
                <span>{data?.esitejaqpan[0]}</span>    
            </button>
            <button onClick={() => handleClickVote(4)} className="rounded-[16px] duration-200 hover:opacity-70 py-[7px] text-[14px] font-bold text-[#2d71ae] flex items-center gap-[12px] px-[24px] border border-[#2d71ae]">
              <BiSolidLike />
                Usinis etemen
                <span>{data?.usinis_etemen[0]}</span>    
            </button>
        </div>
    </div>
  )
}

export { BookVotes }