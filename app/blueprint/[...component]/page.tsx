import BlueprintDesignKitUI from 'blueprint-design-kit/ui';
import welcome from '../docs/welcome';
import fontsColors from '../docs/fontsAndColors';
import { LOCALES } from '../../constants/locales';
import { notFound } from 'next/navigation';

/**
 * Use this hook to fetch or manipulate data before passing to any component
 */
async function onPropsReady(selectedComponent: string, selectedVariant: string, props: Record<string, object>) {
    if (selectedComponent === 'XtraXamples/SchemaMismatch' && selectedVariant === 'Mutated in onPropsReady') {
        const mutated = {
            ...props,
            one: 'goodbye',
        };
        console.log(`onPropsReady(${JSON.stringify(props)}) => ${JSON.stringify(mutated)}`);
        return mutated;
    }
    return props;
}

/**
 * This is the main page for the Blueprint component gallery.
 * It renders the BlueprintDesignKitUI component, which provides a UI for exploring and testing components defined in blueprints.
 */
export default async function Blueprint({ params, searchParams }) {
    const urlParams = await params;
    const urlSearchParams = await searchParams;

    const componentPath = decodeURIComponent((urlParams.component || []).join('/'));
    const locale = decodeURIComponent(urlParams.locale || '');
    if (!LOCALES.includes(locale)) {
        notFound();
    }

    const pageTitle = <span style={{ fontSize: 18 }}>
        Demo Design System &nbsp;
        <span style={{ fontSize: 13 }}>(Blueprint Design Kit)</span>
    </span>;

    const documentation = {
        'Welcome': welcome,
        'Fonts & Colors': fontsColors,
    };

    return <BlueprintDesignKitUI
        componentPath={componentPath}
        locale={locale}
        activeState={urlSearchParams}
        options={{
            baseUrl: `${urlParams.locale ? `/${urlParams.locale}` : ''}/blueprint`,
            pageTitle,
            documentation,
            onPropsReady,
            deviceMode: {
                includeTablet: true,
            },
            // pageTitle: <h2>My Design System</h2>,
            // componentMenu: {
            //     searchBar: false,
            // },
            // darkMode: {
            //     customClassName: 'dark-mode',
            // },
            // copyJSX: false,
        }}
    />;
}
