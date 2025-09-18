"use client";
import { cn } from "../lib/utils";
import React, { useEffect, useRef } from "react";

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  backgroundFill,
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}: {
  children?: any;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
  [key: string]: any;
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const getSpeed = () => {
    switch (speed) {
      case "slow":
        return 0.002;
      case "fast":
        return 0.008;
      default:
        return 0.004;
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const waveColors = colors ?? [
      "#7c3aed",
      "#a855f7", 
      "#c084fc",
      "#e879f9",
      "#f0abfc"
    ];

    const animate = () => {
      time += getSpeed();
      
      // Clear canvas
      ctx.fillStyle = backgroundFill || "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Create black background
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw elegant waves
      ctx.globalAlpha = waveOpacity;
      ctx.filter = `blur(${blur}px)`;

      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.strokeStyle = waveColors[i % waveColors.length];
        ctx.lineWidth = (waveWidth || 80) - i * 15;
        ctx.lineCap = "round";

        const amplitude = 60 + i * 15;
        const frequency = 0.006 + i * 0.001;
        const phase = time + i * Math.PI / 2;

        for (let x = 0; x <= canvas.width; x += 3) {
          const y = canvas.height / 2 + 
                   Math.sin(x * frequency + phase) * amplitude * Math.sin(time * 0.3 + i);
          
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        
        ctx.stroke();
      }

      // Add subtle gradient overlay
      const overlayGradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      overlayGradient.addColorStop(0, "rgba(124, 58, 237, 0.1)");
      overlayGradient.addColorStop(0.5, "rgba(168, 85, 247, 0.05)");
      overlayGradient.addColorStop(1, "rgba(192, 132, 252, 0.1)");
      ctx.globalAlpha = 0.8;
      ctx.fillStyle = overlayGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.filter = "none";
      ctx.globalAlpha = 1;
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, [colors, waveWidth, backgroundFill, blur, speed, waveOpacity]);

  return (
    <div
      className={cn(
        "h-screen flex flex-col items-center justify-center relative overflow-hidden",
        containerClassName
      )}
    >
      <canvas
        className="absolute inset-0 z-0"
        ref={canvasRef}
        style={{
          width: "100%",
          height: "100%",
        }}
      />
      <div className={cn("relative z-10", className)} {...props}>
        {children}
      </div>
    </div>
  );
};
