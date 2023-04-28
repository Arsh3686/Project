import { useTable, usePagination } from "react-table";
import axios from "axios";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import { useState, useEffect } from "react";
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function DataGrid({ data }) {
	console.log(data);
	// const [data, setData] = useState([]);
	const [page, setPage] = useState(1);

	// useEffect(() => {
	// 	setData([...response]);
	// }, []);
	const fetchData = async () => {};
	const handlePageChange = (pageNumber) => {
		if (page >= 1 && page <= 10) {
			setPage(pageNumber);
		} else {
		}
	};
	return (
		<div
			style={{
				width: "90vw",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
			}}>
			<div
				style={{
					width: "60vw",
				}}>
				{data &&
					data
						.slice(Math.abs(page * 10 - 10), page * 10)
						.map((row) => {
							return (
								<div key={row.id}>
									<Accordion
										style={{
											margin: "10px 0",
											boxShadow:
												"0 0 3px 0 rgba(0,0,0,0.7)",
										}}>
										<AccordionSummary
											expandIcon={<ExpandMoreIcon />}>
											<Typography>
												{row.id} {row.title}
											</Typography>
										</AccordionSummary>
										<AccordionDetails>
											<Typography>{row.body}</Typography>
										</AccordionDetails>
									</Accordion>
								</div>
							);
						})}
			</div>
			<div style={{ width: "100%", textAlign: "center" }}>
				<Stack
					spacing={2}
					display={"flex"}
					alignItems={"center"}
					marginY={"20px"}>
					<Pagination
						shape="rounded"
						onChange={(e, v) => setPage(v)}
						page={page}
						count={10}
						color="primary"
					/>
				</Stack>
			</div>
		</div>
	);
}

export default DataGrid;

export async function getStaticProps() {
	const response = await axios.get(
		`https://jsonplaceholder.typicode.com/posts`
	);
	console.log("response", response);
	return {
		props: {
			data: response.data,
		},
	};
}
