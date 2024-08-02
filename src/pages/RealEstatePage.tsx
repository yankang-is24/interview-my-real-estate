import React from 'react';
import {Box, CircularProgress, Container, Typography} from "@mui/material";
import {useQuery} from "@tanstack/react-query";
import {RealEstate} from "../types";

const getRealEstates = async (): Promise<RealEstate[]> => {
    const res = await fetch('http://localhost:8080/real-estates');
    return res.json();
};

export const RealEstatePage = () => {
    const {data, isLoading, isError, isSuccess} = useQuery({queryKey: ['real-estates'], queryFn: getRealEstates})
    if (isLoading) {
        return <Container maxWidth='sm'><CircularProgress/></Container>
    }

    if (isError) {
        return <Container maxWidth='sm'><Typography>Something went wrong :/</Typography></Container>
    }

    if (isSuccess) {
        return (
            <Container maxWidth='sm'>
                <Box sx={{m: 4}}>
                    <p>My Real Estates</p>
                    {/*    TODO: please add your accordion component here */}
                </Box>
            </Container>
        );
    }
    return null;
};