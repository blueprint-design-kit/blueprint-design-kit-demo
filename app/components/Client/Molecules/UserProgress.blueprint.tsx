import { Blueprint } from 'blueprint-design-kit';

const UserProgressBlueprint = new Blueprint({

    schema: {
        userId: {
            type: 'number',
            min: 1,
        },
    },

    variants: {
        'Good progress (Bill)': {
            props: {
                userId: 1,
                children: <p>You are doing great!</p>,
            },
        },
        'Poor progress (Ted)': {
            props: {
                userId: 2,
                children: <p>You might need to catch up.</p>,
            },
        },
    },

    links: [
        'http://figma.com',
        'https://github.com/blob/master/app/components/Client/Molecules/UserProgress.tsx',
    ],

});

export default UserProgressBlueprint;
