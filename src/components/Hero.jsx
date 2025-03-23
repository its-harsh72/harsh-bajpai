import profilePic from '../assets/harsh-profile.jpg';
import Harsh_content from "../assets/Harsh_content.jsx";
import Harsh_Bajpai_Resume from "../assets/Harsh_Bajpai_Resume.pdf"
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const containerVariable = {
    hidden: { opacity: 0, x: -100 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            staggerChildren: 0.5,
        }
    }
}

const childVariants = {
    hidden: {
        opacity: 0,
        x: -100,
    },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
}

const Hero = () => {
    return (
        <div className="pb-4 lg:mb-36">
            <div className="flex flex-wrap lg: flex-row-reverse">
                <div className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:p-8">
                        <motion.img src={profilePic} alt='Harsh Bajpai' className='border border-stone-900 rounded-3xl' width={650} height={650} initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, delay: 1 }} />
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                    <motion.div initial="hidden" animate="visible" variants={containerVariable} className="flex flex-col items-center lg:items-start mt-10">
                        <motion.h2 variants={childVariants} className='pb-2 text-4xl tracking-tighter lg:text-8xl'>
                            Harsh Bajpai
                        </motion.h2>
                        <motion.span variants={childVariants} className=' bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text3xl tracking-tight  text-transparent'>
                            Front End Developer </motion.span>
                        <motion.p variants={childVariants} className='my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter break-words'>
                            <Harsh_content />
                        </motion.p>

                        <motion.a
                            variants={childVariants}
                            href={Harsh_Bajpai_Resume}  // The href should point to the PDF file path
                            target='_blank'  // Ensures the PDF opens in a new tab
                            rel='noopener noreferrer'
                            download  // Optional: this is for downloading the file when clicked
                            className='bg-white rounded-full p-4 text-sm text-stone-800 mb-10'
                        >
                            Download Resume
                        </motion.a> 
                     </motion.div>
                    <technologies />
                </div>
            </div>
            
        </div>
    )
}

export default Hero
