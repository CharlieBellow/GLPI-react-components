import { Button } from './Button';
import { CardTitle } from './CardTitle';
import { CardLine } from './CardLine';
import { CardLabelInput } from "./CardLabelInput";

function CardUserInfo() {
  return (
    <div className='mx-4'>
      <div
				className="mt-18 mx-auto mb-80 flex flex-col lg:block
				bg-white-ice pb-9 rounded-lg max-w-2xl lg:max-w-card lg:w-202
				h-auto shadow-card"
			>
        <div className="pl-9 pt-8">
				  <CardTitle title="Informações do Perfil" />
			  </div>
				<div className="mx-9 mt-4 mb-10">
		 			<CardLine />	
		 		</div>
        <form action="" className='flex flex-col gap-9 mx-14'>
          <div className='flex flex-col lg:flex-row justify-center lg:gap-x-13 gap-9'>
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
          <div className='flex flex-col lg:flex-row justify-center lg:gap-x-13 gap-9'>
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
            theme='primaryAction'
          />
          <Button
            title="Cancelar"
            theme='secondaryAction'
          />
		   	</div>
      </div>
    </div>
  )
}

export default CardUserInfo;