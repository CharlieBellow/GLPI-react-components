import { Button } from './Button';
import { CardTitle } from './CardTitle';
import { CardLine } from './CardLine';
import { CardLabelInput } from "./CardLabelInput";

function CardNewUser() {
  return (
    <div className='mx-4'>
      <div
				className="font-sans mt-[4.5rem] mx-auto mb-80 flex flex-col lg:block
				bg-branco-gelo pb-9 rounded-lg max-w-2xl lg:max-w-[50.5rem] lg:w-[50.5rem]
				h-auto shadow-sombra-card"
			>
        <div className="pl-9 pt-8">
				  <CardTitle title="Criar Usuário" />
			  </div>
				<div className="mx-9 mt-4 mb-10">
		 			<CardLine />	
		 		</div>
        <form action="" className='flex flex-col gap-9 mx-14'>
          <div className='flex flex-col lg:flex-row justify-center lg:gap-x-[3.25rem] gap-9'>
            <CardLabelInput
		   				label="Nome Completo"
              type="text"
		   				inputId="name"
              width="lg:w-80 w-full"
		   			/>
            <CardLabelInput
		   				label="E-mail"
              type="email"
		   				inputId="email"
		   				width="lg:w-80 w-full"
		   			/>
          </div>
          <div className='flex flex-col lg:flex-row justify-center lg:gap-x-[3.25rem] gap-9'>
            <CardLabelInput
		   				label="Senha"
              type="password"
		   				inputId="password"
		   				width="lg:w-80 w-full"
		   			/>
            <CardLabelInput
		   				label="Confirmar Senha"
              type="password"
		   				inputId="cpassword"
		   				width="lg:w-80 w-full"
		   			/>
          </div>
        </form>  
        <div className="flex justify-end gap-x-3.5 mr-14 mt-10">
          <Button
            title="Salvar"
            style={`btn-primary-action`}
          />
          <Button
            title="Cancelar"
            style={`btn-secondary-action`}
          />
		   	</div>
      </div>
    </div>
  )
}

export default CardNewUser;