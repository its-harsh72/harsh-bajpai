// import {logo} from "../assets/icons8-next.js-16.png"
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"
import Postman from '../assets/Postman.png';
import Nest from '../assets/NestJs.png';

const iconsVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10], // The motion from 10px down to -10px up
        transition: {
            duration: duration,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});
const Technologies = () => {
    return (
        <div className='pb-24'>
            <motion.h2 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 1.5 }} className='my-20 text-center text-4xl'>Technologies</motion.h2>
            <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1.5 }} className="flex flex-wrap items-center justify-center gap-4">
                <motion.div initial="initial" animate="animate" variants={iconsVariants(2.5)} className="p-4">
                    <i className="fa-brands fa-js text-7xl text-yellow-500"></i>
                </motion.div>
                <motion.div initial="initial" animate="animate" variants={iconsVariants(3)} className="p-4">
                    <i className="fa-brands fa-react text-7xl text-cyan-400"></i>
                </motion.div>
                <motion.div initial="initial" animate="animate" variants={iconsVariants(5)} className="p-4">
                    <i className="fa-brands fa-node-js text-7xl text-green-500"></i>
                </motion.div>
                <motion.div initial="initial" animate="animate" variants={iconsVariants(2)} className="p-4">
                    <i className="fa-brands fa-python text-7xl text-yellow-500 transform hover:scale-110 transition-transform duration-300 shadow-lg rounded-lg"></i>
                </motion.div>
                <motion.div initial="initial" animate="animate" variants={iconsVariants(7)} className="p-4">
                    <i className="fa-brands fa-envira text-7xl text-green-500"></i>
                </motion.div>
                <motion.div initial="initial" animate="animate" variants={iconsVariants(1.8)} className="p-4">
                    <img
                        src={Nest}
                        alt="NestJs"
                        className="rounded-full center bg-transparent w-20 h-auto"
                    />
                </motion.div>  

                <motion.div initial="initial" animate="animate" variants={iconsVariants(1.8)} className="p-4">
                    <img
                        src={Postman}
                        alt="Postman"
                        className="rounded-full center bg-transparent w-20 h-auto"
                    />
                </motion.div>
                <motion.div initial="initial" animate="animate" variants={iconsVariants(5)} className="p-4">
                    <i className="fa-brands fa-github text-7xl text-grey-500"></i>
                </motion.div>
                <motion.div initial="initial" animate="animate" variants={iconsVariants(6)} className="p-4">
                    <i className="fa-brands fa-docker text-7xl text-blue-500"></i>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Technologies
