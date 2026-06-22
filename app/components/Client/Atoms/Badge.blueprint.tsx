import { Blueprint } from 'blueprint-design-kit';

const expectedStyle = {
    border: 'none',
    borderRadius: 30,
    margin: 2,
    padding: '4px 16px',
    display: 'inline-block',
    fontSize: 12,
    fontFamily: 'Helvetica, Arial, sans-serif',
};

const BadgeBlueprint = new Blueprint({

    schema: {
        backgroundColor: {
            default: '#333',
            type: ['color', 'undefined'],
            source: 'https://contentful.com/entries/1234',
        },
        textColor: {
            default: '#eee',
            type: ['color', 'undefined'],
            source: 'https://contentful.com/entries/1234',
        },
    },

    variants: {
        Default: {},
        Red: {
            props: { backgroundColor: 'red', textColor: 'white' },
        },
        FullGallery: {
            props: [
                { backgroundColor: 'LightCoral', textColor: 'FireBrick' },
                { backgroundColor: 'Moccasin', textColor: 'Chocolate' },
                { backgroundColor: 'Yellow', textColor: 'DarkGoldenrod' },
                { backgroundColor: 'LightGreen', textColor: 'SeaGreen' },
                { backgroundColor: 'LightSkyBlue', textColor: 'RoyalBlue' },
                { backgroundColor: 'Thistle', textColor: 'RebeccaPurple' },
            ],
            expectation: (<>
                <div style={{...expectedStyle, backgroundColor: "LightCoral", color: "FireBrick"}}>Most Popular</div>
                <div style={{...expectedStyle, backgroundColor: "Moccasin", color: "Chocolate"}}>Most Popular</div>
                <div style={{...expectedStyle, backgroundColor: "Yellow", color: "DarkGoldenrod"}}>Most Popular</div>
                <div style={{...expectedStyle, backgroundColor: "LightGreen", color: "SeaGreen"}}>Most Popular</div>
                <div style={{...expectedStyle, backgroundColor: "LightSkyBlue", color: "RoyalBlue"}}>Most Popular</div>
                <div style={{...expectedStyle, backgroundColor: "Thistle", color: "RebeccaPurple"}}>Most Popular</div>
            </>),
        },
    },

    links: [
        'https://figma.com/design/1234567890/1234567890',
        'https://github.com/blob/master/app/components/Client/Atoms/Badge.tsx',
        'https://contentful.com/entry/ABC123',
        'https://shopify.com/products/098765',
    ],

    notes: (
        <div>
            <p>Optional notes go here. Add links to <a href="ProgressBar">other components</a> to explain how they relate.</p>
        </div>
    ),

});

export default BadgeBlueprint;
