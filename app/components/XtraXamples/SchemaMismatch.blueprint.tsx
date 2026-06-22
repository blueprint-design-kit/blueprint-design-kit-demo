import { Blueprint } from 'blueprint-design-kit';

const SchemaMismatchBlueprint = new Blueprint({

    schema: {
        one: {
            type: 'string',
        },
        two: {
            type: 'string',
            allow: ['foo', 'bar'],
        },
        three: {
            type: 'integer',
            min: 1,
            max: 5,
        },
    },

    variants: {
        'Missing prop': {
            props: {},
        },
        'Wrong type': {
            props: {
                one: 123,
                two: 'foo',
                three: 3,
            },
        },
        'Not allowed': {
            props: {
                one: 'hello',
                two: 'badstring',
                three: 3,
            },
        },
        'Exceeds MinMax': {
            props: {
                three: 99,
            },
        },
        'Mutated in onPropsReady': {
            props: {
                one: 'hello',
                two: 'foo',
                three: 3,
            },
        },
    },

});

export default SchemaMismatchBlueprint;
