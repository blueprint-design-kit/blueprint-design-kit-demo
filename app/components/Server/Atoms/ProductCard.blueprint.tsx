import { Blueprint } from 'blueprint-design-kit';
import Link from 'next/link';
import { ProductCardExpectations } from './ProductCard.spec';

const ProductCardBlueprint = new Blueprint({

    schema: {
        title: {
            type: ['string', 'undefined'],
            default: 'TITLE-US',
            allow: ['TITLE-US', 'TITLE-EU', 'TITLE-FR'],
            source: 'https://contentful.com/entries/5678',
        },
        price: {
            default: { amount: 0, currency: 'USD' },
            type: (value) => {
                if (value) {
                    return typeof value.amount === 'number' && value.currency;
                }
                return true;
            },
            source: 'https://api.shopify.com/products/1234567890',
        },
    },

    variants: {
        'Default (US)': {
            props: {
                title: 'TITLE-US',
                price: { amount: 1.23, currency: 'USD' },
                children: <p>Product details here</p>,
            },
            expectation: ProductCardExpectations['Default (US)'],
        },
    },

    notes: (
        <div>
            <h2>This component is different based on your locale:</h2>
            <div>
                <ul style={{ marginLeft: 25 }}>
                    <li><Link href="/blueprint/Server/Atoms/ProductCard">English (US)</Link></li>
                    <li><Link href="/en-EU/blueprint/Server/Atoms/ProductCard">English (EU)</Link></li>
                    <li><Link href="/fr/blueprint/Server/Atoms/ProductCard">French (FR)</Link></li>
                </ul>
            </div>
        </div>
    ),

    locales: {
        'en-EU': {
            variants: {
                'Default (EU)': {
                    props: {
                        title: 'TITLE-EU',
                        price: { amount: 4.56, currency: 'EUR' },
                        children: <p>Extra bits here</p>,
                    },
                },
            },
        },
        'fr': {
            variants: {
                'Default (FR)': {
                    props: {
                        title: 'TITLE-FR',
                        price: { amount: 4.56, currency: 'EUR' },
                        children: <p>Plus de détails ici</p>,
                    },
                },
            },
        },
    },

});

export default ProductCardBlueprint;
