import React from 'react'
import ContentLoader from 'react-content-loader'

const MyLoader = () => <ContentLoader />

export const HomeContentLoader = () => {
    return (
        <div>
            <MyLoader />
        </div>
    )
}
