'use client';

import WDBlueprint from './WithDefaultProps.blueprint';

const linkStyle = {
    color: 'cornflowerblue',
    textDecoration: 'underline',
};

type Props = {
    one: string;
    two: { amount: number, currency: string };
};

export default function WithDefaultProps(props: Props) {
    const { withDefaultProps } = WDBlueprint.make();
    const { one, two } = withDefaultProps(props);

    return (
        <div>
            <div>{one}</div>
            <div>{two.amount} {two.currency}</div>
            <br />
            <div>
                When rendered in the real application, this component uses the default values from its blueprint schema because
                it implements <a style={linkStyle} href="https://github.com/blueprint-design-kit/blueprint-design-kit-demo/blob/main/app/components/XtraXamples/WithDefaultProps.tsx">withDefaultProps</a>.
            </div>
            <br />
            <div>The defaults from blueprint will be used only when a specific prop&apos;s value is undefined.</div>
        </div>
    );
}
