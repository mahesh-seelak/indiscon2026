import AnimatedGridBackground from '@/components/animatingBackground'
import LogoWie from '@/components/wie/LogoWie'
import PanelistSection from '@/components/wie/PanelistSection'
import React from 'react'

export default function page() {
  return (
    <>
        <AnimatedGridBackground/>
        <LogoWie/>
        <PanelistSection/>
    </>
  )
}
