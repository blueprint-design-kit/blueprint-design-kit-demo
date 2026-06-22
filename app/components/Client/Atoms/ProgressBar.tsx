'use client';

import { useDarkMode } from '../../../contexts/DarkModeContext';

function getBarColor(isDark: boolean, status = 'ok') {
    const dark = {
        good: '#53b5a7',
        bad: '#d74e31',
        ok: '#dab05e',
    };
    const light = {
        good: '#18796b',
        bad: '#da5151',
        ok: '#e1941c',
    };
    return isDark ? dark[status] : light[status];
}

type ProgressBarParams = {
    progress: number,
    status?: 'good' | 'bad' | 'ok';
    onTapAction?: () => void;
};

export default function ProgressBar({ progress = 1, status, onTapAction }: ProgressBarParams) {
    const { isDark } = useDarkMode();
    const barColor = getBarColor(isDark, status);

    return (
        <div style={{
            width: '100%',
            height: '10px',
            border: 'none',
            backgroundColor: isDark ? '#555' : '#ccc',
        }} onClick={() => {
            if (typeof onTapAction === 'function') {
                onTapAction();
            }
        }}>
            <div style={{
                width: `${progress}%`,
                height: '100%',
                backgroundColor: barColor,
                border: 'none',
                transition: 'width 0.4s ease-in-out, background-color 0.4s',
            }}></div>
        </div>
    );
}
