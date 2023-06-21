import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <div>
            <Link to="/youtubelogo"> YouTubeLogo</Link>
            <Link to="/reactjslogo"> ReactLogo</Link>
            <Link to="/githublogo"> GitHubLogo</Link>
        </div>
    )
}