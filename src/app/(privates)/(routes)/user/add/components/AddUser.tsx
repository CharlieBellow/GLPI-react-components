import { yupResolver } from "@hookform/resolvers/yup";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { styled } from "@stitches/react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import { CardGeneric } from "@/components/Cards/CardGeneric";
import { Button, Input } from "@/components/ui";

import { useMessage } from "@/hooks";

import { postUser } from "@/Utils/server/postInfo";

import { validationSchema } from "../../../../../../Utils/validations";

const TabsTrigger = styled(TabsPrimitive.Trigger, {
  '&[data-state="active"]': {
    fontWeight: "bold",
    color: "#0095DA",
    border: "none",
    boxShadow: "0 3px 0 0 currentColor",
  },
});

const tab = `bg-white-ice shadow-tab py-0 px-5 h-11 flex-1 flex items-center justify-center
text-base text-light-bg select-none border-2 border-b border-gray-medium rounded-t-lg
hover:text-blue-ufal hover:cursor-pointer focus:relative`;

//function handleBlur (ev) {

//};

// const validate = yup.object().shape({
//   fullName: validationSchema.fullName,
//   cpf: validationSchema.cpf,
//   email: validationSchema.email,
//   nMatricula: validationSchema.nMatricula,
//   bond: validationSchema.bond,
//   campus: validationSchema.campus,
//   gender: validationSchema.gender,
//   address: validationSchema.address,
//   complement: validationSchema.complement,
//   district: validationSchema.district,
//   city: validationSchema.city,
//   uf: validationSchema.uf,
//   cep: validationSchema.cep,
//   bank: validationSchema.bank,
//   acountType: validationSchema.acountType,
//   account: validationSchema.account,
//   agency: validationSchema.agency,
// });

const formSchema = yup.object().shape({
  fullName: validationSchema.fullName,
  cpf: validationSchema.cpf,
  email: validationSchema.email,
  nMatricula: validationSchema.nMatricula,
  bond: validationSchema.bond,
  campus: validationSchema.campus,
  gender: validationSchema.gender,
  address: validationSchema.address,
  complement: validationSchema.complement,
  district: validationSchema.district,
  city: validationSchema.city,
  uf: validationSchema.uf,
  cep: validationSchema.cep,
  bank: validationSchema.bank,
  acountType: validationSchema.acountType,
  account: validationSchema.account,
  agency: validationSchema.agency,
});

type FormValues = yup.InferType<typeof formSchema>;

