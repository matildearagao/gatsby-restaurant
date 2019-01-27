import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { PageHeader, Banner } from '../utils'
import aboutImg from '../images/bcg/aboutImg.jpg'

const MenuPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeader img={aboutImg}>
      <Banner title='menu' subtitle={`let's dig in`}></Banner>
    </PageHeader>
  </Layout>
)

export default MenuPage
