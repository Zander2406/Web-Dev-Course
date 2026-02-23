"use client"
import React from 'react'

const About = () => {
    return (
        <div>
            <div className='container'>
                <h1>This is about me</h1>
                <p>Hey I am a good boy</p>

                {/* Inherently style jsx is a local style tag which applies to the component it is in but we can specify it to apply globally as well */}
                <style jsx global>{`
                            .container{
                                background-color: red;
                                color: green;
                            }
                            `}
                </style>
            </div>
            <div className="container">
                Hey I am good
            </div>
        </div>
    )
}

export default About
