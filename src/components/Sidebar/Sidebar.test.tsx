import {render, screen, fireEvent} from "@testing-library/react"
import {ufalLogo} from "../../../public/images/ufal-sigla-branca-fundo-transparente.png"
import Sidebar from "./Sidebar"



// jest.mock("token", () => {
//   return(
//     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2ODE0NzU5NzEsImV4cCI6MTY4Mjc3MTk3MSwic3ViIjoiNmVjMmMzYWYtOTNhMi00Y2E4LWJkOTctNzZkMjFiM2Q1NGY1In0.WRrt6O1DA2u6V9wwzJHgHH6h2exGvexoHv8_nFtqmB0"
//   )
// })

jest.mock("../../../public/images/ufal-sigla-branca-fundo-transparente.png", () => {
  return {
    ufalLogo: "ufal-sigla-branca-fundo-transparente.png"
  }
})

jest.mock("next/router", () => {
  return {
    useRouter() {
      return { asPath: "/servicebook"}
    }
  }
})


describe("ver se o side bar aparece na tela", () => {
  test("ver se ele acha a bendita imagem", () => {
    render(
      <Sidebar>
      <div>teste</div>
    </Sidebar>
    )

    const testImage = document.querySelector("img") as HTMLImageElement;

    expect(testImage.alt).toContain("logo")
  })

  
  test("Se o menu adiciona a classe open quando clica no botão do menu", () => {
    render(
      <Sidebar>
        <div>teste</div>
      </Sidebar>
  
    )


    const button = screen.getByTestId("butao")
    const sidebar = screen.getByTestId("test") as HTMLImageElement;
  
    fireEvent.click(button)
    
    expect(sidebar).toHaveClass("fixed")
 
  
  
  })
  
  // para fazer esse text eu preciso verificar se a função openmenu() está sendo chamada.
  
  // test("Se o menu adiciona a classe open quando clica no botão do menu", () => {
  //   const {getByText} = render(
  //     <Sidebar>
  //       <div>teste</div>
  //     </Sidebar>
  
  //   )
    
  //   const sidebar = document.querySelector("test") as HTMLImageElement;
  // expect(sidebar).toHaveClass("fixed")
  
  })
// })
