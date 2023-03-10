
import * as Icon from 'phosphor-react';
import { Service } from '../../Utils/server/types'
interface InfosServiceItemProps {
	icon?: Icon.IconProps;
	infos: Service,
}


export default function InfoServiceItem ( props: InfosServiceItemProps ) {
  
  console.log(props.infos.title);

	return (
    <>
      <div className="mt-9 mx-4" key={ props.infos.title }>
        <div className="flex gap-2 flex-col">
          <div className="flex gap-2">
            <><Icon.ArticleMedium size={ 26 } weight="bold" /></>
            <h3 className="lg:text-3xl text-base font-semibold">Descrição</h3>
          </div>
          <p>{ props.infos.description }</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur soluta ad inventore molestiae sunt quos delectus ratione magni odio, deserunt quam dolorem eos eaque quis illum nam blanditiis praesentium impedit. rerum cupiditate perferendis. Facere, dolore maxime! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora ab, porro velit, sunt, fugiat repudiandae quo mollitia autem nesciunt commodi adipisci vero et esse recusandae perspiciatis quas cupiditate! Esse, atque? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, exercitationem. Reiciendis inventore ut repellendus corporis, repudiandae est alias odit eius! Recusandae quia veniam voluptates ab atque incidunt alias sunt non. rerum cupiditate perferendis. Facere, dolore maxime! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora ab, porro velit, sunt, fugiat repudiandae quo mollitia autem nesciunt commodi adipisci vero et esse recusandae perspiciatis quas cupiditate! Esse, atque? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, exercitationem. Reiciendis inventore ut repellendus corporis, repudiandae est alias odit eius! Recusandae quia veniam voluptates ab atque incidunt alias sunt non. Facere, dolore maxime! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora ab, porro velit, sunt, fugiat repudiandae quo mollitia autem nesciunt commodi adipisci vero et esse recusandae perspiciatis quas cupiditate! Esse, atque? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, exercitationem. Reiciendis inventore ut repellendus corporis, repudiandae est alias odit eius! Recusandae quia veniam voluptates ab atque incidunt alias sunt non. te! Esse, atque? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, exercitationem. Reiciendis inventore ut repellendus corporis, repudiandae est alias odit eius! Recusandae quia veniam voluptates ab atque incidunt alias sunt non</p>
						</div>
						<input
							type="checkbox"
							name="moreText"
          id={ props.infos.description }
							className="hidden"
						/>
						<div className="toggleCheck mt-3">
							<p className="check">{props.infos.description}</p>

          <label htmlFor={ props.infos.description } className="label ">
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
        <div className="flex gap-2 flex-col mt-2">
          <div className="flex gap-2">

            <><Icon.ListBullets size={ 26 } weight="bold" /></>
            <h3 className="lg:text-3xl text-base font-semibold">Definição</h3>
          </div>
          <p>{ props.infos.definition }</p>
          <p> listra de definição:
            <br/>
            * uma linha<br/>
            * uma linha<br/>
            * uma linha<br/>
            * uma linha<br/>

          </p>
        </div>
        <input
          type="checkbox"
          name="moreText"
          id={ props.infos.definition }
          className="hidden"
        />
        <div className="toggleCheck mt-3">
          <p className="check">{ props.infos.definition }</p>

          <label htmlFor={ props.infos.definition } className="label ">
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

        <div className="flex gap-2 flex-col my-2 ">
           <div className="flex gap-2">
              <><Icon.Target size={ 26 } weight="bold" /></>
              <h3 className="lg:text-3xl text-base font-semibold">Público-Alvo</h3>
           </div>
          {/* pega esses tipos e faz um if else pra exibir os ícones corretamente */ }
          {/* fazer um map e renderizar cada string */}
          <p>{ props.infos.personType as string[]}</p>
          <p>Discentes, docentes e Técnicos</p>
        </div>
        <div className="border-b-2 border-gray-text"></div>
        {/*{ props.infos.waitingTime ?*/}
        {/*<>*/}
          <div className="flex gap-2 flex-col my-2">
            <div className="flex gap-2 flex-row my-2">
              <><Icon.HourglassHigh size={ 26 } weight="bold" /></>
              <h3 className="lg:text-3xl text-base font-semibold">Tempo de Espera</h3>
            </div>
            <p>{ props.infos.waitingTime as any}</p>
            <p> 24 horas</p>
          </div>
        <div className="border-b-2 border-gray-text"></div>
          {/*</>*/}
          {/*: "" }*/}
        <div className="flex gap-2 flex-col">
          <div className="flex gap-2 flex-row my-2">
          <><Icon.Watch size={ 26 } weight="bold" /></>
          <h3 className="lg:text-3xl text-base font-semibold">Tempo necessário para execução</h3>
        </div>
          <p>{ props.infos.deadline as any}</p>
          <p> 2 horas</p>
        </div>
        <div className="border-b-2 border-gray-text"></div>
        <div className="flex gap-2 flex-col">
          <div className="flex gap-2 flex-row my-2">
          <><Icon.Clock size={ 26 } weight="bold" /></>
          <h3 className="lg:text-3xl text-base font-semibold">Horário de atendimento</h3>
          </div>
          <p>{ props.infos.openningHours as any}</p>
          <p> seg a sex das 8:00 às 17:00h </p>
        </div>
        <div className="border-b-2 border-gray-text"></div>
        <div className="flex gap-2 flex-col">
          <div className="flex gap-2 flex-row my-2">
          <><Icon.BookmarkSimple size={ 26 } weight="bold" /></>
          <h3 className="lg:text-3xl text-base font-semibold">Prioridade</h3>
          </div>
          <p>{ props.infos.isPrioritaryService }</p>
          <p> Sim</p>
        </div>
        <div className="border-b-2 border-gray-text"></div>
        <div className="flex gap-2 flex-col">
          <div className="flex gap-2 flex-row my-2">
          <><Icon.FilePlus size={ 26 } weight="bold" /></>
          <h3 className="lg:text-3xl text-base font-semibold">Documentos Necessários</h3>
          </div>
          <p>{ props.infos.requiredDocuments }</p>
          <p> RG, CPF, Cpomprovante de matrícula</p>
        </div>
        <div className="border-b-2 border-gray-text"></div>
        <div className="flex gap-2 flex-col">
          <div className="flex gap-2 flex-row my-2">
          <><Icon.Phone size={ 26 } weight="bold" /></>
          <h3 className="lg:text-3xl text-base font-semibold">Informações para contato</h3>
          </div>

          <p>{ props.infos.contactInfo }</p>
          <p> (82) 3214-1001 CENTRAL TELEFÔNICA CAMPUS DE ARAPIRACA - CENTRAL TELEFÔNICA</p>
        </div>
        <div className="border-b-2 border-gray-text"></div>
        <div className="flex gap-2 flex-col">
          <div className="flex gap-2 flex-row my-2">
          <><Icon.ComputerTower size={ 26 } weight="bold" /></>
          <h3 className="lg:text-3xl text-base font-semibold">Necessita de Patrimônio?</h3>
          </div>
          <p>{ props.infos.isPatromonyIdRequired ? "Sim" : "Não" }</p>
        </div>
        <div className="border-b-2 border-gray-text"></div>

        
					</div>
		
		</>
	);
}

