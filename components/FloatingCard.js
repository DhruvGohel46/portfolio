import { motion } from 'framer-motion';

export default function FloatingCard({ title, value, type, indicatorText, extraClass, delay = 0 }) {
    // type can be 'growth' or 'progress'
    return (
        <motion.div
            initial={{ y: 0 }}
            animate={{ y: [-12, 12, -12] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay }}
            className={`glass-card p-6 w-56 sm:w-64 z-20 ${extraClass}`}
        >
            <h4 className="text-gray-400 text-sm font-medium mb-2">{title}</h4>
            <div className="flex items-end justify-between gap-4">
                <span className="text-3xl font-extrabold text-white">{value}</span>
                {type === 'growth' && (
                    <span className="text-emerald-400 text-xs font-bold whitespace-nowrap bg-emerald-400/10 px-2.5 py-1 rounded-md">
                        {indicatorText}
                    </span>
                )}
            </div>
            {type === 'progress' && (
                <div className="mt-4 w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: indicatorText }}
                        transition={{ duration: 1.5, delay: 0.5 + delay }}
                        className="bg-gradient-to-r from-indigo-500 to-purple-500 h-full rounded-full"
                    />
                </div>
            )}
        </motion.div>
    );
}
