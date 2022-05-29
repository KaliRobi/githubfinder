import {FaHome} from 'react-icons/fa'
import {Link} from 'react-router-dom'

function NotFound() {
    return (
        <div className='hero'>
            <div className='text-center hero-content'>
                <div className='max-w-lg'>
                    <h1 className='text-8xl font-bold mb-8'>
                        Hops
                    </h1>
                    <p className='text-5xl mb-8'>Page not found</p>
                    <Link to='/' className='btn tbn-primary btn-lg'>
                    <FaHome className='mr-2' />
                    Back To Home
                    </Link>
                </div>
            </div>
            NotFound
        </div>
    )
}

export default NotFound;