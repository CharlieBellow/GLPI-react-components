
import * as Icon from 'phosphor-react';

interface InfosServiceItemProps {
	icon?: Icon.IconProps;
	infos: Object,
}


export default function InfoServiceItem ( props: InfosServiceItemProps ) {
  
  console.log(props.infos.title);

	return (
    <>
					<div className="mt-9 mx-4" key={props.infos.title}>
						<div className="flex gap-2 flex-col">
							<>{props.infos.icon}</>
          <h3 className="lg:text-3xl text-base font-semibold">Descrição</h3>
          <p>{ props.infos.description }</p>
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
        <div className="flex gap-2 flex-col">
          <>{ props.infos.icon }</>
          <h3 className="lg:text-3xl text-base font-semibold">Definição</h3>
          <p>{ props.infos.definition }</p>
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

        <div className="flex gap-2 flex-row items-center">
          <><Icon.Target size={36}/></>
          <h3 className="lg:text-3xl text-base font-semibold">Público-Alvo</h3>
          {/* pega esses tipos e faz um if else pra exibir os ícones corretamente */}
          <p>{ props.infos.personType }</p>
        </div>
        <div className="flex gap-2 flex-col">
          <>{ props.infos.icon }</>
          <h3 className="lg:text-3xl text-base font-semibold">Tempo de Espera</h3>
          <p>{ props.infos.waitingTime }</p>
        </div>
        <div className="flex gap-2 flex-col">
          <>{ props.infos.icon }</>
          <h3 className="lg:text-3xl text-base font-semibold">Tempo necessário para execução</h3>
          <p>{ props.infos.deadline }</p>
        </div>
        <div className="flex gap-2 flex-col">
          <>{ props.infos.icon }</>
          <h3 className="lg:text-3xl text-base font-semibold">Horário de atendimento</h3>
          <p>{ props.infos.openningHours }</p>
        </div>
        <div className="flex gap-2 flex-col">
          <>{ props.infos.icon }</>
          <h3 className="lg:text-3xl text-base font-semibold">Prioridade</h3>
          <p>{ props.infos.isPrioritaryService }</p>
        </div>
        <div className="flex gap-2 flex-col">
          <>{ props.infos.icon }</>
          <h3 className="lg:text-3xl text-base font-semibold">Documentos Necessários</h3>
          <p>{ props.infos.requiredDocuments }</p>
        </div>
        <div className="flex gap-2 flex-col">
          <>{ props.infos.icon }</>
          <h3 className="lg:text-3xl text-base font-semibold">Informações para contato</h3>
          <p>{ props.infos.contactInfo }</p>
        </div>
        <div className="flex gap-2 flex-col">
          <>{ props.infos.icon }</>
          <h3 className="lg:text-3xl text-base font-semibold">Necessita de Patrimônio?</h3>
          <p>{ props.infos.isPatromonyIdRequired ? "Sim" : "Não" }</p>
        </div>
        
					</div>
		
		</>
	);
}

