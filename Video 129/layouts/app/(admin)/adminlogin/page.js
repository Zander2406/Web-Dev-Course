import React from 'react'

const page = () => {
  return (
    <div>
      Admin login
      <p>Feel free to login as an Admin</p>
    </div>
  )
}

export default page


export async function generateMetadata({ params }) {
  return {
    title: 'AdminLogin Facebook - Connect with friends and the world around you ',
  }
}
