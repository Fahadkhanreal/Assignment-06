import React from 'react'

const Achievement = () => {
  return (
    <>
    <div className='h-auto flex flex-col items-center mt-20 md:mt-40  mb-52 '>
      <div className='h-auto flex flex-col items-center justify-center'>
        <h1 className='font-bold text-[32px] md:text-[48px] text-center md:ml-2' >Our Achievements</h1>
        <p className='w-full max-w-[1152px] h-auto text-center md:text-left md:ml-14 mt-4 md:mt-10 px-4 md:px-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor iterdum nula, ut commodo diam libero vitae erat. </p>

       <div className='flex flex-col md:flex-row mt-10 md:ml-10 space-y-4 md:space-y-0 md:space-x-40  items-center '>
        <h1 className='font-bold text-[32px] md:text-[40px]'>+200<p className='text-[16px] md:text-[18px] font-normal'>Courses</p>
        </h1>
        <h1 className='font-bold text-[32px] md:text-[40px]'>50k
       <p className='text-[16px] md:text-[18px] font-normal'>Mentors</p>
        </h1>
        <h1 className='font-bold text-[32px] md:text-[40px]'>370k 
       <p className='text-[16px] md:text-[18px] font-normal'>Students</p>
        </h1>
        <h1 className='font-bold text-[32px] md:text-[40px]'>+100 
       <p className='text-[16px] md:text-[18px] font-normal'>Recognition</p>
        </h1>
       </div>
  
      </div>
    </div>

    
    </>
  )
}

export default Achievement

