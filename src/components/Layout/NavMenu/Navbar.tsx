import { Link, useLocation, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { axiosClassic } from "@/api";
import { INavCategories } from "./nav.menu.interface";
import { NavSearchMenu } from "./NavSearchMenu";
import { Container } from "@/components/shared";
import { Header } from "antd/es/layout/layout";
import { Menu } from "antd";

const Navbar = () => {
  const navigate = useNavigate()
  const { data } = useQuery<INavCategories[]>({
    queryFn: getNavCategories,
    queryKey: ["categories"],
  });
  const params = useLocation();

  async function getNavCategories() {
    const res = await axiosClassic.get("/category");
    return res.data.data;
  }

  return (
    <section className="bg-[#d7e7f8] max-[820px]:hidden">
      <Container>
        <nav>
          {params.pathname.includes("donates" || "donates-process") ? (
            <Header className="flex items-center justify-between flw w-full bg-transparent">
            <Menu
              className="bg-transparent w-full first-letter:uppercase font-semibold text-md"
              mode="horizontal"
              onClick={({ key }) => navigate(`/${key}`)}
              items={[
                {
                  label: "Aqsha jiynalmagan kitaplar",
                  key: 'donates'
                },
                {
                  label: 'Processtegi kitaplar',
                  key: 'donates-process'
                }
              ]}
            />
            <NavSearchMenu />
          </Header>
          ) : (
            <Header className="flex items-center justify-between flw w-full bg-transparent">
              <Menu
                className="bg-transparent w-full first-letter:uppercase font-semibold text-md"
                mode="horizontal"
                onClick={({ key }) => navigate(`category/${key}`)}
                items={data?.map((item) => ({
                  key: item.slug,
                  label: item.name,
                }))}
              />
              <NavSearchMenu />
            </Header>
          )}
        </nav>
      </Container>
    </section>
  );
};

export { Navbar };
