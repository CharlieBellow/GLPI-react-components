"use client";
import { useEffect } from "react";

import CardCreateServiceOrder from "@/components/Cards/CardCreateServiceOrder";

// * criar ordem de serviço 'serviceorder/[id:serviceorder]/create'

function CreateServiceOrder() {
  useEffect(() => {
    const script = document.createElement("script");

    script.src =
      "https://cdn.tiny.cloud/1/3enajksx9oylqgylfxulwceq3qb751gxke444j4ld79w9rz1/tinymce/6/tinymce.min.js";

    // src.async = true;

    document.body.appendChild(script);
  });
  return <CardCreateServiceOrder params={{
    
  }} />;
}

export default CreateServiceOrder;
