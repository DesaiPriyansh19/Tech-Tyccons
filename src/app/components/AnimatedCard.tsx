// components/AnimatedCard.jsx
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

export default function AnimatedCard({ children }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="mb-6"
    >
      {children}
    </motion.div>
  );
}
