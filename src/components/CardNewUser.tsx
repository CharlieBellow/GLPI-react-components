import { Button } from './Button';
import { CardTitle } from './CardTitle';
import { CardLine } from './CardLine';
import { CardLabelInput } from "./CardLabelInput";

function CardNewUser() {
  return (
    <div className="font-roboto mt-[4.5rem] mb-80 container w-[50.5rem] h-[24rem] mx-auto bg-branco-gelo rounded-lg shadow-sombra-card">
      <div className="pl-9 pt-8">
				<CardTitle title="Criar Usuário" />
			</div>
      <div className="mx-9 mt-4 mb-10">
				<CardLine />	
			</div>
      <form action="">
        <div className='flex justify-center gap-x-[3.25rem]'>
          <CardLabelInput
						label="Nome Completo"
            type="text"
						inputId="name"
						width="w-80"
					/>
          <CardLabelInput
						label="E-mail"
            type="email"
						inputId="email"
						width="w-80"
					/>
        </div>
        <div className='mt-9 flex justify-center gap-x-[3.25rem]'>
          <CardLabelInput
						label="Senha"
            type="password"
						inputId="password"
						width="w-80"
					/>
          <CardLabelInput
						label="Confirmar Senha"
            type="password"
						inputId="cpassword"
						width="w-80"
					/>
        </div>
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
      </form>
    </div>
  )
}

export default CardNewUser;