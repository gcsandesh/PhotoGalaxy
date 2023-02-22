import React from "react"
import { Button, Form, FormGroup, FormControl } from "react-bootstrap"
import { FaSearch } from "react-icons/fa"

export default function SearchBar() {
	return (
		<Form className="my-4">
			<FormGroup className="d-flex gap-2 align-items-center">
				<FormControl
					type="text"
					className="w-25"
					placeholder="Search quality photos..."
				/>
				<Button variant="success">
					<FaSearch />
				</Button>
			</FormGroup>
		</Form>
	)
}
