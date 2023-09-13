import { Button, Heading } from "@/components/ui";

export function ErrorBoundary({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="">
      <svg
        width="54"
        height="54"
        viewBox="0 0 54 54"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.8096 8.59882L4.03359 40.0986C3.64647 40.7723 3.44164 41.5362 3.43947 42.3141C3.4373 43.0921 3.63788 43.8571 4.02123 44.5329C4.40459 45.2088 4.95737 45.772 5.62458 46.1666C6.29178 46.5611 7.05016 46.7732 7.82426 46.7818H45.3763C46.1504 46.7732 46.9087 46.5611 47.5759 46.1666C48.2431 45.772 48.7959 45.2088 49.1793 44.5329C49.5626 43.8571 49.7632 43.0921 49.761 42.3141C49.7589 41.5362 49.554 40.7723 49.1669 40.0986L30.3909 8.59882C29.9957 7.94411 29.4393 7.4028 28.7753 7.02713C28.1114 6.65146 27.3622 6.4541 26.6003 6.4541C25.8383 6.4541 25.0892 6.65146 24.4252 7.02713C23.7612 7.4028 23.2048 7.94411 22.8096 8.59882V8.59882Z"
          stroke="#333849"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M26.6016 20.0493V28.9602"
          stroke="#333849"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M26.6016 37.8711H26.6237"
          stroke="#333849"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <div className="mt-4 text-black-text">
        <Heading
          title=" Não foi possível carregar as informações."
          subtitle="Houve uma falha no servidor"
        />
      </div>

      <ul className="mt-8">
        Tente:
        <div className="pl-10 pt-2">
          <li>Recarregar a página</li>
          <li>Verificar sua conexão com a internet</li>
          <li>Entrar em contato com o suporte</li>
        </div>
      </ul>

      <div className="ml-auto mt-8 w-40">
        <Button onClick={() => reset()}>Recarregar</Button>
      </div>
    </div>
  );
}
