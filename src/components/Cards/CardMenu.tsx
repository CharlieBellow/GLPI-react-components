import { Bell, UserPlus, Question, List } from "phosphor-react";
import { useState, useContext, useEffect } from "react";
import SidebarContext from "../Sidebar/SidebarContext";
import Image from "next/image"
import Search from "../../components/Inputs/Search";
import Link from "next/link";
interface CardMenuProps extends React.HTMLAttributes<HTMLElement> {
	pagetitle: string;
}
function CardMenu(props: CardMenuProps){
    const { openMenu, open } = useContext(SidebarContext);
    const [title, setTitle] = useState("");
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        if(document.readyState !== "complete") return;
        if(document.readyState === "complete"){
            setTimeout(() => {
                setLoaded(true)
            }, 300);
            
        }
      }, [])
    useEffect(() => {
        setTitle(document.title);
        setLoaded(false)
      }, [loaded])

    return(
        <div className={`${open ? "ml-[20rem] lg:ml-0" : "ml-0"} w-full bg-gradient text-white-100 h-[10rem] p-6 lg:rounded-none lg:text-white relative z-0 lg:pt-16 ease-in-out duration-300`}>
            <div className=" relative flex justify-center -top-36 ">
                {/* ⠀⠀⠀⠀⠀⠀⠀⠀⠀ */}
            <Image src="/images/ufal-sigla-branca-fundo-transparente-40por-cento.png" width={300} height={0} alt="logo" className=" lg:box-content  ml-35 absolute " />
            </div>
            {/* <div className="bg-ufalBackground lg:box-content lg:w-[24rem] right-[29vw] -mt-[10rem] bg-cover h-64 absolute"></div> */}
            <div className="flex flex-row justify-between items-center">
                <div  className="flex flex-row items-center gap-4 w-[15rem]">
                    <List data-testid="butao" size={32} onClick={() => openMenu()} className="cursor-pointer z-10"/>
                    <h3 className="hidden text-white lg:block"></h3>
                </div>
                <div className="hidden justify-self-center lg:block">
                    <Search
                        theme="outline-gray"
                        placeholder="o que você está buscando?"
                        />
            <div className="relative">
                        </div>
                </div>
                <div className="flex row items-center text-sm">
					<div className="lg:flex ml-6 mr-7 border-r-2 pr-6 hidden">
						<div className="pr-6">
							<Bell size={24} />
						</div>
						<div className="">
							<UserPlus size={24} />
						</div>
					</div>
					<div className="flex items-center relative">
						<div className="lg:flex flex-col pr-3 items-end hidden">
							<p className="text-blue-ufal no-underline hover:opacity-70">
								<Link href="/user/info">Nome Completo</Link>
							</p>
							<span>email@email.com</span>
						</div>
						<div className="lg:w-11 lg:h-11 flex">
							<div className="lg:mt-0 mt-[-70px] lg:pt-0 lg:ml-0 flex flex-row items-center pt-16">
								<div className="lg:hidden top-4 pr-6">
									<Question size={24} weight="bold" />
								</div>
								<div className="flex-1 flex">
									<Link href="/user/info">
										<Image
											src="https://www.github.com/charliebellow.png"
											alt="favicon"
                                            className=" lg:w-11 lg:h-11 w-8 h-8 rounded-full lg:relative top-0 lg:right-0 lg:top-0"
                                            width={176}
                                            height={176}  
											/>
									</Link>
								</div>
							</div>
						</div>
                    </div>
                </div>
            </div>
        </div>
    )   
}
export default CardMenu;