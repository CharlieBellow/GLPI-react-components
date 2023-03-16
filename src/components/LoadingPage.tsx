import { Spinner } from "@chakra-ui/react";

export default function LoadingPage(){
    return (
        <div className="w-full h-full bg-white-ice grid h-screen place-items-center">
            <Spinner size={'xl'}></Spinner>
        </div>
    );
};
