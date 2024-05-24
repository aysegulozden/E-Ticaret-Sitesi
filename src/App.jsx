import { useState } from 'react'
import './App.css'
import PageContainer from './container/PageContainer'
import Header from './components/Header'
import Product from './components/Product'


function App() {


  return (
    <div>

      <PageContainer>
        <Header />
        <Product />

      </PageContainer>

    </div>
  )
}

export default App
