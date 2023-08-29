import * as Icon from "@/components/icons";

import { Button } from "../Buttons/Button";
import { CardLine } from "./CardLine";
import { CardTitle } from "./CardTitle";

export function CardTest() {
  return (
    <div className="absolute h-screen w-full bg-gray-900">
      <div className="mx-4">
        <div
          className="mx-auto mb-80 mt-18 flex h-auto max-w-2xl
          flex-col rounded-lg bg-white-ice pb-9 shadow-card lg:block
          lg:w-202 lg:max-w-card"
        >
          <div className="pl-9 pt-8">
            <CardTitle title="Testes" />
          </div>
          <div className="mx-9 mb-10 mt-4">
            <CardLine />
          </div>

          <div className="mr-14 mt-10 flex justify-end gap-x-3.5">
            <Button theme="primary" isLoading={false}>
              <Icon.PhoneOutgoing size={24} />
            </Button>
            <Button theme="primary">
              Abrir chamado
              <Icon.PhoneOutgoing size={24} />
            </Button>
            <Button theme="secondary">
              <Icon.PhoneOutgoing size={24} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
