
//import { Icon, Target } from "phosphor-react";
import * as Icon from 'phosphor-react'

interface InfoServiceItemProps {
	icon?: Icon.IconProps;
	infos: Array<any>
}


// estilizar o acordeon
export function InfoServiceItem(props: InfoServiceItemProps) {
	//const altura =  height <= 70rem ? showButton : hideButton
	return (
		<>
			{props.infos.map(info => {
				return (
					<div className="mt-9 mx-4" key={info.title}>
						<div className="flex gap-2 items-center">
							<>{info.icon}</>
							<h3 className="lg:text-3xl text-base font-semibold">{info.title}</h3>
						</div>
						<input
							type="checkbox"
							name="moreText"
							id={info.title}
							className="hidden"
						/>
						<div className="toggleCheck mt-3">
							<p className="check">{info.description}</p>

							<label htmlFor={info.title} className="label ">
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
				);
	})}
		</>
	);
}

