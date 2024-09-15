import React, { useRef, useEffect } from "react";
import {useYMaps } from "@pbe/react-yandex-maps";

const CustomMap = () => {
    const mapRef = useRef(null);
    const ymaps = useYMaps(["Map"]);

    useEffect(() => {
        if (!ymaps || !mapRef.current) {
            return;
        }

        const myMap = new ymaps.Map(mapRef.current, {
            center: [55.76, 37.64],
            zoom: 10
        });

        myMap.events.add("click", function (e) {
            // Getting the click coordinate
            var coords = e.get("coords");
            console.log(coords.join(", "));
            // alert(coords.join(", "));
        });
    }, [ymaps]);

    return <div className="custom-map" ref={mapRef} />;
};

export default CustomMap;
