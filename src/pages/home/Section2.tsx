import arthub from '../../assets/arthub.mp4'
import virtualart from './../../assets/virtualart.mp4'
import { useNavigate } from 'react-router-dom'

const Section2 = () => {
  const navigate = useNavigate()
  
  return (
    <div className='h-auto w-full px-10 mt-14 mb-10'>
        <div className='flex flex-col gap-10'>
          <div>
        <p className='font-medium text-3xl'> We're a global storytelling movement, uniting voices that shift the power. This year, we gather for the blazing 🔥 "Stories for Change Festival 2025" — a digital celebration of courage, community, and change. From powerful documentaries to striking art and fearless conversations, we're amplifying stories that demand to be heard. On December 5th, the world comes together online for one unforgettable festival of impact, inspiration, and unstoppable change. 🚀</p>
        </div>
        <div className='border-t-[1px] border-gray-300'></div>
        <h3 className='text-5xl font-[anton]'> Featured Stories</h3>
        <div className='grid grid-cols-2 gap-5 cursor-pointer'>
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
                <span className='text-2xl font-medium transition-colors duration-300 group-hover:text-[#C2F84F]'>Art Hub</span>
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
              <span className='text-2xl font-medium transition-colors duration-300 group-hover:text-[#C2F84F]'>Virtual Gallery</span>
              <svg className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:-translate-y-0.5" fill="#C2F84F" viewBox="0 0 24 24">
                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
              </svg>
            </div>
          </div>
        </div>
        
        <div className='grid grid-cols-2 gap-5 cursor-pointer'>
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
                <span className='text-2xl font-medium transition-colors duration-300 group-hover:text-[#C2F84F]'>Gallery</span>
                <svg className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:-translate-y-0.5" fill="#C2F84F" viewBox="0 0 24 24">
                  <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                </svg>
              </div>
          </div>
          
          <div className='group transition-all duration-300 hover:-translate-y-1'>
            <div className='aspect-video overflow-hidden relative rounded-md'>
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
              <span className='text-2xl font-medium transition-colors duration-300 group-hover:text-[#C2F84F]'>Videos</span>
              <svg className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:-translate-y-0.5" fill="#C2F84F" viewBox="0 0 24 24">
                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section2