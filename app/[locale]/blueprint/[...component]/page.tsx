import Blueprint from '../../../blueprint/[...component]/page';

export default function BlueprintWithLocale({ params, searchParams }) {
    return <Blueprint params={params} searchParams={searchParams} />;
};
