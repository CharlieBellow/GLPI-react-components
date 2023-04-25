import {render, screen, userEvent, debug} from "@testing-library/react"
import  CreateServiceOrder  from "../../../pages/servicebook/serviceorder/[serviceOrderId]/createserviceorder/"
import { getService } from "../../../Utils/server/getInfo"
import { updateJsxText } from "typescript"
import axios from "axios";
import {mocked} from "ts-jest/utils"

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

jest.mock("axios")
  

describe("card de ordem de serviço", () => {
 



  test("ver se o card aparece", () => {
    const {debug} = render(
      <CreateServiceOrder/>
    
    )

    const testTitle = screen.getByTitle("Criar ordem de serviço");

    expect(testTitle).toBeInTheDocument()


  })

  beforeEach(() => {
   
    const fetchData = async () => {
  
      const token = localStorage.getItem("token");
      const response = await getService("09c9fbee-2cb7-4a50-a7f7-9d0f3f01bca2", token as string)
      const setServiceInfo = response
      
      
    }
    return fetchData()
  }, 10000)
  
  test("ver se o card renderiza o formulário", () => {
    const {debug} = render(
      <CreateServiceOrder/>
      
      )
      
    
    const axiosmocked = mocked(axios)

    axiosmocked.mockResolvedValueOnce({
      method: 'get',
      baseURL: "http://172.27.12.171:3333",
      url: `/servicebook/group/09c9fbee-2cb7-4a50-a7f7-9d0f3f01bca2`,
    })

    const InputTitle = screen.queryByLabelText("Título")
    
    debug()
    expect(InputTitle).toBeInTheDocument()
  })
})