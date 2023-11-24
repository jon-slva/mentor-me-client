import React from 'react';
import clouds from '../../assets/fair_clouds_4k.png'
import ReactGlobe from "react-globe";
import map from '../../assets/2_no_clouds_4k.jpg'
import bump from '../../assets/elev_bump_4k.jpg'
import bgImage from '../../assets/galaxy_starfield.png'
// import markersJson from '../../data/sample-points copy.json';
// import markers from '../../data/markers.jsx';
import defaultMarkers from "../../markers.js";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
const { useEffect, useRef, useState } = React;


function markerTooltipRenderer(marker) {
    return `CITY: ${marker.city} (Value: ${marker.value})`;
}

const options = {
    markerTooltipRenderer
};

const World = ({ setMarkers, setEvent, setDetails, details, markers }) => {
    const randomMarkers = defaultMarkers.map((marker) => ({
        ...marker,
        value: Math.floor(Math.random() * 100)
    }));


    function onClickMarker(marker, markerObject, event) {
        setEvent({
            type: "CLICK",
            marker,
            markerObjectID: markerObject.uuid,
            pointerEventPosition: { x: event.clientX, y: event.clientY }
        });
        setDetails(markerTooltipRenderer(marker));
    }
    function onDefocus(previousFocus) {
        setEvent({
            type: "DEFOCUS",
            previousFocus
        });
        setDetails(null);
    }

    // if (!markers) {
    //     <><h1>loading</h1></>
    // }

    return (
        <>
            {/* {details && (
                <div
                    style={{
                        background: "white",
                        position: "absolute",
                        fontSize: 20,
                        bottom: 0,
                        right: 0,
                        padding: 12
                    }}
                >
                    <p>{details}</p>
                    <p>
                        EVENT: type={event.type}, position=
                        {JSON.stringify(event.pointerEventPosition)})
                    </p>
                </div>
            )}
            <div style={{ padding: 32 }}>
                <button onClick={() => setMarkers(randomMarkers)}>
                    Randomize markers
                </button>
                <button disabled={markers.length === 0} onClick={() => setMarkers([])}>
                    Clear markers
                </button>
                <button
                    disabled={markers.length === randomMarkers.length}
                    onClick={() =>
                        setMarkers([...markers, randomMarkers[markers.length]])
                    }
                >
                    Add marker
                </button>
                <button
                    disabled={markers.length === 0}
                    onClick={() => setMarkers(markers.slice(0, markers.length - 1))}
                >
                    Remove marker
                </button>
            </div> */}
            <ReactGlobe
                height="100vh"
                globeTexture={map}
                globeBackgroundTexture={bgImage}
                globeCloudsTexture={clouds}
                markers={markers}
                options={options}
                width="100%"
                onClickMarker={onClickMarker}
                onDefocus={onDefocus}

            />
        </>
    )
};

export default World;