
function Forecast({title,items}) {
  return (
    <div className="">
      <div className='flex items-center justify-start mt-6'>
          <p className='text-white font-medium uppercase'>{title}</p>
      </div>
      <hr />
      <div className='flex flex-row items-center justify-between text-white'>
        <div className='flex flex-col items-center justify-center'>
            <p className='font-light text-sm'>04:30 PM</p>
            <img src="../../src/assets/sun-transparent-background-10-removebg-preview.png"  className='w-12 my-1' alt="" />
              <p className="font-medium">22&deg;</p>
        </div>
        <div className='flex flex-col items-center justify-center'>
            <p className='font-light text-sm'>04:30 PM</p>
            <img src="../../src/assets/sun-transparent-background-10-removebg-preview.png"  className='w-12 my-1' alt="" />
              <p className="font-medium">22&deg;</p>
        </div>
        <div className='flex flex-col items-center justify-center'>
            <p className='font-light text-sm'>04:30 PM</p>
            <img src="../../src/assets/sun-transparent-background-10-removebg-preview.png"  className='w-12 my-1' alt="" />
              <p className="font-medium">22&deg;</p>
        </div>
        <div className='flex flex-col items-center justify-center'>
            <p className='font-light text-sm'>04:30 PM</p>
            <img src="../../src/assets/sun-transparent-background-10-removebg-preview.png"  className='w-12 my-1' alt="" />
              <p className="font-medium">22&deg;</p>
        </div>
        <div className='flex flex-col items-center justify-center'>
            <p className='font-light text-sm'>04:30 PM</p>
            <img src="../../src/assets/sun-transparent-background-10-removebg-preview.png"  className='w-12 my-1' alt="" />
              <p className="font-medium">22&deg;</p>
        </div>

      </div>
    </div>
  )
}

export default Forecast
