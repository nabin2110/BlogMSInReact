import React from 'react'
import Layout from '../../components/layouts/Layout'
import Card from '../../components/card/Card'

export const Home = () => {
  return (
   <Layout>
       <div className="flex flex-wrap justify-center space-x-5 mt-6">
            <Card />
            <Card />
            <Card />
       </div>
   </Layout>
  )
}
