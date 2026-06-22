// A placeholder for implementing real tests.
// The important note here is that spec files are ignored from the list of Components

export const ProductCardExpectations = {
    "Default (US)": (
        <div style={{ backgroundColor: "grey", padding: "5px" }}>
            <div style={{ display: "flex" }}>
                <div
                    style={{
                        width: "100px",
                        height: "100px",
                        backgroundColor: "lightgray",
                        color: "#333",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    Image
                </div>
                <div style={{ paddingLeft: "10px" }}>
                    <h1 style={{ margin: "0" }}>
                        TITLE-US
                    </h1>
                    <p style={{ marginTop: "5px" }}>
                        1.23 USD
                    </p>
                </div>
            </div>
            <div style={{ paddingLeft: "5px" }}>
                <p>Product details here</p>
            </div>
        </div>
    ),
};
