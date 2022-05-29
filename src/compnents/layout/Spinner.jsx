import spinner from './assets/spinner.gif'



function Spinner() {

    return (
        <div w-100 mt-20>
                <img src={spinner} 
                alt="Loading..."
                width={180}
                className='text-center mx-auto' />
        </div>
    )
}

export default Spinner