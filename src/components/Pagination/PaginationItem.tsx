import { Button } from "@chakra-ui/react";

interface PaginationItemProps {
	isCurrent?: boolean;
	number: number;
	onPageChange: (page: number) => void;
}
export function PaginationItem({
	isCurrent = false,
	number,
	onPageChange,
}: PaginationItemProps) {
	if (isCurrent) {
		return (
			<Button
				size="sm"
				fontSize="xs"
				width="4"
				colorScheme="blue"
				disabled
				_disabled={{
					bg: "blue.500",
					cursor: "default",
				}}
			>
				{number}
			</Button>
		);
	} else {
		return (
			<Button
				size="sm"
				fontSize="xs"
				width="4"
				bg="gray.300"
				_hover={{
					bg: "gray.500",
				}}
				onClick={() => onPageChange(number)}
			>
				{number}
			</Button>
		);
	}
}
