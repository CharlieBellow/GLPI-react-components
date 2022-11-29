import CardHomeMobile from "./CardHomeMobile";
import CategoriaHomeMobile from "./CategoriaHomeMobile";
import {BookOpen, Cpu, FileText, List, Question, User, Users, Wrench,} from "phosphor-react";
import Search from "./Search";
import ChamadosHome from "./ChamadosHome";
import TicketsHome from "./TicketsHome";
import { Link } from 'react-router-dom';

function ScreenHomeMobile(){
    return(
        <div className="w-full h-screen">
            <div className="lg:hidden">
                <div className=" flex flex-col mx-2 gap-6 items-center">
                        <CardHomeMobile />
                        <Search placeholder={"O que está procurando?"} />
                </div>
                
                <h1 className="font-semibold text-base my-6 ml-8">Categorias</h1>
                
                <div className="mx-auto flex flex-wrap gap-2 max-w-xl justify-center">

                    <CategoriaHomeMobile Name={"Biblioteca"} Icon={<BookOpen  size={18}/>} />
                    <CategoriaHomeMobile Name={"NTI"} Icon={<Cpu  size={18}/>} />
                    <CategoriaHomeMobile Name={"manutenção"} Icon={<Wrench size={18}/>} />
                    <CategoriaHomeMobile Name={"Infraestrutura"} Icon={<FileText size={18}/>} />
                    {/* Icon false */}
                    <CategoriaHomeMobile Name={"CRCA"} Icon={<User size={18}/>} />
                    <CategoriaHomeMobile Name={"NAE"} Icon={<Users size={18}/>} />
                </div>
            </div>

            <div className="w-full hidden lg:flex lg:flex-col justify-center items-center h-screen gap-10">
                <div className="flex gap-11 w-[61.5rem]">
                    <CardHomeMobile />
                    <div className="bg-white-ice w-[21.25rem] h-[18.75rem] pt-4 px-6 rounded-lg shadow-card box-border">
                        <h4 className="text-4xl mb-10 font-bold">Resumo</h4>
                        <Link to="/PageCategoriaHome">
                            <CategoriaHomeMobile Name={"Biblioteca"} Icon={<BookOpen  size={27}/>} />
                        </Link>
                    </div>
                </div>
                
                <div className="flex gap-11 w-[61.5rem]">
                    <div className="bg-white-ice w-[30rem] h-[14.25rem] pt-4 px-6 rounded-lg shadow-card box-border">                        
                        <h4 className="text-2xl mb-4 font-bold">chamados</h4>
                        <div>
                            <ChamadosHome url={"https://www.github.com/charliebellow.png"} nome={"Felipe Padilha"} area={"Administração"} data={"15/08"} />
                            <ChamadosHome url={"https://www.github.com/charliebellow.png"} nome={"Caarlos Eduardo"} area={"GTI"} data={"15/08"} />
                            <ChamadosHome url={"https://www.github.com/charliebellow.png"} nome={"Patrick Passos"} area={"Redes"} data={"15/08"} />
                            <ChamadosHome url={"https://www.github.com/charliebellow.png"} nome={"Nome Completo"} area={"Redes"} data={"15/08"} />
                        </div>
                    </div>
                    <div className="bg-white-ice w-[30rem] h-[14.25rem] pt-4 px-6 rounded-lg shadow-card box-border">                        
                        <h4 className="text-2xl mb-4 font-bold">Resumo de Tickets</h4>
                        <div>
                            <TicketsHome icon={<Users size={18}/>} situacao={"Meus"} numeros={407} data={"15/08"} />
                            <TicketsHome icon={<Users size={18}/>} situacao={"Não atendidos"} numeros={36} data={"15/08"} />
                            <TicketsHome icon={<Users size={18}/>} situacao={"Pausados"} numeros={1} data={"15/08"} />
                            <TicketsHome icon={<Users size={18}/>} situacao={"Vencidos"} numeros={13} data={"15/08"} />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ScreenHomeMobile;

// ver pq não funciona no ds