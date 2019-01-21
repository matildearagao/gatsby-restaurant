import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import {PageHeader} from '../utils'

import imgContact from '../images/bcg/imgContact.jpg'


const ContactPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeader img={imgContact}>
  contact
  </PageHeader>   </Layout>
)

export default ContactPage
