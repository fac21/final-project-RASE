import React, { useState, useRef } from 'react';
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
    const [open, setOpen] = useState(false);
    return <Component open={open}
        setOpen={setOpen} {...pageProps}
    />;
}


export default MyApp;