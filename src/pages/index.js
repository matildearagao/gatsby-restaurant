import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { HomeHeader, Banner, BannerButton } from '../utils'
import img from '../images/bcg/homeBcg.jpg'
import QuickInfo from '../components/HomePageComponents/QuickInfo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <HomeHeader img={img}>
      <Banner title="eatery" subtitle="55 main street. Santa Monica">
        <BannerButton style={{margin: '2rem auto'}}> Menu</BannerButton>
      </Banner>
    </HomeHeader>
    <QuickInfo></QuickInfo>
  </Layout>
)

export default IndexPage
