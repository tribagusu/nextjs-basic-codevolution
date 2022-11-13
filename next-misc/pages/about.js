import Head from "next/head"
import Footer from "../components/Footer"

const About = () => {
  return (
    <>
      <Head>
        <title>About next js misc</title>
        <meta name="description" content="tutorials" />
      </Head>
      <h1 className="content">About</h1>
    </>
  )
}

export default About

About.getLayout = function PageLayout(page) {
  return (
    <>
      {page}
      <Footer />
    </>
  )
}
