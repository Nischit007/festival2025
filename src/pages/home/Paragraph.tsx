import { useScroll, motion } from 'framer-motion';
import React,{useEffect, useRef} from 'react'


interface ParagraphProps {
    value: string;
  }

const Paragraph1: React.FC<ParagraphProps> = ({ value }) => {

  const element = useRef(null);
  const{scrollYProgress}= useScroll({
    target:element,
    offset: ['start 0.8','start 0.2']
  })

  useEffect(()=>{
    scrollYProgress.on("change",e=>console.log(e))
  },[])

  return (
    <motion.p ref={element} style={{opacity: scrollYProgress}} className='font-medium text-3xl'>{value}</motion.p>
  )
}

export default Paragraph1