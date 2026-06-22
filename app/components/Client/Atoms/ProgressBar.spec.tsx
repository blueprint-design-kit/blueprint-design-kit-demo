export const ProgressBarExpectations = {
    High: (
        <div
            style={{
                width: "100%",
                height: "10px",
                borderWidth: "medium",
                borderStyle: "none",
                borderColor: "currentcolor",
                borderImage: "initial",
                backgroundColor: "rgb(204, 204, 204)",
            }}
        >
            <div
                style={{
                    width: "80%",
                    height: "100%",
                    backgroundColor: "rgb(24, 121, 107)",
                    borderWidth: "medium",
                    borderStyle: "none",
                    borderColor: "currentcolor",
                    borderImage: "initial",
                    transition:
                        "width 0.4s ease-in-out, background-color 0.4s",
                }}
            />
        </div>
    )
};
