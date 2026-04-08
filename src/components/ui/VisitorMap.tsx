'use client';

import { useEffect, useRef } from 'react';

interface VisitorMapProps {
    siteId: string;
}

export default function VisitorMap({ siteId }: VisitorMapProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!siteId || !container) return;

        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.id = 'clustrmaps';
        script.src = `//clustrmaps.com/map_v2.js?d=${siteId}&cl=ffffff&w=a`;
        script.async = true;
        container.appendChild(script);

        return () => {
            const existing = container.querySelector('#clustrmaps');
            if (existing) existing.remove();
        };
    }, [siteId]);

    return (
        <div className="flex flex-col items-center gap-1">
            <p className="text-xs text-neutral-400 dark:text-neutral-600">Visitor Map</p>
            <div ref={containerRef} />
        </div>
    );
}
