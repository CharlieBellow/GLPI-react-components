import { Spinner } from "@chakra-ui/react";
// * serve apenas como um indicador de loading enquanto está requisitando algo do servidor
export default function LoadingPage(){
    return (
        <div className="grid h-screen w-full place-items-center bg-white-ice">
            <Spinner size={'xl'} />
        </div>
    );
};
