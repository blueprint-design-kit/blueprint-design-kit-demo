import { Blueprint } from 'blueprint-design-kit';

const ShowAllLinksBlueprint = new Blueprint({

    schema: {},

    links: [
        'https://figma.com/design/1234567890/1234567890',
        'https://github.com/blob/master/src/components/cart/CrossSell/CrossSellSection.tsx',
        'https://contentful.com',
        'https://shopify.com',
        'https://adobe.com',
        'https://atlassian.com',
        'https://analytics.google.com',
        'https://magento.com',
        'https://npmjs.com',
        'https://sketch.com/design/1234567890/1234567890',
        'https://tableau.com',
        {
            url: 'https://default-unrecognized.com/',
        },
        {
            url: 'https://foo.com/',
            type: 'Custom Icon',
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="none">
                <circle cx="13" cy="13" r="10" stroke="currentColor" strokeWidth="2" />
            </svg>,
        }
    ],

});

export default ShowAllLinksBlueprint;
