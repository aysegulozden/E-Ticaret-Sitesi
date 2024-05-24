import React from 'react'
import Container from '@mui/material/Container';

function PageContainer({ children }) {
    //bu Container componenti ekranımızı sağdan ve soldan eşit şekilde kırpmış gibi gözükmesini sağlar
    return (
        <Container maxWidth="lg">{children}</Container>
    )
}

export default PageContainer