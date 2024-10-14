import React from 'react'

import { motion } from 'framer-motion'

const Reveal = ({ children }) => {
    return (
        <div xs={{
            position: 'relative',
            overflow: 'hidden'
        }}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate="visible"
            >
                {children}
            </motion.div>
        </div>
    )
}

export default Reveal