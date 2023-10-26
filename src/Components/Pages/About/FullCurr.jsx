import {motion} from 'framer-motion'

function FullCur(){
    <motion.div
    initial={{ opacity: 0,  }}
    animate={{ opacity: 1,  }}
    transition={{ duration: 0.5 }}>
        <div className='beginner'>
    Be good.
        </div>
        <div className='intermediate'>
Be better.
        </div>
        <div className='advanced'>
Be the best.
        </div>
        <div className='expert'>

        </div>
    </motion.div>
}

export default FullCur