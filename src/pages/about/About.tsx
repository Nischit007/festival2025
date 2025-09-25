import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import shiftThePower from './../../assets/ShiftThePower.mp4';
import Partners from "./Partners";


const About = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  return (
    <div>
    <section
      ref={ref}
      className=" relative mx-auto flex h-auto w-full flex-col  overflow-hidden bg-[#FAFDEE] px-20"
    >
      <div className="mt-20 w-fit flex flex-col gap-10">
       <div className="flex items-center justify-center">
        <div>
        <h1 className="font-[playfair] relative z-10 text-5xl font-bold items-center -translate-x-20 lg:text-8xl">
        Stories for
        </h1>
        <h1 className="font-[playfair]  relative z-10 text-5xl font-bold items-center translate-x-28 lg:text-8xl">Change</h1>
        </div>
        </div>
        <div className="max-w-full  z-10 rounded-2xl">
        <video 
              className="w-full h-auto rounded-2xl"
              autoPlay
              loop 
              muted 
              src={shiftThePower}
            />
            </div>
             <div className="relative z-10">
            <div className=''>
        </div>
        <p className='font-[muli] text-3xl '> Stories for Change 2025 is a global digital media festival that amplifies community voices and celebrates grassroots action. Through film, photography, and storytelling, it brings to life the struggles and triumphs of ordinary people who are driving extraordinary change. More than just a showcase, the festival is a movement — rooted in community philanthropy and the #ShiftThePower vision, where communities everywhere take the lead in shaping their futures.</p>
        </div>
        
        <div className="space-y-2 relative z-10">
            <div className='border-t-[1px] border-gray-300'></div>
          <div className="">
            <div className="flex justify-start">
             <h1 className="text-3xl font-[playfair]">Why Stories? </h1>
            </div>
            <div className="flex justify-end">
            <p className="relative z-10 text-lg max-w-xl font-[muli]">
            Stories are more than just words — they are the threads that connect people, places, and possibilities. Facts and statistics can inform, but stories move hearts, shift perspectives, and inspire action. By sharing lived experiences, we make complex issues human and relatable.</p>
              </div>
            </div>  
            <div className='border-t-[1px] border-gray-300'></div>
            </div>
            <div className="space-y-2 relative z-10">
          <div className="">
            <div className="flex justify-end">
            <p className="relative z-10 text-lg max-w-xl font-[muli]">
            At Stories for Change 2025, stories aren’t just narratives — they are tools for justice, empathy, and transformation. Through film, photography, art, and oral testimony, we capture voices often left unheard. When these voices come together, they create a powerful collective memory that challenges injustice and sparks the courage to imagine a better future.</p>
              </div>
            </div>  
            <div className='border-t-[1px] border-gray-300'></div>
            </div>

            <div className="space-y-2 relative z-10">
          <div className="">
            <div className="flex justify-end">
            <p className="relative z-10 text-lg max-w-xl font-[muli]">
            Stories remind us that change is not abstract. It lives in the resilience of a community rebuilding after climate disaster, in the courage of a young activist speaking truth to power, or in the quiet strength of a caregiver fighting for dignity. Each story has the power to ripple outward — inspiring dialogue, mobilizing movements, and shaping policies</p>
              </div>
            </div>  
            <div className='border-t-[1px] border-gray-300'></div>
            </div>
            <Partners/>
        <LinePath
          className="absolute top-0 z-0"
          scrollYProgress={scrollYProgress}
        />
     
      </div>

      <div className="rounded-4xl font-jakarta-sans w-full translate-y-[200vh] bg-[#1F3A4B] pb-10 text-[#FAFDEE]">
        <h1 className="mt-10 text-center text-[10.5vw] font-bold leading-[0.9] tracking-tighter lg:text-[14.6vw]">
          ShiftForChange
        </h1>
        <div className="mt-80 flex w-full flex-col items-start gap-5 px-4 font-medium lg:mt-0 lg:flex-row lg:justify-between">
          <div className="flex w-full items-center justify-between gap-12 uppercase lg:w-fit lg:justify-center">
            <p className="w-fit text-sm">
              USA, <br />
            </p>
            <p className="w-fit text-right text-sm lg:text-left">
              Oct 5, 2025 <br /> 
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
    </section>
    </div>
  );
};

export { About };

const LinePath = ({
  className,
  scrollYProgress,
}: {
  className: string;
  scrollYProgress: any;
}) => {
  const pathLength = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <svg
      width="1278"
      height="3000"
      viewBox="0 0 1278 2319"
      fill="none"
      overflow="visible"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <motion.path
        d="M876.605 394.131C788.982 335.917 696.198 358.139 691.836 416.303C685.453 501.424 853.722 498.43 941.95 409.714C1016.1 335.156 1008.64 186.907 906.167 142.846C807.014 100.212 712.699 198.494 789.049 245.127C889.053 306.207 986.062 116.979 840.548 43.3233C743.932 -5.58141 678.027 57.1682 672.279 112.188C666.53 167.208 712.538 172.943 736.353 163.088C760.167 153.234 764.14 120.924 746.651 93.3868C717.461 47.4252 638.894 77.8642 601.018 116.979C568.164 150.908 557 201.079 576.467 246.924C593.342 286.664 630.24 310.55 671.68 302.614C756.114 286.446 729.747 206.546 681.86 186.442C630.54 164.898 492 209.318 495.026 287.644C496.837 334.494 518.402 366.466 582.455 367.287C680.013 368.538 771.538 299.456 898.634 292.434C1007.02 286.446 1192.67 309.384 1242.36 382.258C1266.99 418.39 1273.65 443.108 1247.75 474.477C1217.32 511.33 1149.4 511.259 1096.84 466.093C1044.29 420.928 1029.14 380.576 1033.97 324.172C1038.31 273.428 1069.55 228.986 1117.2 216.384C1152.2 207.128 1188.29 213.629 1194.45 245.127C1201.49 281.062 1132.22 280.104 1100.44 272.673C1065.32 264.464 1044.22 234.837 1032.77 201.413C1019.29 162.061 1029.71 131.126 1056.44 100.965C1086.19 67.4032 1143.96 54.5526 1175.78 86.1513C1207.02 117.17 1186.81 143.379 1156.22 166.691C1112.57 199.959 1052.57 186.238 999.784 155.164C957.312 130.164 899.171 63.7054 931.284 26.3214C952.068 2.12513 996.288 3.87363 1007.22 43.58C1018.15 83.2749 1003.56 122.644 975.969 163.376C948.377 204.107 907.272 255.122 913.558 321.045C919.727 385.734 990.968 497.068 1063.84 503.35C1111.46 507.456 1166.79 511.984 1175.68 464.527C1191.52 379.956 1101.26 334.985 1030.29 377.017C971.109 412.064 956.297 483.647 953.797 561.655C947.587 755.413 1197.56 941.828 936.039 1140.66C745.771 1285.32 321.926 950.737 134.536 1202.19C-6.68295 1391.68 -53.4837 1655.38 131.935 1760.5C478.381 1956.91 1124.19 1515 1201.28 1997.83C1273.66 2451.23 100.805 1864.7 303.794 2668.89"
        stroke="#C2F84F"
        strokeWidth="20"
        style={{
          pathLength,
          strokeDashoffset: useTransform(pathLength, (value) => 1 - value),
        }}
      />
    </svg>
  );
};



