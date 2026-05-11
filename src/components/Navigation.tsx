import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from './ui/button'
import { cn } from '../lib/utils'
import diveLogo from '../assets/dive.png'

import './Navigation.css'

const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
    { path: '/chapter', label: 'Chapter' },
]

function Navigation() {
    const location = useLocation()
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <nav className="nav-container">
            <div className="nav-content">
                <div className="nav-flex">
                    <Link to="/" className="nav-brand">
                        <img src={diveLogo} alt="Dive Logo" className="nav-logo" />
                    </Link>

                    {/* Desktop nav links */}
                    <div className="nav-links nav-links-desktop">
                        {navItems.map((item) => (
                            <Link key={item.path} to={item.path}>
                                <Button
                                    variant="ghost"
                                    className={cn(
                                        "nav-button",
                                        location.pathname === item.path && "nav-button-active"
                                    )}
                                >
                                    <span
                                        className={location.pathname === item.path ? "nav-button-active-text" : undefined}
                                    >
                                        {item.label}
                                    </span>
                                </Button>
                            </Link>
                        ))}
                    </div>

                    {/* Hamburger button (mobile only) */}
                    <button
                        className="hamburger-button"
                        onClick={() => setMenuOpen((prev) => !prev)}
                        aria-label="Toggle menu"
                        aria-expanded={menuOpen}
                    >
                        <span className={cn("hamburger-icon", menuOpen && "hamburger-icon-open")}>
                            <span className="hamburger-line hamburger-line-1" />
                            <span className="hamburger-line hamburger-line-2" />
                            <span className="hamburger-line hamburger-line-3" />
                        </span>
                    </button>
                </div>
            </div>

            {/* Mobile dropdown menu */}
            <div className={cn("mobile-menu", menuOpen && "mobile-menu-open")}>
                <div className="mobile-menu-inner">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={cn(
                                "mobile-menu-link",
                                location.pathname === item.path && "mobile-menu-link-active"
                            )}
                            onClick={() => setMenuOpen(false)}
                        >
                            <span
                                className={location.pathname === item.path ? "nav-button-active-text" : undefined}
                            >
                                {item.label}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    )
}

export default Navigation