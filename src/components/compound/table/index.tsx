import MUITable from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { FC } from 'react'
import { SxProps } from '@mui/material'
import { Theme } from '@emotion/react'

interface ITable {
	columns: any
	data: any
}
interface IProps extends ITable {
	sxContainer?: SxProps<Theme>
	sxTable?: SxProps<Theme>
	sxTableHead?: SxProps<Theme>
	sxTableBody?: SxProps<Theme>
	sxTableRow?: SxProps<Theme>
	sxTableCell?: SxProps<Theme>
}

const Table: FC<IProps> = ({
	columns,
	data,
	sxContainer,
	sxTable = { minWidth: 650 },
	sxTableHead,
	sxTableRow,
	sxTableCell,
	sxTableBody,
}) => {
	const renderCells = (row) =>
		columns.map((column, i) => {
			return (
				<TableCell sx={sxTableCell} key={i}>
					{row[column.key || (column.title as string)] || column.default}
				</TableCell>
			)
		})
	const renderRows = data.map((row, i) => {
		return (
			<TableRow
				key={i}
				sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
			>
				{renderCells(row)}
			</TableRow>
		)
	})
	const renderColumns = columns.map((column, i) => {
		return (
			<TableCell key={i} sx={sxTableCell}>
				{column.title}
			</TableCell>
		)
	})
	return (
		<TableContainer component={Paper} sx={sxContainer}>
			<MUITable sx={sxTable}>
				<TableHead sx={sxTableHead}>
					<TableRow sx={sxTableRow}>{renderColumns}</TableRow>
				</TableHead>
				<TableBody sx={sxTableBody}>{renderRows}</TableBody>
			</MUITable>
		</TableContainer>
	)
}

export default Table
