import {render, screen, userEvent} from "@testing-library/react"
import {ufalLogo} from "../../../public/images/;ufal-sigla-branca-fundo-transparente.png"
import Sidebar from "./Sidebar";
import Layout from "../Layout";



jest.mock("../../../public/images/ufal-sigla-branca-fundo-transparente.png", () => {
  return {
    ufalLogo: "/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fufal-sigla-branca-fundo-transparente.f78c6422.png&w=3840&q=75 1x"
  }
})

jest.mock("next/router", () => {
  return {
    useRouter() {
      return { asPath: "/Dashboard/"}
    }
  }
})

// mockar o autenticated e o layout

// jest.mock()


describe("ver se o side bar aparece na tela", () => {
  test("ver se ele acha a bendita imagem", () => {
    render(
      <Sidebar>
      {/* <div>teste</div> */}
    </Sidebar>
    )

    const testImage = screen.getByRole("img") as HTMLImageElement;

    expect(testImage).toBeInTheDocument()
  })

  
  test("Se o menu adiciona a classe open quando clica no botão do menu", () => {
    const {debug } = render(
      <Layout>
        <div>teste</div>
      </Layout>
     
  
  
    )


    const button = screen.findByTestId("butao");
    // const sidebar = screen.getByTestId("test") as HTMLImageElement;
  
    
    debug()
    expect(button).toBeInTheDocument()

    // userEvent.click(button)
    // expect(sidebar).toHaveClass("fixed")
 
  
  
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
