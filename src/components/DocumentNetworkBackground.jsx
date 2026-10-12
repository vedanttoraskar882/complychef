import React, { useEffect, useRef } from 'react';

export const DocumentNetworkBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let animationFrameId;
    let width = (canvas.width = canvas.parentElement.offsetWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
      initNodes();
    };

    window.addEventListener('resize', handleResize);

    const docLabels = ['INVOICE', 'ALLERGEN', 'ROTA', 'TRAINING', 'TEMP LOG', 'EHO-EVID', 'SPEC'];
    const nodeCount = Math.min(18, Math.max(8, Math.floor(width / 90)));
    let nodes = [];
    let pulses = [];

    const initNodes = () => {
      nodes = [];
      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          radius: Math.random() * 2.5 + 2,
          label: docLabels[i % docLabels.length],
          isDocument: i % 2 === 0,
          pulseTimer: Math.random() * 200,
        });
      }
    };

    initNodes();

    let lastPulseTime = 0;

    const render = (time) => {
      ctx.clearRect(0, 0, width, height);

      // Ambient warm golden glow spots
      const grad1 = ctx.createRadialGradient(width * 0.8, height * 0.2, 20, width * 0.8, height * 0.2, Math.max(width * 0.45, 300));
      grad1.addColorStop(0, 'rgba(255, 204, 50, 0.18)');
      grad1.addColorStop(0.5, 'rgba(255, 199, 44, 0.06)');
      grad1.addColorStop(1, 'rgba(250, 247, 238, 0)');
      ctx.fillStyle = grad1;
      ctx.fillRect(0, 0, width, height);

      const grad2 = ctx.createRadialGradient(width * 0.15, height * 0.7, 30, width * 0.15, height * 0.7, Math.max(width * 0.35, 250));
      grad2.addColorStop(0, 'rgba(237, 174, 0, 0.1)');
      grad2.addColorStop(1, 'rgba(250, 247, 238, 0)');
      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, width, height);

      // Connect nodes with lines
      const maxDist = 200;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.18;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(21, 24, 27, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();

            // Spawn gentle pulse travelling along line occasionally
            if (!prefersReducedMotion && time - lastPulseTime > 1800 && Math.random() < 0.03 && pulses.length < 4) {
              pulses.push({
                x1: nodes[i].x,
                y1: nodes[i].y,
                x2: nodes[j].x,
                y2: nodes[j].y,
                progress: 0,
                speed: 0.008 + Math.random() * 0.006,
              });
              lastPulseTime = time;
            }
          }
        }
      }

      // Render pulses
      if (!prefersReducedMotion) {
        for (let p = pulses.length - 1; p >= 0; p--) {
          const pulse = pulses[p];
          pulse.progress += pulse.speed;
          if (pulse.progress >= 1) {
            pulses.splice(p, 1);
            continue;
          }

          const curX = pulse.x1 + (pulse.x2 - pulse.x1) * pulse.progress;
          const curY = pulse.y1 + (pulse.y2 - pulse.y1) * pulse.progress;

          ctx.beginPath();
          ctx.arc(curX, curY, 3, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(237, 174, 0, 0.85)';
          ctx.fill();

          ctx.beginPath();
          ctx.arc(curX, curY, 7, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(255, 204, 50, 0.25)';
          ctx.fill();
        }
      }

      // Render & update nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        if (!prefersReducedMotion) {
          node.x += node.vx;
          node.y += node.vy;

          if (node.x < 20 || node.x > width - 20) node.vx *= -1;
          if (node.y < 20 || node.y > height - 20) node.vy *= -1;
        }

        if (node.isDocument) {
          // Render miniature document badge
          const rectW = 22;
          const rectH = 28;
          ctx.save();
          ctx.translate(node.x, node.y);
          
          // Document paper shadow & background
          ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
          ctx.strokeStyle = 'rgba(20, 25, 28, 0.12)';
          ctx.lineWidth = 1;
          
          // Folded corner sheet shape
          ctx.beginPath();
          ctx.roundRect(-rectW / 2, -rectH / 2, rectW, rectH, 3);
          ctx.fill();
          ctx.stroke();

          // Document text lines
          ctx.fillStyle = 'rgba(237, 174, 0, 0.8)';
          ctx.fillRect(-rectW / 2 + 4, -rectH / 2 + 5, rectW - 8, 2);
          ctx.fillStyle = 'rgba(20, 25, 28, 0.15)';
          ctx.fillRect(-rectW / 2 + 4, -rectH / 2 + 10, rectW - 8, 1.5);
          ctx.fillRect(-rectW / 2 + 4, -rectH / 2 + 14, rectW - 11, 1.5);
          ctx.fillRect(-rectW / 2 + 4, -rectH / 2 + 18, rectW - 9, 1.5);

          ctx.restore();
        } else {
          // Point node with inner golden core
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(255, 204, 50, 0.9)';
          ctx.fill();
          ctx.strokeStyle = 'rgba(20, 25, 28, 0.15)';
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    if (prefersReducedMotion) {
      render(0);
    } else {
      animationFrameId = requestAnimationFrame(render);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      <canvas ref={canvasRef} className="w-full h-full block opacity-70" />
    </div>
  );
};
