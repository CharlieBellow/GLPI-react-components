import {
  useFormik,
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
} from 'formik';

import { Button } from './Button';
import { CardTitle } from './CardTitle';
import { CardLine } from './CardLine';
import { CardLabelInput } from "./CardLabelInput";

interface FormValues {
  name: string;
  email: string;
}

export function CardTest() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className='bg-gray-900 w-full absolute h-screen'>
      <div className='mx-4'>
        <div
          className="mt-[4.5rem] mx-auto mb-80 flex flex-col lg:block
          bg-white-ice pb-9 rounded-lg max-w-2xl lg:max-w-[50.5rem] lg:w-[50.5rem]
          h-auto shadow-card"
        >
          <div className="pl-9 pt-8">
            <CardTitle title="Testando Formik" />
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
    </div>
  )
}
