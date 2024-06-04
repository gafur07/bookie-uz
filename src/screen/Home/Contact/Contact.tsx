import { Form, Input, Rate } from "antd";
import contactImg from "../../../images/contactImg.svg";
import TextArea from "antd/es/input/TextArea";
import "./Contact.scss";

const Contact = () => {
  return (
    <>
      <section className="contact py-[80px] px-[5%] flex items-center justify-between gap-[50px]">
        <div className="contact_con">
          <h2 className="mb-[30px] text-[#202020] text-[32px] font-bold">
            Pikir bildiriw
          </h2>
          <Form className="form">
            <Rate className="mb-[30px]" defaultValue={5} />
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
        </div>
        <img src={contactImg} alt="contact-img" />
      </section>
    </>
  );
};

export default Contact;
