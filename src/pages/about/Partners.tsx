import PartnersList from "./PartnersList"




const Partners = () => {
  return (
    <div>
        <div className='h-auto w-full relative z-10'>
            <div className='flex flex-col gap-10'>
             <span className='text-3xl max-w-lg font-[playfair]'>We’ve built long-lasting partnerships with the most ambitious organization across the globe:</span>
               <PartnersList/>
             </div>
        </div>
    </div>
  )
}

export default Partners

