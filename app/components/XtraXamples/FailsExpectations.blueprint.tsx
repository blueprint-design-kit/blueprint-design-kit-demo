import { Blueprint } from 'blueprint-design-kit';
import Link from 'next/link';

const FailsExpectationsBlueprint = new Blueprint({

    schema: {},

    variants: {
        'Fails (US)': {
            expectation: <div style={{ background: '#b0c4de', padding: 8 }}>
                <div className="primary">Some content here</div>
            </div>,
        },
    },

    notes: (
        <div>
            <h2>There are different expectations based on locale:</h2>
            <div>
                <ul style={{ marginLeft: 25 }}>
                    <li><Link href="/blueprint/XtraXamples/FailsExpectations">English (US)</Link></li>
                    <li><Link href="/en-GB/blueprint/XtraXamples/FailsExpectations">English (GB)</Link></li>
                </ul>
            </div>
        </div>
    ),

    locales: {
        'en-GB': {
            variants: {
                'Fails (GB)': {
                    expectation: <div style={{ background: '#8ec48e', padding: 10 }}>
                        <div className="secondary">Some content here</div>
                    </div>,
                },
            },
        },
    },

});

export default FailsExpectationsBlueprint;
