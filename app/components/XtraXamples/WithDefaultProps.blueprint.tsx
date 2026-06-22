import { Blueprint } from 'blueprint-design-kit';

const WithDefaultPropsBP = new Blueprint({

    schema: {
        one: {
            default: 'DEFAULT-STRING',
        },
        two: {
            default: { amount: 99.99, currency: 'USD' },
            type: (value) => {
                if (value) {
                    return typeof value.amount === 'number' && value.currency;
                }
                return true;
            },
        },
    },

});

export default WithDefaultPropsBP;
