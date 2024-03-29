import {render, screen, userEvent, debug} from "@testing-library/react"
import  CreateServiceOrder  from "../../../pages/servicebook/serviceorder/[serviceOrderId]/createserviceorder/"
import { updateJsxText } from "typescript";
import mockAxios from "jest-mock-axios";
import { mocked } from "jest-mock";
import { getService } from "../../../Utils/server/getInfo";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";


var axiosMock = new MockAdapter(axios)

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

      // axios.get = jest.fn()

jest.mock("../../../Utils/server/getInfo")
  

describe("card de ordem de serviço", () => {
 
  afterEach(() => {
    mockAxios.reset();
  });




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
  
  test("ver se o card renderiza o formulário", async () => {
    const {debug} = render(
      <CreateServiceOrder/>
      
      )
      
    const getServiceMocked = jest.mocked(getService)
    
    const obj = {
      id: "55901ad6-15e3-4e90-96c3-91e9307ffe0f",
      description: "Acessar perfil.ufal.br, ",
      title: "Criar email institucional",
      definition: "Etapas para criação do email institucional",
      serviceSubGroupId: "446ba367-8c8e-4f11-b920-413ef6e9e836",
      personType: "{Discente,Docente}",
      waitingTime: null,
      deadline: null,
      openningHours: null,
      isPrioritaryService: false,
      serviceLocation: null,
      requiredDocuments: null,
      contactInfo: null,
      isPatromonyIdRequired: false,
      glpiSla: null,
      createdAt: "2023-02-23T13:32:49.880Z",
      updatedAt: "2023-02-23T13:32:49.880Z"
    };

axiosMock.onGet().reply(200, obj)
    // mockAxios.get.mockResolvedValueOnce(obj)

    const token = localStorage.getItem("token");
    const response = await getService("09c9fbee-2cb7-4a50-a7f7-9d0f3f01bca2", token as string)
    // expect(mockAxios.get).toHaveBeenCalledWith("09c9fbee-2cb7-4a50-a7f7-9d0f3f01bca2", token as string)
    // expect(response).toEqual(obj)


    //   (getServiceMocked as jest.Mock).mockedResolvedValueOnce(
    //  obj)
    
const title = await getService("09c9fbee-2cb7-4a50-a7f7-9d0f3f01bca2", token as string)
    
    const InputTitle = screen.queryByLabelText("Título")
    
    debug()
    expect(title).toBeCalled()
  })
})