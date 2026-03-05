import { useEffect, useRef } from "react";

const CodeRain = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    const dpr = window.devicePixelRatio || 1;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";

      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener("resize", resize);

    const chars =
      "01{}[]()<>=;:./\\|+-*&^%$#@!~`ABCDEFGHIJKLMNOPQRSTUVWXYZアイウエオカキクケコ";

    const fontSize = 14;
    let columns = Math.floor(width / fontSize);

    const drops: number[] = [];
    const speeds: number[] = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100;
      speeds[i] = 0.5 + Math.random() * 1.5;
    }

    const gradient = ctx.createLinearGradient(0, 0, 0, height);
    gradient.addColorStop(0, "#00ffff");
    gradient.addColorStop(0.5, "#0ea5e9");
    gradient.addColorStop(1, "#22c55e");

    const draw = () => {
      ctx.fillStyle = "rgba(7,11,20,0.06)";
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = gradient;
      ctx.font = `${fontSize}px JetBrains Mono, monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];

        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.shadowBlur = 8;
        ctx.shadowColor = "#00ffff";

        ctx.fillText(char, x, y);

        if (y > height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i] += speeds[i];
      }

      animationRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        opacity: 0.35,
        mixBlendMode: "screen",
      }}
    />
  );
};

export default CodeRain;