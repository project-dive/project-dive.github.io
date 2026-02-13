import { Link, useLocation } from 'react-router-dom'
import { Button } from './ui/button'
import { cn } from '../lib/utils'
import diveLogo from '../assets/dive.png'

import './Navigation.css'

const navItems = [
    { path: '/', label: 'Sektionen' },
    { path: '/about', label: 'Studier' },
    { path: '/contact', label: 'FAQ' },
]

function Navigation() {
    const location = useLocation()

    return (
        <nav className="nav-container">
            <div className="nav-content">
                <div className="nav-flex">
                    <Link to="/" className="nav-brand w-[60px]">
                        <img src={diveLogo} alt="Dive Logo" className="nav-logo" />
                    </Link>
                    <div className="nav-links flex h-full">
                        {navItems.map((item) => (
                            <Link key={item.path} to={item.path}>
                                <Button
                                    variant={location.pathname === item.path ? "default" : "ghost"}
                                    // size="sm"
                                    className={cn(
                                        "nav-button-base",
                                        location.pathname === item.path
                                            ? "nav-button-active"
                                            : "nav-button-inactive"
                                    )}
                                >
                                    {item.label}
                                </Button>
                            </Link>
                        ))}
                    </div>
                    <div></div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation