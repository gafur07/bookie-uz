import { Form, Input, Rate } from "antd";
import contactImg from "../../../images/contactImg.svg"
import TextArea from "antd/es/input/TextArea";

const Contact = () => {
  return (
    <>
      <section className="contact py-[80px]">
        <div className="container">
          <h2 className="mb-[30px] text-[#202020] text-[32px] font-bold">
            Pikir bildiriw
          </h2>
            <div className="flex items-center justify-between gap-4">
                <Form>
                    <Rate className="mb-[30px]" defaultValue={5}/>
                    <Input 
                        placeholder="Atıńız"
                        className="px-[24px] py-[10px] rounded-[16px] mb-[30px]"
                    />
                    <TextArea
                        className="px-[24px] py-[10px] rounded-[16px] mb-[30px]"
                        placeholder="Pikiriniz"
                        rows={7}
                    />
                    <button className="rounded-[16px] text-white bg-[#2d71ae] px-[24px] py-[10px] font-semibold">
                        Jollaw
                    </button>
                </Form>
                <img src={contactImg} alt="contact-img" />
            </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
