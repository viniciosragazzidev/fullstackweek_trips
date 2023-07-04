import React from 'react'
import Trips from './components/Trips'

interface Props {}

function Page(props: Props) {
    const {} = props

    return (
      <div>
        <h1>Page</h1>
        <Trips/>
      </div>
    )
}

export default Page
