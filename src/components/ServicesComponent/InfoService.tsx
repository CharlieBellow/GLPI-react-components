
//import { Icon, Target } from "phosphor-react";
import * as Icon from 'phosphor-react'

interface InfosServiceItemProps {
	icon?: Icon.IconProps;
	infos: Object,
}


// estilizar o acordeon
export default function InfoServiceItem ( props: InfoServiceItemProps ) {
  
  console.log(props.infos);
  
	//const altura =  height <= 70rem ? showButton : hideButton
	return (
    <>
    {/*{props.infos.map(info => {*/}
				{/*return (*/}
					<div className="mt-9 mx-4" key={props.infos.title}>
						<div className="flex gap-2 items-center">
							<>{props.infos.icon}</>
							<h3 className="lg:text-3xl text-base font-semibold">{props.infos.title}</h3>
						</div>
						<input
							type="checkbox"
							name="moreText"
							id={props.infos.title}
							className="hidden"
						/>
						<div className="toggleCheck mt-3">
							<p className="check">{props.infos.description}</p>

							<label htmlFor={props.infos.title} className="label ">
								<div className="text-end text-blue-ufal  underline pt-1">
									<strong className="show hover:opacity-70">
										...Mostrar mais
									</strong>
									<strong className="noShow hover:opacity-70">
										Mostrar menos
									</strong>
									<div className="border-b-2 border-gray-text"></div>
								</div>
							</label>
						</div>
					</div>
				{/*);*/}
        {/*})}*/}
		</>
	);
}

