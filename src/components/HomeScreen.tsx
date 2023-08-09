import CardCategory from "@/components/CardGroup";
import CardGroups from "@/components/Cards/CardGroups";
import CardHomeMobile from "@/components/Cards/CardHomeMobile";
import CardServices from "@/components/Cards/CardServices";
import CardTicketSummary from "@/components/Cards/CardTicketSummary";
import {
  BookOpen,
  Cpu,
  FileText,
  User,
  Users,
  Wrench,
} from "@/components/icons";
import Search from "@/components/Inputs/Search";

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
          <CardCategory href="/" label="Biblioteca" icon={BookOpen} />
          <CardCategory href="/" label="NTI" icon={Cpu} />
          <CardCategory href="/" label="manutenção" icon={Wrench} />
          <CardCategory href="/" label="Infraestrutura" icon={FileText} />
          <CardCategory href="/" label="CRCA" icon={User} />
          <CardCategory href="/" label="NAE" icon={Users} />
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
