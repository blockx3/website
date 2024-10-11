import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';

function FirstPage({
  RefForScroll,
}: {
  RefForScroll: React.MutableRefObject<HTMLDivElement | null>;
}) {
  return (
    <div>
      <div className="absolute left-0 top-0 -z-50 h-screen max-h-screen w-full" />
      <div className="absolute left-0 top-0 -z-40 h-screen max-h-screen w-full overflow-clip">
        <motion.div
          className="absolute right-0 top-0 h-36 w-36 bg-red-300 opacity-50 blur-xl sm:h-64 sm:w-64"
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ['20%', '20%', '50%', '50%', '20%'],
          }}
          transition={{
            duration: 5,
            ease: 'easeInOut',
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-amber-400 opacity-20 blur-lg sm:h-64 sm:w-64"
          animate={{
            scale: [1, 2],
          }}
          transition={{
            duration: 1,
            ease: 'easeInOut',
            times: [0, 1],
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
      </div>
      <div className="grid h-screen grid-rows-2 lg:grid-cols-2 lg:grid-rows-1">
        <div className="lg:flex lg:flex-col lg:items-center lg:justify-center">
          <motion.div
            className="space-y-5 lg:space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-gradient-to-r from-sky-400 to-purple-600 bg-clip-text pt-8 text-center text-6xl font-bold tracking-wider text-transparent lg:text-start lg:text-9xl">
              BlockX3
            </div>
            <div className="text-center text-2xl tracking-wider text-slate-800 lg:text-start lg:text-4xl">
              Turning Ideas into Reality
            </div>
            <div className="text-center text-lg text-slate-600 lg:text-start">
              We do Open-Source Innovation Through Community Collaboration
            </div>
            <motion.div
              className="flex justify-center gap-4 lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button
                onClick={() => {
                  RefForScroll.current?.scrollIntoView({
                    behavior: 'smooth',
                  });
                }}
                className="min-w-40 rounded-full bg-gradient-to-r from-blue-800 to-purple-600 p-5 text-white shadow-xl transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl focus:outline-none"
              >
                Learn More
              </Button>
              <Button
                onClick={() => {
                  window.open('https://linktr.ee/blockx3', '_blank');
                }}
                variant={'secondary'}
                className="min-w-40 rounded-full bg-white p-5 text-black shadow-xl transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl focus:outline-none"
              >
                Join the Community
              </Button>
            </motion.div>
          </motion.div>
        </div>
        <motion.div
          className="flex justify-center lg:flex-col lg:items-center"
          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <Image
            src="https://static.aaraz.me/blockx3/blockx3_nobg.png"
            alt="Turning Ideas into Reality"
            fetchPriority="high"
            height={500}
            width={500}
            priority={true}
            className="h-[300px] w-[300px] rounded-lg p-4 sm:h-[400px] sm:w-[400px] md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px]"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default FirstPage;
