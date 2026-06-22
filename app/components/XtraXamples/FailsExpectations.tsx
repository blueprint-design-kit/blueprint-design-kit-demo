'use client';

import { useLocale } from "../../contexts/LocaleContext";

export default function FailsExpectations() {
    const locale = useLocale();
    return <div style={{ background: '#b0c4de', padding: 10 }}>
        <div className="secondary">Some content here ({locale})</div>
    </div>;
}
