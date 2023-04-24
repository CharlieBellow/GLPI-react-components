import {render, screen, userEvent, debug} from "@testing-library/react"
import  CreateServiceOrder  from "../../../pages/servicebook/serviceorder/[serviceOrderId]/createserviceorder/"

jest.mock("next/router", () => {
  return {
    useRouter() {
      return { asPath: "servicebook/serviceorder/09c9fbee-2cb7-4a50-a7f7-9d0f3f01bca2/createserviceorder/"}
    }
  }
})

jest.mock("next/router", () => {
  return {
    useRouter() {
      return { query: {serviceOrderId: "09c9fbee-2cb7-4a50-a7f7-9d0f3f01bca2"}}
    }
  }
})





describe("card de ordem de serviço", () => {
  test("ver se o card aparece", () => {
    const {debug} = render(
      <CreateServiceOrder/>
    
    )

    const testTitle = screen.getByTitle("Criar ordem de serviço");

    expect(testTitle).toBeInTheDocument()


  })

  test("ver se o card renderiza o formulário", () => {
    const {debug} = render(
      <CreateServiceOrder/>
    
    )

    
    const InputTitle = screen.findByLabelText("Título")
    
    debug()
    expect(InputTitle).toBeInTheDocument()
  })
})