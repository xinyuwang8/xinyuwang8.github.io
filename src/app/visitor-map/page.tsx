import { getConfig } from '@/lib/config';
import VisitorMapPage from '@/components/pages/VisitorMapPage';

export const metadata = { title: 'Visitor Map' };

export default function Page() {
    const config = getConfig();
    return <VisitorMapPage siteId={config.features.clustrmaps_id || ''} />;
}
