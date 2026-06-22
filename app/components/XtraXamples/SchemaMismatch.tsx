
export default function SchemaMismatch({ one, two, three }) {
    const outArray = [one, two, three];
    return <>
        <div>Check the console for error messages about invalid props</div>
        <br />
        <div>{outArray.filter(Boolean).join(', ')}</div>
    </>
}
