'use server';

const imagePlaceholderStyle = {
    width: 100,
    height: 100,
    backgroundColor: 'lightgray',
    color: '#333',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
};

const detailsStyle = {
    paddingLeft: 10,
};

function formatPrice({ amount, currency }) {
    return `${amount.toFixed(2)} ${currency}`;
}

export default async function ProductCard({
    title,
    price,
    children,
}: {
    title: string;
    price: { amount: number, currency: string };
    children?: React.ReactNode;
}) {
    return (
        <div style={{ backgroundColor: 'grey', padding: 5 }}>
            <div style={{ display: 'flex' }}>
                <div style={imagePlaceholderStyle}>Image</div>
                <div style={detailsStyle}>
                    <h1 style={{ margin: 0 }}>{title}</h1>
                    <p style={{ marginTop: 5 }}>{formatPrice(price)}</p>
                </div>
            </div>
            <div style={{ paddingLeft: 5 }}>{children}</div>
        </div>
    );
}
