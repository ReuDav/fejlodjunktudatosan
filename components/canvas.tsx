import React, { useEffect, useRef } from "react";

type Shape = {
    x: number;
    y: number;
    size: number;
    angle: number;
    rotationSpeed: number;
    speedX: number;
    speedY: number;
    color: string;
};

const Canvas: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const shapesRef = useRef<Shape[]>([]); // Updated type

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Generate 8 random shapes
        if (shapesRef.current.length === 0) {
            shapesRef.current = Array.from({ length: 8 }).map(() => ({
                x: Math.random() * canvas.width, // Random starting X position
                y: Math.random() * canvas.height, // Random starting Y position
                size: Math.random() * 300 + 300, // Size between 300 and 600
                angle: Math.random() * Math.PI * 2, // Random starting rotation
                rotationSpeed: Math.random() * 0.002 + 0.001, // Slow rotation speed
                speedX: (Math.random() * 2 - 1) * 1, // Random horizontal speed (-1 to 1)
                speedY: (Math.random() * 2 - 1) * 1, // Random vertical speed (-1 to 1)
                color: ["beige", "lightgray", "#FAE5D1"][
                    Math.floor(Math.random() * 3)
                    ], // Random color
            }));
        }

        const shapes = shapesRef.current;

        // Draw a shape
        const drawShape = (shape: Shape) => {
            const { x, y, size, angle, color } = shape;

            ctx.save();
            ctx.translate(x, y);
            ctx.rotate(angle);
            ctx.fillStyle = color;

            // Create circular/organic shapes
            ctx.beginPath();
            ctx.arc(0, 0, size / 2, 0, Math.PI * 2);
            ctx.closePath();
            ctx.fill();

            ctx.restore();
        };

        // Update shape positions and ensure a minimum distance between them
        const updateShapes = () => {
            for (let i = 0; i < shapes.length; i++) {
                const shape = shapes[i];

                // Update position
                shape.x += shape.speedX;
                shape.y += shape.speedY;

                // Rotate the shape
                shape.angle += shape.rotationSpeed;

                // Handle wrapping with 10% overflow limit
                const overflowX = canvas.width * 0.1;
                const overflowY = canvas.height * 0.1;

                if (shape.x - shape.size / 2 > canvas.width + overflowX)
                    shape.x = -shape.size / 2;
                if (shape.x + shape.size / 2 < -overflowX)
                    shape.x = canvas.width + shape.size / 2;

                if (shape.y - shape.size / 2 > canvas.height + overflowY)
                    shape.y = -shape.size / 2;
                if (shape.y + shape.size / 2 < -overflowY)
                    shape.y = canvas.height + shape.size / 2;

                // Ensure a minimum distance between shapes
                for (let j = 0; j < shapes.length; j++) {
                    if (i === j) continue; // Skip self-comparison
                    const other = shapes[j];
                    const dx = other.x - shape.x;
                    const dy = other.y - shape.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    // If too close, gently separate them
                    if (distance < shape.size / 2 + other.size / 2 + 20) {
                        const angle = Math.atan2(dy, dx);
                        const force = 0.5; // Separation force
                        shape.x -= Math.cos(angle) * force;
                        shape.y -= Math.sin(angle) * force;
                    }
                }
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
            updateShapes(); // Update positions and rotations
            shapes.forEach(drawShape); // Draw shapes
            requestAnimationFrame(animate); // Loop
        };

        animate();

        // Resize canvas dynamically
        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return <canvas ref={canvasRef} className="bg-white absolute top-0 left-0 w-full h-full z-0 blur-[50px]" />;
};

export default Canvas;
