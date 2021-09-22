import React from 'react'
import { HomeContentLoader } from "../../react-content-loader/home.content.loader";
import { Container } from '@material-ui/core';

export const HomeIndex = () => {
    return (
        <Container >
            <HomeContentLoader />
        </Container>
    )
}
