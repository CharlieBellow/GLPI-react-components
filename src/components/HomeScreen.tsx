import CardCategory from "@/components/CardGroup/CardGroup";
import CardGroups from "@/components/Cards/CardGroups";
import CardHomeMobile from "@/components/Cards/CardHomeMobile";
import CardServices from "@/components/Cards/CardServices";
import CardTicketSummary from "@/components/Cards/CardTicketSummary";
import * as Icon from "@/components/icons";
import Search from "@/components/Inputs/Search";

// * página inicial é exibida em '/' ou '/Dashboard'

function HomeScreen() {
  return (
    <div className="container h-full overflow-auto  py-12">
      <div className="lg:hidden">
        <div className="mx-2 flex flex-col items-center gap-6">
          <CardHomeMobile />
          <Search placeholder={"O que está procurando?"} />
        </div>

        <h1 className="my-6 ml-8 text-base font-semibold">Categorias</h1>

        <div className="mx-auto flex max-w-xl flex-wrap justify-center gap-2 md:m-0">
          <CardCategory
            link="/"
            Name={"Biblioteca"}
            Icon={<Icon.BookOpen size={18} />}
            idGroup={""}
          />
          <CardCategory
            link="/"
            Name={"NTI"}
            Icon={<Icon.Cpu size={18} />}
            idGroup={""}
          />
          <CardCategory
            link="/"
            Name={"manutenção"}
            Icon={<Icon.Wrench size={18} />}
            idGroup={""}
          />
          <CardCategory
            link="/"
            Name={"Infraestrutura"}
            Icon={<Icon.FileText size={18} />}
            idGroup={""}
          />
          {/* Icon false */}
          <CardCategory
            link="/"
            Name={"CRCA"}
            Icon={<Icon.User size={18} />}
            idGroup={""}
          />
          <CardCategory
            link="/"
            Name={"NAE"}
            Icon={<Icon.Users size={18} />}
            idGroup={""}
          />
        </div>
      </div>

      <div className="hidden justify-between gap-6 lg:flex ">
        <CardServices />
        <CardTicketSummary />
        <CardServices />
        <CardTicketSummary />
      </div>
      <div className="m-4 mx-auto hidden w-auto items-center gap-4 lg:mx-5 lg:grid lg:grid-cols-2 tv:mx-auto tv:max-w-[75rem]">
        <CardHomeMobile />
        <CardGroups />
      </div>
    </div>
  );
}

export default HomeScreen;
