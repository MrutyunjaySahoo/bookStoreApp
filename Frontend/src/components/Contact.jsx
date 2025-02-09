import React from 'react'

function Contact() {
  return (
    <>
        <div className='flex h-screen items-center justify-center'>
        <div className="w-[600px]">
        <div className="modal-box">
            <form  
                method="dialog">
        
            <h3 className="font-bold text-xl">Contact Us</h3>

            {/* Name Field */}

            <div className='mt-4 space-y-2'>
                <span>Name</span>
                <br />
                <input 
                    type="name" 
                    placeholder='Enter your name' 
                    className='w-80 px-3 py-1 border rounded-md outline-none'
                />
            </div>

            {/* Email Field */}

            <div className='mt-4 space-y-2'>
                <span>Email</span>
                <br />
                <input 
                    type="email" 
                    placeholder='Enter your email' 
                    className='w-80 px-3 py-1 border rounded-md outline-none'
                />
            </div>

            {/* Password Field */}

            <div className='mt-4 space-y-2'>
                <span>Message</span>
                <br />
                <textarea  
                    placeholder='Type your message' 
                    className='w-80 px-3 py-1 border rounded-md outline-none'   
                />
            </div>

             {/* Button Field */}

            <div className='flex  mt-5'>
                <button className='bg-blue-500 text-white rounded-md px-3 py-1 hover:bg-blue-800 duration-300'>
                    Submit
                </button>
            </div>
            </form>
        </div>
    </div> 
    </div>
    </>
  )
}

export default Contact