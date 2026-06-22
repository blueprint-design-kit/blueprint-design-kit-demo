import { Blueprint } from "blueprint-design-kit";
import { ProgressBarExpectations } from "./ProgressBar.spec";

const ProgressBarBlueprint = new Blueprint({
    schema: {
        progress: {
            type: "integer",
            min: 0,
            max: 100,
        },
        status: {
            type: "string",
            optional: true,
            allow: ["good", "bad", "ok"],
        },
        onTapAction: {
            type: "function",
            optional: true,
        },
    },

    variants: {
        High: {
            props: {
                status: "good",
                progress: 80,
            },
            expectation: ProgressBarExpectations.High,
        },
        Med: {
            props: {
                status: "ok",
                progress: 44,
            },
        },
        Low: {
            props: {
                status: "bad",
                progress: 11,
            },
        },
        Default: {
            props: {
                progress: 1,
            },
        },
    },
});

export default ProgressBarBlueprint;
