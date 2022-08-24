import * as React from 'react';
import {useEffect, useState} from 'react';
import {Typography} from "@mui/material";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {StyledTableCell, StyledTableRow} from "./styles";


type ContactType = {
    id: number
    name: string
    company: CompanyType
    phone: string
    email: string
}

type CompanyType = {
    name: string
}

export const Contacts = () => {

    const [contacts, setContacts] = useState<ContactType[]>([])

    useEffect(() => {
        fetch("http://localhost:3030/contacts")
            .then(res => res.json())
            .then(data => setContacts(data))
    }, [])


    return (
        <>
            <Typography variant={'h2'} mb={4}>
                Список контактов
            </Typography>

            <TableContainer component={Paper}>
                <Table sx={{minWidth: 650}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Name</StyledTableCell>
                            <StyledTableCell align="right">Company</StyledTableCell>
                            <StyledTableCell align="right">Phone</StyledTableCell>
                            <StyledTableCell align="right">E-mail</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {contacts.map((contact) => (
                            <StyledTableRow
                                key={contact.id}
                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                            >
                                <TableCell component="th" scope="row">
                                    {contact.name}
                                </TableCell>
                                <TableCell align="right">{contact.company.name}</TableCell>
                                <TableCell align="right">{contact.phone}</TableCell>
                                <TableCell align="right">{contact.email}</TableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}
