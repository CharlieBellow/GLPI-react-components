import Link from "next/link";

import CardGroup from "@/components/CardGroup";
import { BookOpen } from "@/components/icons";

export default function CardGroups() {
  return (
    <>
      <div className="box-border h-auto w-auto rounded-lg bg-white-ice p-4 shadow-card">
        <h4 className="mb-8 text-4xl font-bold">Grupos</h4>
        <div className="grid grid-cols-2">
          <CardGroup href="/servicebook" label="Biblioteca" icon={BookOpen} />
          <div className="hover:cursor-pointer hover:text-blue-ufal-hover">
            <Link href="/servicebook/myservices">Meus Serviços</Link>
          </div>
          <div className="grid grid-cols-2 gap-3" />
        </div>
      </div>
    </>
  );
}
