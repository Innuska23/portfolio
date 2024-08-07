import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export const Particle = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        repulse: {
                            distance: 120,
                            duration: 0.8,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#c2c2c2e3",
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: true,
                        speed: 1.5,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 1000,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: { min: 0.1, max: 0.5 },
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 15 },
                    },
                    stroke: {
                        color: "#42446e",
                        width: 1,
                    },
                },
                detectRetina: true,
            }}
        />
    );
};