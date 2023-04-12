import Link from "next/link";
import { useRouter } from "next/router";
import * as Icon from "phosphor-react";
import { useEffect } from "react";
import { useMessage } from "../../Contexts/MessageContext";
interface Table extends React.HTMLAttributes<HTMLElement> {
    table: any;
    currentPage : number
}
const siblingsCount = 2
const totalpageCount = siblingsCount + 5

const range = (start: number, end: number) => {
    let length = end - start + 1;
    return Array.from({ length }, (_, idx) => idx + start);
  };

function generateArray(start: number, end: number){
    return [...new Array(end - start)]
        .map((_, index) => {
            return start + index + 1;
        })
        .filter(page => page > 0);
}

function generatePaginationRange(currentPage: number, size : number){
    if(size <= totalpageCount){
        return range(1, size);
    }
    let letfSiblingIndex = Math.max(currentPage - siblingsCount, 1);
    let rightSiblingIndex = Math.min(
        currentPage + siblingsCount, 
        size
    );

    let shouldShowLeftDots = letfSiblingIndex > 2;
    let shouldShowRightDots = rightSiblingIndex < size - 2;
    console.log(letfSiblingIndex);
    console.log(rightSiblingIndex);
    console.log(shouldShowLeftDots);
    console.log(shouldShowRightDots);
    if(!shouldShowLeftDots && shouldShowRightDots){
        let leftItemCount =  1 + 2 *siblingsCount;
        let leftRange = range(1, leftItemCount);

        return [...leftRange, -1, size];
    }
    else if(shouldShowLeftDots && !shouldShowRightDots){
        let rightItemCount = 1 + 2 * siblingsCount;
        let rightRange = range(size - rightItemCount + 1, size);
        return [1, -1, ...rightRange];
    }
    else if(shouldShowLeftDots && shouldShowRightDots){
        let middleRange = range(letfSiblingIndex, rightSiblingIndex);
        return [1, -1, ...middleRange, -1, size];
    }
    
    return [];
}

function Pagination(props : Table){
    const size = props.table.getPageCount()
    const router = useRouter()
    const { warnMessage } = useMessage()
    console.log("size", size);
    const previousPages = props.table.getState().pagination.pageIndex > 0 
        ? generateArray(props.table.getState().pagination.pageIndex - siblingsCount, props.table.getState().pagination.pageIndex)
        : [];
    const nextPages = props.table.getState().pagination.pageIndex + 1 < size
        ? generateArray(
            props.table.getState().pagination.pageIndex + 1,
            Math.min(props.table.getState().pagination.pageIndex + 1 + siblingsCount, size))
        : [];
    const paginationRange = generatePaginationRange(props.table.getState().pagination.pageIndex + 1, size)
    console.log("range", paginationRange);
    const nextPage = () => {
        if(props.table.getCanNextPage()){
            props.table.nextPage()
        }
    }
    const next = props.currentPage + 1
    const previousPage = () => {
        if(props.table.getCanPreviousPage()){
            props.table.previousPage()
        }
    }
    const fisrtPage = () => {
        props.table.setPageIndex(0)
    }
    const lastPage = () => {
        props.table.setPageIndex(size-1)
    }
    useEffect(() => {
        if(props.currentPage <= size && props.currentPage > 0){
            props.table.setPageIndex(props.currentPage-1)
        }else{
            router.push('1');
            warnMessage("página inexistente")
        }
    }, [])

    return(
        <div className="flex flex-col w-full items-end px-8">
            <ul className="flex flex-row items-center">
            {props.currentPage > 1 ? 
            <>
            <Link href={`${1}`}>
                <li onClick={fisrtPage} className="cursor-pointer">
                    <Icon.CaretDoubleLeft size={24}/>
                </li>
            </Link>
            <Link href={`${props.currentPage - 1}`}>
                <li onClick={previousPage} className="cursor-pointer">
                        <Icon.CaretLeft size={24}/>
                </li>
            </Link>
            </> : <></>
            }   
                {paginationRange.map((e, i) => {
                    if(e === -1){
                        return <li className="border text-sm p-4 font-bold bg-slate-300 text-[#333849]">...</li>
                    }
                    return (
                        <Link href={`${e}`}>
                            <li className={`${props.table.getState().pagination.pageIndex === e-1 ? "bg-blue-ufal text-white-100" : "bg-slate-300 text-[#333849]"} border text-sm p-4 font-bold ${e == 1 ? "rounded-l-md" : ""}  ${i + 1 == paginationRange.length ? "rounded-r-md" : ""} cursor-pointer`} key={i} onClick={() => props.table.setPageIndex(e-1)}>{e}</li>
                        </Link>
                        
                    );
                    })
                }
                {props.currentPage < size ? 
                <>
                    <Link href={`${next}`}>
                        <li onClick={nextPage} className="cursor-pointer">
                            <Icon.CaretRight size={24}/>
                        </li>
                    </Link>
                    <Link href={`${size}`}>
                        <li onClick={lastPage}className="cursor-pointer">
                            <Icon.CaretDoubleRight size={24}/>
                        </li>
                    </Link>
                </>
                : <></>    
            }

            </ul>
        </div>
    )
}
export default Pagination;