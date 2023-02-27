import spinner from '../public/spinner.gif';

function Spinner() {
  return (
    <div>
        <Image className='w-[200px] m-auto block' src={spinner} alt='loading...'/>
    </div>
  )
}

export default Spinner;