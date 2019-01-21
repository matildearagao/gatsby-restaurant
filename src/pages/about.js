import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import {PageHeader} from '../utils'
import imgAbout from '../images/bcg/aboutImg.jpg'

const AboutPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
<PageHeader img={imgAbout}>
  about
  </PageHeader>  
  </Layout>
)

export default AboutPage