export function AddUser() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    defaultValues: {
      fullName: "",
      cpf: "",
      email: "",
      nMatricula: "",
      bond: "",
      campus: "",
      gender: "",
      address: "",
      complement: "",
      district: "",
      city: "",
      uf: "",
      cep: "",
      bank: "",
      acountType: "",
      account: "",
      agency: "",
    },
    resolver: yupResolver(formSchema),
  });

  const { successMessage } = useMessage();

  const onSubmit = async (values: FormValues) => {
    await postUser({ ...values, redirect: false }).then(() => {
      successMessage("Perfil adicionado com sucesso.");
    });
  };
  <div className="mx-4">
    <CardGeneric.Root>
      <CardGeneric.Content>
        <TabsPrimitive.Root defaultValue="tab1">
          <CardGeneric.Header>
            <CardGeneric.Title>Adicionar Usuário</CardGeneric.Title>
          </CardGeneric.Header>
          <CardGeneric.Separator />

          <TabsPrimitive.List
            className="mx-14 mb-10 flex shrink-0 flex-col gap-2
              border-b border-b-gray-medium lg:mx-15 lg:flex-row lg:gap-0"
          >
            <TabsTrigger className={tab} value="tab1">
              Informações pessoais
            </TabsTrigger>
            <TabsTrigger className={tab} value="tab2">
              Endereço
            </TabsTrigger>
            <TabsTrigger className={tab} value="tab3">
              Dados Bancários
            </TabsTrigger>
          </TabsPrimitive.List>
          <form
            className="mx-14 flex flex-col gap-9"
            onSubmit={handleSubmit(onSubmit)}
          >
            <TabsPrimitive.Content className="outline-none" value="tab1">
              <div className="flex flex-col gap-9">
                <div className="w-auto">
                  <Input
                    {...register("fullName")}
                    label="Nome Completo"
                    type="text"
                    errorMessage={errors.fullName?.message}
                  />
                </div>
                <div className=" flex flex-col justify-center gap-9 lg:flex-row lg:gap-x-13">
                  <div>
                    <Input
                      {...register("cpf")}
                      label="CPF"
                      type="number"
                      errorMessage={errors.email?.message}
                    />
                  </div>
                  <div>
                    <Input
                      {...register("email")}
                      label="E-mail"
                      type="email"
                      errorMessage={errors.email?.message}
                    />
                  </div>
                </div>

                <div className="flex flex-col justify-center gap-9 lg:flex-row lg:gap-x-13">
                  <div>
                    <Input
                      {...register("nMatricula")}
                      label="N° de matrícula"
                      type="number"
                      errorMessage={errors.nMatricula?.message}
                    />
                  </div>
                  <div className="text-sm text-red-ufal lg:w-80">
                    {/* <FieldSelect
                          label="Vínculo"
                          name="bond"
                          default="Selecione o vínculo"
                          listitems={bondList}
                        /> */}
                  </div>
                </div>
                <div className="flex flex-col justify-center gap-9 lg:flex-row lg:gap-x-13">
                  <div className="lg:w-80">
                    {/* <FieldSelect
                          label="Campus"
                          name="campus"
                          default="Selecione seu campus"
                          listitems={campusList}
                        /> */}
                  </div>
                  <div className="lg:w-80">
                    {/* <FieldSelect
                          label="Gênero"
                          name="gender"
                          default="Selecione seu gênero"
                          listitems={genderList}
                        /> */}
                  </div>
                </div>
              </div>
            </TabsPrimitive.Content>

            <TabsPrimitive.Content className="outline-none" value="tab2">
              <div className="flex flex-col gap-9">
                <div className="flex flex-col justify-center gap-9 lg:flex-row lg:gap-x-13">
                  <div>
                    <Input
                      {...register("cep")}
                      label="CEP"
                      type="number"
                      onChange={(e: any) => console.log(e.target.value)}
                      errorMessage={errors.cep?.message}
                    />
                    <></>
                  </div>
                  <div>
                    <Input
                      {...register("city")}
                      label="Cidade"
                      type="text"
                      errorMessage={errors.city?.message}
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-center gap-9 lg:flex-row lg:gap-x-13">
                  <div>
                    <Input {...register("uf")} label="Estado" type="text" />
                  </div>
                  <div>
                    <Input
                      {...register("district")}
                      label="Bairro"
                      type="text"
                    />
                  </div>
                </div>
                <div>
                  <Input
                    {...register("address")}
                    label="Endereço Completo com Nº"
                    type="text"
                  />
                </div>
                <div>
                  <Input
                    {...register("complement")}
                    label="Complemento"
                    type="text"
                  />
                </div>
              </div>
            </TabsPrimitive.Content>
            <TabsPrimitive.Content className="outline-none" value="tab3">
              <div className="mx-14 flex flex-col gap-9">
                <div className="flex flex-col justify-center gap-9 lg:flex-row lg:gap-x-13">
                  <div>
                    <Input {...register("bank")} label="Banco" type="number" />
                  </div>
                  <div>
                    <Input
                      {...register("acountType")}
                      label="Tipo de Conta"
                      type="number"
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-center gap-9 lg:flex-row lg:gap-x-13">
                  <div>
                    <Input
                      {...register("account")}
                      label="Conta"
                      type="number"
                    />
                  </div>
                  <div>
                    <Input
                      {...register("agency")}
                      label="Agência"
                      type="number"
                    />
                  </div>
                </div>
              </div>
              <div className="mr-14 mt-10 flex justify-end gap-x-3.5">
                <Button
                  theme="primary"
                  type="submit"
                  disabled={isSubmitting}
                  isLoading={isSubmitting}
                >
                  Adicionar
                </Button>
                <Button theme="secondary">Cancelar</Button>
              </div>
            </TabsPrimitive.Content>
          </form>
        </TabsPrimitive.Root>
      </CardGeneric.Content>
    </CardGeneric.Root>
  </div>;
}
