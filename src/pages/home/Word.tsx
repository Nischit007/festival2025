import { useScroll, motion, useTransform, MotionValue } from 'framer-motion';
import React, { useRef } from 'react'
import './Paragraph.css'

interface ParagraphProps {
    value: string;
}

const Paragraph: React.FC<ParagraphProps> = ({ value }) => {
    const element = useRef(null);
    const { scrollYProgress } = useScroll({
        target: element,
        offset: ['start 0.6', 'start 0.1']
    })

    const words = value.split(" ");

    return (
        <p ref={element} className='paragraph1 font-[muli] text-3xl tracking-wider space-x-4'>
            {
                words.map((word, i) => {
                    const start = i / words.length;
                    const end = start + (1 / words.length);
                    return (
                        <Word 
                            key={i} 
                            range={[start, end]} 
                            progress={scrollYProgress}
                        >
                            {word}
                        </Word>
                    );
                })
            }
        </p>
    )
}

// Corrected WordProps interface
interface WordProps {
    children: string;
    range: [number, number]; // Fixed: should be tuple of numbers, not string
    progress: MotionValue<number>; // Added: this prop was missing
}

const Word: React.FC<WordProps> = ({ children, range, progress }) => {
    const opacity = useTransform(progress, range, [0, 1]);
    
    return (
        <span className='word1 relative'>
            <span className='absolute opacity-[0.3]'>{children}</span>
            <motion.span style={{ opacity }}>{children}</motion.span>
        </span>
    );
}

export { Word, Paragraph }; // Export both if needed