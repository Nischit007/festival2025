import arthub from '../../assets/arthub.mp4'
import virtualart from './../../assets/virtualart.mp4'
import { useNavigate } from 'react-router-dom'
import { Paragraph } from './Word'





const Section2 = () => {
  const navigate = useNavigate()

  const paragraph='Stories for Change is a global video and digital media project created by and for the Giving for Change Alliance and the wider #ShiftThePower movement. It celebrates community philanthropy, documents lived experiences of people building change from the ground up, and amplifies voices often left out of dominant development narratives.'
  
  return (
    <div>
    <div className='h-auto w-full px-20 py-10 bg-[#FAFDEE]'>
        <div className='flex flex-col gap-10'>
          <div>
        {/* <p className='font-medium text-3xl'>Stories for Change is a global video and digital media project created by and for the Giving for Change Alliance and the wider #ShiftThePower movement. It celebrates community philanthropy, documents lived experiences of people
       building change from the ground up, and amplifies voices often left out of
        dominant development narratives.</p> */}
        </div>
        {/* <Paragraph value ={paragraph}/> */}
        <Paragraph value={paragraph}/>
        <div className='border-t-[1px] border-gray-300'></div>
        <h3 className='text-5xl font-[playfair]'> Featured Stories</h3>
        <div className='flex flex-col gap-20'>
        <div className='grid grid-cols-2 gap-10 cursor-pointer'>

            <div className='group transition-all duration-300 hover:-translate-y-1'>
              <div className='aspect-video overflow-hidden relative rounded-md' onClick={() => navigate('/art-hub')}>
                <video muted autoPlay loop src={arthub} className='object-cover h-full w-full transition-transform duration-300 group-hover:scale-105'/>
                <div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-all duration-300'></div>
                {/* Arrow icon inside image/video */}
                <div className='absolute bottom-4 right-4 w-10 h-10 bg-[#C2F84F] rounded-full border-2 border-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-0 translate-y-2'>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                  </svg>
                </div>
              </div>
              <div className='flex justify-between items-center pt-2'>
                <span className='text-3xl font-[muli] transition-colors duration-300 group-hover:text-[#C2F84F]'>Art Hub</span>
                <svg className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:-translate-y-0.5" fill="#C2F84F" viewBox="0 0 24 24">
                  <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                </svg>
              </div>
          </div>
          
          <div className='group transition-all duration-300 hover:-translate-y-1'>
            <div className='aspect-video overflow-hidden relative rounded-md' onClick={() => navigate('/virtual-gallery')}>
              <video loop autoPlay muted src={virtualart} className='object-cover h-full w-full transition-transform duration-300 group-hover:scale-105'/>
              <div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-all duration-300'></div>
              {/* Arrow icon inside image/video */}
              <div className='absolute bottom-4 right-4 w-10 h-10 bg-[#C2F84F] rounded-full border-2 border-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-0 translate-y-2'>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                </svg>
              </div>
            </div>
            <div className='flex justify-between items-center pt-2'>
              <span className='text-3xl font-[muli] transition-colors duration-300 group-hover:text-[#C2F84F]'>Virtual Gallery</span>
              <svg className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:-translate-y-0.5" fill="#C2F84F" viewBox="0 0 24 24">
                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
              </svg>
            </div>
          </div>
        </div>
        
        <div className='grid grid-cols-2 gap-10 cursor-pointer'>
            <div className='group transition-all duration-300 hover:-translate-y-1'>
              <div className='aspect-video overflow-hidden relative rounded-md'>
                <img src='https://cdn-images-1.medium.com/max/800/0*oe9Qkrns3pKBBJKz' className='object-cover h-full w-full transition-transform duration-300 group-hover:scale-105'/>
                <div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-all duration-300'></div>
                {/* Arrow icon inside image/video */}
                <div className='absolute bottom-4 right-4 w-10 h-10 bg-[#C2F84F] rounded-full border-2 border-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-0 translate-y-2'>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                  </svg>
                </div>
              </div>
              <div className='flex justify-between items-center pt-2'>
                <span className='text-3xl font-[muli] transition-colors duration-300 group-hover:text-[#C2F84F]'>Gallery</span>
                <svg className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:-translate-y-0.5" fill="#C2F84F" viewBox="0 0 24 24">
                  <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                </svg>
              </div>
          </div>
          
          <div className='group transition-all duration-300 hover:-translate-y-1'>
            <div className='aspect-video overflow-hidden relative rounded-md' onClick={() => navigate('/video-hub')}>
              <img src='https://s.tmimgcdn.com/scr/800x500/232900/dolunay-creative-portfolio-multi-purpose-amp-personal-html-template_232930-2-original.png' className='object-cover h-full w-full transition-transform duration-300 group-hover:scale-105'/>
              <div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-all duration-300'></div>
              {/* Arrow icon inside image/video */}
              <div className='absolute bottom-4 right-4 w-10 h-10 bg-[#C2F84F] rounded-full border-2 border-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-0 translate-y-2'>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                </svg>
              </div>
            </div>
            <div className='flex justify-between items-center pt-2'>
              <span className='text-3xl transition-colors duration-300 group-hover:text-[#C2F84F] font-[muli]'>Videos</span>
              <svg className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:-translate-y-0.5" fill="#C2F84F" viewBox="0 0 24 24">
                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
              </svg>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
    <div className="rounded-4xl font-[playfair] w-full  bg-[#1F3A4B] text-[#FAFDEE]">
        <h1 className="mt-10 text-center text-[10.5vw] font-bold leading-[0.9] tracking-tighter lg:text-[13.6vw]">
          StoriesforChange
        </h1>
        <div className="mt-80 flex w-full flex-col items-start gap-5 px-4 font-medium lg:mt-0 lg:flex-row lg:justify-between">
          <div className="flex w-full items-center justify-between gap-12 uppercase lg:w-fit lg:justify-center">
            {/* <p className="w-fit text-lg">
              USA <br />
            </p> */}
            <p className="w-fit text-right text-lg lg:text-left">
              Dec 5, 2025 <br /> 
            </p>
          </div>
          <div className="flex w-full flex-wrap items-center justify-between gap-12 uppercase lg:w-fit lg:justify-center">
            {/* <p className="w-fit text-sm">
              onilne <br /> free
            </p> */}
            {/* <p className="w-fit text-right text-sm lg:text-left">
              in person tickets <br /> $600
            </p> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section2