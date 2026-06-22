import { Blueprint } from 'blueprint-design-kit';

const UserProgressBlueprint = new Blueprint({

    schema: {
        userId: {
            type: 'number',
            min: 1,
        },
    },

    variants: {
        '4 Completed (Bill)': {
            props: {
                userId: 1,
            },
        },
        '1 Completed (Ted)': {
            props: {
                userId: 2,
            },
        },
    },

});

export default UserProgressBlueprint;
