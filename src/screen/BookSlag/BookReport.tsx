import { useAppDispatch, useAppSelector } from "@/hooks"
import { Rate } from "antd"
import userImg from "../../images/user.png"
import TextArea from "antd/es/input/TextArea"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { postReview } from "@/store/review/review.action"

const BookReport = () => {
  const { token } = useAppSelector((store) => store.auth)
  const dispatch = useAppDispatch()
  const {slug} = useParams()
  const [text, setText] = useState('')
  const [rating, setRating] = useState(4)

  const handleChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value
    setText(value)
  }

  function postReport() {
    dispatch(postReview({ slug: `${slug}`, rating: rating, text: text }))
  }

  return (
    <div className="py-[30px] bg-[#d7e7f8]">
      <div className="container">
        {
          token ? 
          (
          <div className="flex flex-col gap-y-[30px]">
              <div className="flex items-center gap-[30px] px-[10%]">
                <h1 className="text-[24px] font-semibold leading-[130%]">Pikir qaldiriw</h1>
                <Rate onChange={(e) => setRating(e)} defaultValue={rating}/>
              </div>
              <div className="px-[10%] flex items-start justify-center gap-[24px]">
                <img className="h-[54px]" src={userImg} alt="" />
                <TextArea
                  className="report-text-area"
                  placeholder="Pikir qaldirin'..."
                  rows={1}
                  autoSize
                  onChange={handleChangeText}
                  value={text}
                />
                <button onClick={postReport} className="report-btn">Sholiw</button>
              </div>
          </div>
          ) : (
            <h1 className="report-h2">Pikir qaldırıw ushın, dáslep, akkauntıńızǵa kiriwińiz kerek boladı</h1>
          )
        }
        </div>
    </div>
  )
}

export { BookReport }