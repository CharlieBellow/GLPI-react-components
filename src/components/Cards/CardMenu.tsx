import { Bell, UserPlus, Question, List, X } from "phosphor-react";
import { useState, useContext, useEffect } from "react";
import SidebarContext from "../Sidebar/SidebarContext";
import Image from "next/image"
import Search from "../../components/Inputs/Search";
import Link from "next/link";
import ufalLogo from "../../../public/images/ufal-sigla-branca-fundo-transparente-40por-cento.png"
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
        <div className={`${open ? "ml-[20rem] lg:ml-0" : "ml-0"} lg:text-white h-[10rem] w-full rounded-b-lg bg-gradient p-6 text-white-100   duration-300 ease-in-out lg:rounded-bl-none  lg:rounded-br-lg lg:pt-16 `}>
            <div className=" relative z-10  hidden justify-center lg:flex ">
                
            <Image src={ufalLogo} width={350} height={300} alt="logo" className="  absolute  -top-36 z-10 bg-cover  " priority={true}/>
            </div>
            {/* <div className="bg-ufalBackground lg:box-content lg:w-[24rem] right-[29vw] -mt-[10rem] bg-cover h-64 absolute"></div> */}
            <div className="flex flex-row items-center justify-between">
                <div  className="flex w-[15rem] flex-row items-center gap-4">
                    {open ? (<X data-testid="butao" size={32} onClick={() => openMenu()} className={`z-10 cursor-pointer`}/>) : 
                    (<List data-testid="butao" size={32} onClick={() => openMenu()} className="z-10 cursor-pointer"/>)
                    }
                    <h3 className="text-white hidden lg:block" />
                </div>
                <div className="hidden justify-self-center lg:block">
                    <Search
                        theme="outline-gray"
                        placeholder="o que você está buscando?"
                        />
            <div className="relative" />
                </div>
                <div className="row flex items-center text-sm">
					<div className="ml-6 mr-7 hidden border-r-2 pr-6 lg:flex">
						<div className="pr-6">
							<Bell size={24} />
						</div>
						<div className="">
							<UserPlus size={24} />
						</div>
					</div>
					<div className="relative flex items-center">
						<div className="hidden flex-col items-end pr-3 lg:flex">
							<p className="text-blue-ufal no-underline hover:opacity-70">
								<Link href="/user/info">Nome Completo</Link>
							</p>
							<span>email@email.com</span>
						</div>
						<div className="flex lg:h-11 lg:w-11">
							<div className="mt-[-70px] flex flex-row items-center pt-16 lg:ml-0 lg:mt-0 lg:pt-0">
								<div className="top-4 pr-6 lg:hidden">
									<Question size={24} weight="bold" />
								</div>
								<div className="flex flex-1">
									<Link href="/user/info">
										<Image
											src="https://www.github.com/charliebellow.png"
											alt="favicon"
                                            className=" top-0 h-8 w-8 rounded-full lg:relative lg:right-0 lg:top-0 lg:h-11 lg:w-11"
                                            width={176}
                                            height={176}  
                                            priority={true}
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