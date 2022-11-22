
import { Stack, Box, Text } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

interface PaginationProps {
	totalCountOfRegisters: number;
	registersPerPage?: number;
	currentPage?: number;
	onPageChange: (page: number) => void;
}

const siblingsCount = 2;

function generatePageArrays(from: number, to: number) {
	return [...new Array(to - from)]
		.map((_, index) => {
			return from + index + 1;
		})
		.filter(page => page > 0);
}

export function Pagination({
	totalCountOfRegisters,
	registersPerPage = 10,
	currentPage = 1,
	onPageChange,
}: PaginationProps) {
	const lastPage = Math.floor(totalCountOfRegisters / registersPerPage);

	const previousPages =
		currentPage > 1
			? generatePageArrays(currentPage - 1 - siblingsCount, currentPage - 1)
			: [];

	const nextPages =
		currentPage < lastPage
			? generatePageArrays(
					currentPage,
					Math.min(currentPage + siblingsCount, lastPage)
			  )
			: [];

	console.log(previousPages.length);
	console.log(nextPages.length);
	return (
		<Stack
			direction={["column", "row"]}
			spacing="6"
			mt="8"
			justify="space-between"
			align="center"
		>
			<Box>
				<strong>{(currentPage - 1) * registersPerPage + 1} </strong> -{" "}
				<strong>{registersPerPage * currentPage}</strong> de{" "}
				<strong> {totalCountOfRegisters} </strong>
			</Box>
			<Stack direction="row" spacing="2">
				{currentPage > 1 + siblingsCount && (
					<>
						<PaginationItem onPageChange={onPageChange} number={1} />
						{currentPage > 2 + siblingsCount && (
							<Text color="gray.300" width="6" textAlign="center">
								...
							</Text>
						)}
					</>
				)}
				{previousPages.length > 0 &&
					previousPages.map(page => (
						<PaginationItem
							onPageChange={onPageChange}
							key={page}
							number={page}
						/>
					))}

				<PaginationItem
					onPageChange={onPageChange}
					key={currentPage}
					number={currentPage}
					isCurrent
				/>

				{nextPages.length > 0 &&
					nextPages.map(page => (
						<PaginationItem
							onPageChange={onPageChange}
							key={page}
							number={page}
						/>
					))}

				{currentPage + siblingsCount < lastPage && (
					<>
						{currentPage + 1 + siblingsCount < lastPage && (
							<Text color="gray.300" width="6" textAlign="center">
								...
							</Text>
						)}
						<PaginationItem onPageChange={onPageChange} number={lastPage} />
					</>
				)}
			</Stack>
		</Stack>
	);
}