import exhibition from './../../assets/Exhibition.mp4'
const Video = () => {
  return (
    <div className='h-screen w-full relative'>
      <div className='bg-black absolute z-10 h-screen w-full opacity-50'></div>
    <video className='h-full w-full object-cover' autoPlay loop muted src={exhibition}/>
    </div>
  )
}

export default Video