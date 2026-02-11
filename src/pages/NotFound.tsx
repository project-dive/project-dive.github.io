import { Button } from '../components/ui/button'
import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <div>
            <Link to="/">
                <Button className="text-black">
                    Go Back Home
                </Button>
            </Link>
        </div>
    )
}

export default NotFound