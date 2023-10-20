import {motion} from 'framer-motion'

function FullCur(){
    <motion.div
    initial={{ opacity: 0,  }}
    animate={{ opacity: 1,  }}
    transition={{ duration: 0.5 }}>
        <div className='beginner'>

        </div>
        <div className='intermediate'>

        </div>
        <div className='advanced'>

        </div>
        <div className='expert'>

        </div>
    </motion.div>
}

export default FullCur