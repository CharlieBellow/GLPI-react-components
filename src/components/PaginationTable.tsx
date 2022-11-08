import { CaretLeft, CaretRight } from "phosphor-react";
import { Link } from 'react-router-dom'

export default function PaginationTable() {
  return (
		<>
			<div className="flex items-center flex-col lg:flex-row justify-between border-t border-gray-text lg:bg-white-100 px-4 mt-6 py-3 sm:px-6">
				<div className="flex-1 justify-between hidden">
					<Link
						to="#"
						className="relative inline-flex items-center rounded-md border border-gray-text bg-gray-medium px-4 py-2 text-sm font-medium text-light-bg hover:bg-gray-dark"
					>
						Previous
					</Link>
					<Link
						to="#"
						className="relative ml-3 inline-flex items-center rounded-md border border-gray-text bg-gray-medium px-4 py-2 text-sm font-medium text-gray-text hover:bg-gray-dark"
					>
						Next
					</Link>
				</div>
				<div className="flex flex-1 items-center flex-col lg:flex-row gap-2 justify-between">
					<div>
						<p className="text-lg text-light-bg">
							Mostrando <span className="font-medium">1</span> -{" "}
							<span className="font-medium">10</span> de{" "}
							<span className="font-medium">97</span>
						</p>
					</div>
					<div>
						<nav
							className="isolate inline-flex -space-x-px rounded-md shadow-sm"
							aria-label="Pagination"
						>
							<Link
								to="#"
								className="relative inline-flex items-center rounded-l-md border border-gray-text bg-gray-medium px-2 py-2 text-sm font-bold text-light-bg hover:bg-gray-dark focus:z-20"
							>
								<span className="sr-only">Previous</span>
								<CaretLeft className="h-5 w-5" aria-hidden="true" />
							</Link>

							<Link
								to="#"
								aria-current="page"
								className="relative z-10 inline-flex items-center border border-gray-text bg-blue-ufal px-4 py-2 text-sm font-bold text-white-100 focus:z-20"
							>
								1
							</Link>
							<Link
								to="#"
								className="relative inline-flex items-center border border-gray-text bg-gray-medium px-4 py-2 text-sm font-bold text-light-bg hover:bg-white-100 focus:z-20"
							>
								2
							</Link>
							<Link
								to="#"
								className="relative hidden items-center border border-gray-text bg-gray-medium px-4 py-2 text-sm font-bold text-light-bg hover:bg-white-100 focus:z-20 md:inline-flex"
							>
								3
							</Link>
							<span className="relative inline-flex items-center border border-gray-text bg-gray-medium px-4 py-2 text-sm font-bold text-light-bg">
								...
							</span>
							<Link
								to="#"
								className="relative hidden items-center border border-gray-text bg-gray-medium px-4 py-2 text-sm font-bold text-light-bg hover:bg-white-100 focus:z-20 md:inline-flex"
							>
								8
							</Link>
							<Link
								to="#"
								className="relative inline-flex items-center border border-gray-text bg-gray-medium px-4 py-2 text-sm font-bold text-light-bg hover:bg-white-100 focus:z-20"
							>
								9
							</Link>
							<Link
								to="#"
								className="relative inline-flex items-center border border-gray-text bg-gray-medium px-4 py-2 text-sm font-bold text-light-bg hover:bg-white-100 focus:z-20"
							>
								10
							</Link>
							<Link
								to="#"
								className="relative inline-flex items-center rounded-r-md border border-gray-text bg-gray-medium px-2 py-2 text-sm font-bold text-light-bg hover:bg-white-100 focus:z-20"
							>
								<span className="sr-only">Next</span>
								<CaretRight className="h-5 w-5" aria-hidden="true" />
							</Link>
						</nav>
					</div>
				</div>
			</div>
		</>
	);
}
