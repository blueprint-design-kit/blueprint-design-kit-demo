'use client';

import { useDarkMode } from '../../../contexts/DarkModeContext';

import type { CSSProperties } from "react";

const badgeStyle = {
    border: 'none',
    borderRadius: 30,
    margin: 2,
    padding: '4px 16px',
    display: 'inline-block',
    fontSize: 12,
    fontFamily: 'Helvetica, Arial, sans-serif',
};

function getColorStyles(
    isDark: boolean,
    textColor: CSSProperties['color'],
    backgroundColor: CSSProperties['color'],
) {
    const light = { backgroundColor: '#333', color: '#eee' };
    const dark = { backgroundColor: '#eee', color: '#333' };
    const styles = isDark ? dark : light;
    if (backgroundColor) { styles.backgroundColor = backgroundColor; }
    if (textColor) { styles.color = textColor; }
    return styles;
}

type BadgeComponentType = {
    text: string;
    textColor: CSSProperties['color'];
    backgroundColor: CSSProperties['color'];
}

export default function BadgeComponent({ text = 'Most Popular', textColor, backgroundColor }: BadgeComponentType) {
    const { isDark } = useDarkMode();
    const colorStyles = getColorStyles(isDark, textColor, backgroundColor);
    return <div style={{ ...badgeStyle, ...colorStyles }}>{text}</div>;
}
