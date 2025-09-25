
import { Gallery } from "./Gallery";
import VideoSection from "./VideoSection";
import Works from "./Works";
import logo from '../../../assets/images/storiesforchange.png'
import { useNavigate } from "react-router-dom";

const Lgbtq = () => {

  const navigate = useNavigate()

  return (
    <div className="h-auto bg-[#FAFDEE] w-full">
       <div className='absolute z-10 top-10 left-10 max-w-[200px] max-h-[200px] cursor-pointer'  onClick={() => navigate('/')}>
          <img src={logo} className='object-cover h-full w-full'/>
          </div>
           <div className='grid grid-cols-2 gap-4'>
          <div className=''>
            <img  src='https://img.freepik.com/premium-photo/lgbt-pride-gay-rights-peace-freedom-diversity-harmony-graceful-woman-hands-blur-rainbow-lights-iridescent-blue-red-green-yellow-color-gradient-glow-dark-empty-space-background_279525-10244.jpg' className='h-screen w-full object-cover' />
          </div>

          
          <div className='flex flex-col gap-10 lg:text-7xl text-5xl py-20 px-20'>
            <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2 ">
             <h3  className='cursor-pointer font-[playfair]'>LGBTQ</h3>
            <span className="font-[playfair]"> ~ <span className="font-[playfair]">Rights</span></span>
            </div>
            <h3 className='cursor-pointer  font-[playfair]'> & Inclusion</h3>
            </div>
            <div className='border-t-[2px] border-gray-600 w-3/4'></div>
            <div>
            <p className="text-3xl font-[muli]">The fight for LGBTQ+ rights is about more than identity — it’s about dignity, equality, and the right for everyone to live free from discrimination. Across communities, individuals and organizations are working to challenge stigma, amplify queer voices, and build societies where diversity is celebrated, not silenced.</p>
          </div>
          </div>
          <div className="flex justify-between overflow-hidden gap-5">
            <div className="flex flex-col gap-5">
            <h3 className="text-2xl font-[playfair]">Why this issue matters</h3>
            <p className="font-[muli] text-lg min-w-96">Across the world, LGBTQ+ communities face systemic discrimination, violence, and exclusion that silence their voices and limit their opportunities. When people are denied the freedom to love, express themselves, or simply exist without fear, it reveals deep imbalances of power in our societies.</p>
            </div>
            <img src="https://d1y8sb8igg2f8e.cloudfront.net/images/Shutterstock_1756785539_1.width-800.jpg" className="h-60 w-60 object-cover rounded-lg"
            />
          </div>
          </div>
       </div>
       <Works/>
       <Gallery/>
       <VideoSection/>
    </div>
  )
}

export default Lgbtq;