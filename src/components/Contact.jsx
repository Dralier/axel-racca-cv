import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/b23ad9de-716d-40ff-94fa-2591cf281c58" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-rose text-textl'>Contact</p>
                <p className='text-textl py-4'>Submit the form or send me an email to <a className='hover:text-pink-600' href="mailto: axel.racca@gmail.com">axel.racca@gmail.com</a> </p>
            </div>
            <input className='bg-textl p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-textl' type="email" placeholder='Email' name='email' />
            <textarea className='bg-textl p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-textl border-2 hover:bg-rose hover:border-rose px-4 py-3 my-8 mx-auto flex items-center'>Send</button>
        </form>

    </div>
  )
}

export default Contact