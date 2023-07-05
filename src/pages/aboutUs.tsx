import React from 'react'
import dynamic from 'next/dynamic'
import { NextPageWithLayout } from '@/interfaces/layout'
import { MainLayout } from '@/components/layout'

const DynamicHomeWarning = dynamic(() => import('../components/home/warning'))
const DynamicAboutUsDetail = dynamic(() => import('../components/home/aboutUsDetail'))

const AboutUs: NextPageWithLayout = () => {
  return (
    <>
      {/* <DynamicHomeWarning /> */}
      <DynamicAboutUsDetail />
    </>
  )
}

AboutUs.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default AboutUs
