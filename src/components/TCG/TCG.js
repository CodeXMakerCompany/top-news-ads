import React, { useEffect, useState } from 'react'
import { MainLayout } from "../global/mainLayout.global";
import { useLocation } from 'react-router-dom'

const Home = () => {

    const location = useLocation();
    const [view, setView] = useState('')

    useEffect(() => {
        setView(location.pathname);
    },[location]);

    return (
        <>
          <MainLayout view={view} />
        </>
    )
}

export default Home;