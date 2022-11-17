
import { Target } from "phosphor-react";


// depois fazer um map nesse componente e sair colocando todas as informações como props (titulo da informação e descrição) aí cada chamado vai ter seu objeto com as informações necessárias.a´i já atribui um ícone padrão pra cada tipo de informação

// estilizar o acordeon
export function InfoService() {
	
	return (
		<>
			<div className="  mt-3 mx-4">
				<div className="flex gap-2 items-center">
					<Target weight="bold" />
					<h3 className="text-lg font-bold">Público-Alvo</h3>
				</div>
				<input type="checkbox" name="moreText" id="moreText" className="hidden"/>
				<div className="toggleCheck ">
					<p className="check">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, quos
						assumenda id consequuntur quaerat reprehenderit fuga aliquid
						provident sapiente officia eveniet, sunt eligendi nesciunt
						voluptates repudiandae ea vel eum quam! Lorem ipsum, dolor sit amet
						consectetur adipisicing elit. Sit deleniti quia nobis dicta sed unde
						eius, illo laborum nesciunt est eveniet delectus molestiae, quas
						neque voluptatem modi harum, corrupti temporibus? Lorem ipsum dolor
						sit amet, consectetur adipisicing elit. Possimus et perspiciatis
						aliquam, obcaecati numquam illo delectus ut \afdawgewrgege\a iatis
						aliquam, obcaecati numquam illo delectus ut \afdawgewrgege\a
					</p>

					<label htmlFor="moreText" className="label ">
						<p className="text-end">
							<strong className="show">...Mostrar mais</strong>
							<strong className="noShow">Mostrar menos</strong>
							<div className="border-b-2 border-gray-text"></div>
						</p>
					</label>
				</div>
			</div>
		</>
	);
}

