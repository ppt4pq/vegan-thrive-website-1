"use client";

import { useEffect } from "react";

export default function InstagramWidget() {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://static.elfsight.com/platform/platform.js";
        script.async = true;
        document.body.appendChild(script);
    }, []);

    return (
        <div className="w-full flex justify-center my-10">
            <div
                className="elfsight-app-58f14885-28e9-4697-9246-89de40f1ea30"
                data-elfsight-app-lazy
            ></div>
        </div>
    );
}