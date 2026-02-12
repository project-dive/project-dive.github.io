import { Button } from '../components/ui/button'
import { useNavigate } from 'react-router-dom'

function About() {
    const navigate = useNavigate()

    return (
        <div>
            <Button
                onClick={() => navigate('/')}
                className="bg-blue-600 hover:bg-blue-700 text-black"
            >
                Go Home
            </Button>
        </div>
    )
}

export default About