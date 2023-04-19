import {render, screen } from "@testing-library/react"
import CardGroup from "./CardGroup";
import * as Icon from "phosphor-react"

/* Para testar o componente que usa algo externo a ele, precisa fazer o mok para simular essa coisa externa. */

// jest.mock("next/link", () => {
//   return (
//     <Link href="" />
//   )
// }) 

jest.mock("next/router", () => {
  return {
    useRouter() {
      return {
        asPath: "/servicebook"
      }
    }
  }
}) 

test("ver se o card redireciona para a página", () => {
  render(
    <CardGroup Name={"Teste"} Icon={<Icon.Plus size={27} />} link={"/servicebook"} idGroup={""} />
  )

  // o debug é como se fosse o console logo dos testes, mostra tudo que foi gerado na tela
  // debug()

  expect(screen.getByText('Teste')).toBeInTheDocument()
})


test("ver se o card redireciona para a página", () => {
  const { debug, getByText } = render(
    <CardGroup Name={"Teste"} Icon={<Icon.Plus size={27} />} link={"/servicebook"} idGroup={""} />
  )

  // o debug é como se fosse o console logo dos testes, mostra tudo que foi gerado na tela
  // debug()

  expect(screen.getByText('Teste')).toBeInTheDocument()
})