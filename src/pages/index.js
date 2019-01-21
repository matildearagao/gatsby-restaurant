import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { HomeHeader } from '../utils'
import img from '../images/bcg/homeBcg.jpg'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    
    <HomeHeader img={img}>
      hello homeheader
       </HomeHeader>
  </Layout>
)

export default IndexPage
