interface FormikBaseProps {
  validateOnMount: boolean;
  initialValues: object;
  validationSchema: object;
  values: object;
  token: string;
  inputs: ReactNode;
}

export function FormikBase(props: FormikBaseProps) {
  return (
    <></>
    //   <Formik
    //     validateOnMount={true}
    //     initialValues={ }
    //     validationSchema={ }
    //     onSubmit={(props.values, actions, props.token) => {
    //       setTimeout(() => {
    //         console.log("submit:", values);

    //         if (token !== null) {
    //           props.handleSubmit

    //           successMessage("Serviço criado com sucesso!");

    //           actions.resetForm();
    //         } else {
    //           errorMessage("Algo deu errado. Tente novamente.")
    //         }

    //       }, 400);
    //     }}
    //   >
    // {({ isSubmitting, isValid, errors, touched })=> (
    //       <Form autoComplete="on">
    //     {props.inputs}
    //     <div className="flex justify-end gap-x-3.5 mr-14 mt-10">
    // 										<Button
    // 											isLoading={isSubmitting}
    // 											title={"Criar"}
    // 											theme="primaryAction"
    // 											type="submit"
    // 											disabled={isSubmitting || !isValid}
    // 										/>
    // 										<Button title="Cancelar" theme="secondaryAction" type="button" isLoading={false} />
    // 									</div>
    //         </Form>
    //     )}
    //   </Formik>
  );
}
