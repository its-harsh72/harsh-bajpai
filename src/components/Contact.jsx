import ContactData from "./ContactData";
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="border-t border-stone-900 pb-28">
      <motion.h2  whileInView={{opacity:1, y:0}} initial={{opacity:0,y:-100}} transition={{duration:0.5}}  className="my-10 text-center text-4xl">Get in Touch</motion.h2>
      <div className="text-center tracking-tighter">
        <motion.p whileInView={{opacity:1, x:0}} initial={{opacity:0,x:-100}} transition={{duration:1}}  className="my-4">
          {ContactData.Address}
        </motion.p>
        <motion.p whileInView={{opacity:1, x:0}} initial={{opacity:0,x:100}} transition={{duration:1}}  className="my-4">
          {ContactData.PhoneNo}
        </motion.p>
        <p className="my-4">
          {ContactData.Email}
        </p>
      </div>
    </div>
  );
};

export default Contact;
