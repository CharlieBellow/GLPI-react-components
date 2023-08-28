import { ReactNode, useState } from "react";

import { CardGeneric } from "@/components/Cards/CardGeneric";
import * as Icon from "@/components/icons";

type InfoServiceSeparatorProps = {
  icon: Icon.IconProps;
  title: string;
  content: string | ReactNode;
  expandable?: boolean;
}

function InfoServiceSeparator({icon, title, content, expandable = false}: InfoServiceSeparatorProps) {
  const [open, setOpen] = useState<boolean>(false);

  function openInfo() {
    setOpen(!open);
  }
  return (
    <div className="mx-4 flex flex-col text-tertiary-2">
      <div className="flex flex-row items-center justify-between gap-4">
        <div className="flex flex-col items-start gap-2">
          <div className="flex ">
            <>{icon}</>
            <h3 className="text-base font-medium lg:text-lg">{title}</h3>
          </div>
        </div>
        {expandable && (
          <div
            className={`rounded-full p-2 hover:bg-gray-medium ${
              open ? "-rotate-180" : ""
            } ease=in-out cursor-pointer duration-200`}
            onClick={openInfo}
          >
            <Icon.CaretUp size={26} weight="bold" />
          </div>
        )}
      </div>
      {expandable ? (
          open && (
              <div className="m-2 pl-4 font-medium lg:text-xl">
            <div className="flex flex-row pl-4 font-medium">
              {content}
            </div>
          </div>
        )
        ) : (
            <div className="m-2 pl-4 font-medium">{content}</div>
            )}
            <CardGeneric.Separator className="my-1" />
    </div>
  );
}
export default InfoServiceSeparator;
