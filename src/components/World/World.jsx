import React from 'react';
import clouds from '../../assets/fair_clouds_4k.png'
import Globe from 'react-globe.gl';
import map from '../../assets/2_no_clouds_4k.jpg'
import bump from '../../assets/elev_bump_4k.jpg'
import bgImage from '../../assets/galaxy_starfield.png'
import * as THREE from 'three';
const { useEffect, useRef, useState } = React;
import markersJsx from '../../data/sample-points.jsx'
// import markersJson from '../../data/sample-points copy.json';
// import markers from '../../data/markers.jsx';

const World = () => {
    const [markers, setMarkers] = useState(null);
    const globeEl = useRef();

    useEffect(() => {
        const globe = globeEl.current;

        // Auto-rotate
        globe.controls().autoRotate = true;
        globe.controls().autoRotateSpeed = 0.20;

        // Add clouds sphere
        const CLOUDS_IMG_URL = clouds;
        const CLOUDS_ALT = 0.004;
        const CLOUDS_ROTATION_SPEED = -0.010; // deg/frame

        new THREE.TextureLoader().load(CLOUDS_IMG_URL, cloudsTexture => {
            const clouds = new THREE.Mesh(
                new THREE.SphereGeometry(globe.getGlobeRadius() * (1 + CLOUDS_ALT), 75, 75),
                new THREE.MeshPhongMaterial({ map: cloudsTexture, transparent: true })
            );
            globe.scene().add(clouds);

            (function rotateClouds() {
                clouds.rotation.y += CLOUDS_ROTATION_SPEED * Math.PI / 180;
                requestAnimationFrame(rotateClouds);
            })();
        });

        const handleResize = () => {
            const globe = globeEl.current;
            if (globe) {
                // Update globe size on window resize
                globe.renderer().setSize(window.innerWidth, window.innerHeight);
                globe.camera().aspect = window.innerWidth / window.innerHeight;
                globe.camera().updateProjectionMatrix();
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };



    }, []);

    // const markersData = JSON.parse(markersJson);
    console.log(markersJsx)
    // useEffect(() => {

    const sampleMarkers = [
        {
            id: 1,
            city: 'Singapore',
            color: 'red',
            coordinates: [1.3521, 103.8198],
            value: 50,
        },
        {
            id: 2,
            city: 'New York',
            color: 'blue',
            coordinates: [40.73061, -73.935242],
            value: 25,
        },
        {
            id: 3,
            city: 'San Francisco',
            color: 'orange',
            coordinates: [37.773972, -122.431297],
            value: 35,
        },
        {
            id: 4,
            city: 'Beijing',
            color: 'gold',
            coordinates: [39.9042, 116.4074],
            value: 135,
        },
        {
            id: 5,
            city: 'London',
            color: 'green',
            coordinates: [51.5074, 0.1278],
            value: 80,
        },
        {
            id: 6,
            city: 'Los Angeles',
            color: 'gold',
            coordinates: [29.7604, -95.3698],
            value: 54,
        }
    ]


    // const markersData = () => {
    //     // return markers;
    //     // setMarkers(sampleMarkers)
    // }
    // markersData()
    // }, [markers])

    if (!markers) {
        <><h1>loading</h1></>
    }

    return (<Globe
        ref={globeEl}
        animateIn={false}
        bumpImageUrl={bump}
        showAtmosphere
        backgroundImageUrl={bgImage}
        globeImageUrl={map}
    // markers={markers}
    />
    )
};

export default World;