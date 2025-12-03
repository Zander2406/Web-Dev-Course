import React from 'react'
import Script from 'next/script'

const contact = () => {
  return (
    <div>
        <Script>
            {` alert("Welcome to contact page"); `}
        </Script>
      This is contact
    </div>
  )
}

export default contact

export const metadata = {
  title: "ContactFacebook - Connect with the world",
  description: "This is a page where you can contact facebook and we can connect with the world using facebook",
};