import {CardGeneric} from "@/components/Cards/CardGeneric"

import ServicesHome from "../ServicesComponent/ServicesHome";

export default function CardServices() {
  return (
    <CardGeneric.Root>
      
        <CardGeneric.Separator />
      <CardGeneric.Content>

      <div className="pt-2">
        <ServicesHome
          url="https://www.github.com/charliebellow.png"
          nome="Felipe Padilha"
          area="Administração"
          data="15/08"
        />
        <ServicesHome
          url="https://www.github.com/charliebellow.png"
          nome="Carlos Eduardo"
          area="GTI"
          data="15/08"
        />
        <ServicesHome
          url="https://www.github.com/charliebellow.png"
          nome="Patrick Passos"
          area="Redes"
          data="15/08"
          />
        <ServicesHome
          url="https://www.github.com/charliebellow.png"
          nome="Nome Completo"
          area="Redes"
          data="15/08"
          />
      </div>
          </CardGeneric.Content>
    </CardGeneric.Root>
  );
}
