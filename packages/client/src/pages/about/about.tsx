import React, { Fragment, lazy, Component, Suspense} from 'react'
// @ts-ignore
import {importMDX} from 'mdx.macro'
const AboutContent = lazy(() => importMDX('../../content/About.mdx'))


const About = () => {
  return (
    <Fragment>
      <Suspense fallback={<div>Loading...</div>}>
        <AboutContent />
      </Suspense>
    </Fragment>
  )
}

export default About;
