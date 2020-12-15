import React from "react";
import { loadingGif } from "../image";

const Loader = () => {
    return (
        <div className="fp-container">
            <img src={ loadingGif } className="fp-loader" alt="loading" />
        </div>
    );
};

export default Loader;
