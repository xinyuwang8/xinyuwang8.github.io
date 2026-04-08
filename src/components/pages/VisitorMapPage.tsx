'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function VisitorMapPage({ siteId }: { siteId: string }) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!siteId || !container) return;

        // Remove any previous instance
        const existing = container.querySelector('#clustrmaps');
        if (existing) existing.remove();

        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.id = 'clustrmaps';
        script.src = `//clustrmaps.com/map_v2.js?d=${siteId}&cl=ffffff&w=a`;
        script.async = true;
        container.appendChild(script);

        return () => {
            const el = container.querySelector('#clustrmaps');
            if (el) el.remove();
        };
    }, [siteId]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
        >
            <div className="mb-8">
                <h1 className="text-4xl font-serif font-bold text-primary mb-4">Visitor Map</h1>
                <p className="text-lg text-neutral-600 dark:text-neutral-500 max-w-2xl">
                    Visitors to this site from around the world.
                </p>
            </div>
            <div ref={containerRef} className="w-full" />
        </motion.div>
    );
}
