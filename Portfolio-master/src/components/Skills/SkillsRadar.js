import React, { useRef, useEffect } from "react";
import { skillScores } from "../../data/portfolioData";

function point(angle, radius, cx, cy) {
  return [cx + Math.cos(angle) * radius, cy + Math.sin(angle) * radius];
}

function SkillsRadar({ size = 320 }) {
  const ref = useRef(null);

  useEffect(() => {
    // simple SVG radar built from skillScores
    if (!ref.current) return;
    const svg = ref.current;
    const cx = size / 2;
    const cy = size / 2;
    const levels = 4;
    const keys = Object.keys(skillScores);
    const max = 100;
    const angleStep = (Math.PI * 2) / keys.length;

    // clear
    while (svg.firstChild) svg.removeChild(svg.firstChild);

    // draw grid
    for (let lvl = levels; lvl >= 1; lvl--) {
      const r = (size / 2 - 40) * (lvl / levels);
      const path = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
      const points = keys.map((k, i) => {
        const a = i * angleStep - Math.PI / 2;
        const [x, y] = point(a, r, cx, cy);
        return `${x},${y}`;
      });
      path.setAttribute("points", points.join(" "));
      path.setAttribute("fill", lvl % 2 === 0 ? "rgba(255,255,255,0.02)" : "rgba(255,255,255,0.0)");
      path.setAttribute("stroke", "rgba(255,255,255,0.06)");
      svg.appendChild(path);
    }

    // draw axes and labels
    keys.forEach((k, i) => {
      const a = i * angleStep - Math.PI / 2;
      const [x, y] = point(a, size / 2 - 30, cx, cy);
      const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
      line.setAttribute("x1", cx);
      line.setAttribute("y1", cy);
      line.setAttribute("x2", x);
      line.setAttribute("y2", y);
      line.setAttribute("stroke", "rgba(255,255,255,0.06)");
      svg.appendChild(line);

      const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
      text.setAttribute("x", x);
      text.setAttribute("y", y);
      text.setAttribute("fill", "#e9fdf8");
      text.setAttribute("font-size", "11");
      text.setAttribute("text-anchor", i === 0 || i === keys.length / 2 ? "middle" : (x > cx ? "start" : "end"));
      text.textContent = k;
      svg.appendChild(text);
    });

    // polygon for scores
    const poly = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
    const pts = keys.map((k, i) => {
      const val = Math.max(0, Math.min(max, skillScores[k] || 40));
      const r = ((val / max) * (size / 2 - 40));
      const a = i * angleStep - Math.PI / 2;
      const [x, y] = point(a, r, cx, cy);
      return `${x},${y}`;
    });
    poly.setAttribute("points", pts.join(" "));
    poly.setAttribute("fill", "rgba(43,227,184,0.12)");
    poly.setAttribute("stroke", "rgba(43,227,184,0.38)");
    poly.setAttribute("stroke-width", "2");
    svg.appendChild(poly);

  }, [size]);

  return (
    <div className="skills-radar">
      <svg ref={ref} width={size} height={size} />
    </div>
  );
}

export default SkillsRadar;
