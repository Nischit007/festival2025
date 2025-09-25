import Video from '../../components/home/Video'
import Section2 from './Section2'
import exhibition from './../../assets/Exhibition.mp4'
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { useRef, useEffect } from 'react'; 
import logo from '../../assets/images/storiesforchange.png';

const HomePage = () => {
  const page1Ref = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const page1 = page1Ref.current;
    const cursor = cursorRef.current;

    if (page1 && cursor) {
      const handleMouseMove = (dets: MouseEvent) => {
        gsap.to(cursor, {
          x: dets.x,
          y: dets.y
        });
      };

      const handleMouseEnter = () => {
        gsap.to(cursor, {
          scale: 1,
          opacity:1
        });
      };

      const handleMouseLeave = () => {
        gsap.to(cursor, {
          scale: 0,
          opacity:0
        });
      };

      // Add all event listeners
      page1.addEventListener("mousemove", handleMouseMove);
      page1.addEventListener("mouseenter", handleMouseEnter);
      page1.addEventListener("mouseleave", handleMouseLeave);

      // Cleanup function - remove all event listeners
      return () => {
        page1.removeEventListener("mousemove", handleMouseMove);
        page1.removeEventListener("mouseenter", handleMouseEnter);
        page1.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, []); // Empty dependency array means this runs once on mount

  const handleClick = () => {
    navigate('/about');
  };

  return (
    <div className='overflow-hidden'>
        <div ref={page1Ref} className='page1 w-full h-screen bg-[#FAFDEE]'>
          <div className='relative'>
         <div ref={cursorRef} className='cursor h-[3vw] w-[3vw] bg-[#C2F84F] rounded-full fixed z-10 flex justify-center items-center transform -translate-x-1/2 -translate-y-1/2'>
          <h3 className='text-[1.15vw] font-medium'></h3>
         </div>
        <Video/>
        </div>
        <div className='absolute z-10 top-10 left-10 max-w-[200px] max-h-[200px]'>
          <img src={logo} className='object-cover h-full w-full'/>
          </div>
        <div className='absolute z-20 text-white top-10 left-10 w-full text-center pt-5 font-[anton]'>
        <div className='text-[6vw] uppercase leading-[7vw] flex items-center justify-center'>Stories</div>
        <div className='text-[6vw] uppercase leading-[8vw] flex items-center justify-center'>for Change</div>
        <div className='text-[6vw] uppercase leading-[7vw] flex items-start justify-center gap-2'>Festival
            <div className='h-[7vw] w-[16vw] rounded-full overflow-hidden' >
            <div className='h-full w-full'>
            <video className='h-full w-full object-cover' autoPlay loop muted src={exhibition}/>
            </div>
            </div>2025</div>
    </div>
    <div className='flex items-center justify-center cursor-pointer'>
    <button onClick={handleClick} className="
    px-8 
    py-3 
    border-2 
    cursor-pointer
    border-[#C2F84F]
    text-white  
    font-bold 
    rounded-full
    shrink-0
    transition-all 
    duration-300 
    ease-in-out
    hover:bg-[#C2F84F]
    hover:text-gray-800
    hover:shadow-lg
    active:scale-95
    absolute
    top-170
    z-20
">
    Start Your Journey
</button>
</div>

    <div className='absolute z-20 top-150 right-10 text-lg font-[muli] font-black text-white max-w-96 text-justify'>
       <span>Join us in a global celebration of art and community philanthropy. Experience digital art, documentaries, short films, and paintings created by inspiring changemakers who are reimagining how communities give, share, and transform together.</span>
    </div>
        </div>
      <Section2/>
    </div>
  )
}

export default HomePage