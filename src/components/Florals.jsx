// Delicate line-art floral branches (eucalyptus / gypsophila style)
// used to frame the page corners. Pure SVG so it stays crisp & light.

export function BranchTopRight({ className = "", stroke = "var(--charcoal)" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 240 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g stroke={stroke} strokeWidth="1.1" strokeLinecap="round" opacity="0.85">
        <path d="M238 8 C 180 30, 120 55, 70 110 C 45 138, 30 170, 22 210" />
        {[
          [70, 110, -34, -14],
          [92, 88, -34, -20],
          [118, 66, -30, -24],
          [150, 46, -26, -26],
          [186, 30, -20, -28],
          [55, 138, -32, -6],
          [40, 168, -30, 2],
        ].map(([x, y, dx, dy], i) => (
          <g key={i}>
            <path d={`M${x} ${y} q ${dx / 2} ${dy - 6}, ${dx} ${dy}`} />
            <path d={`M${x} ${y} q ${dx / 2 + 10} ${dy}, ${dx + 6} ${dy + 8}`} />
          </g>
        ))}
        {[
          [206, 18],
          [172, 34],
          [138, 52],
          [104, 74],
        ].map(([x, y], i) => (
          <circle key={`b${i}`} cx={x} cy={y} r="3.2" fill={stroke} opacity="0.5" stroke="none" />
        ))}
      </g>
    </svg>
  );
}

export function BranchBottomLeft({ className = "", stroke = "var(--charcoal)" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 240 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g stroke={stroke} strokeWidth="1.1" strokeLinecap="round" opacity="0.85">
        <path d="M2 212 C 60 190, 120 165, 170 110 C 195 82, 210 50, 218 10" />
        {[
          [170, 110, 34, 14],
          [148, 88, 34, 20],
          [122, 66, 30, 24],
          [90, 46, 26, 26],
          [54, 30, 20, 28],
          [185, 82, 32, 6],
          [200, 52, 30, -2],
        ].map(([x, y, dx, dy], i) => (
          <g key={i}>
            <path d={`M${x} ${y} q ${dx / 2} ${dy + 6}, ${dx} ${dy}`} />
            <path d={`M${x} ${y} q ${dx / 2 - 10} ${dy}, ${dx - 6} ${dy + 8}`} />
          </g>
        ))}
        {[
          [34, 200],
          [68, 180],
          [102, 158],
          [136, 132],
        ].map(([x, y], i) => (
          <circle key={`b${i}`} cx={x} cy={y} r="3.2" fill={stroke} opacity="0.5" stroke="none" />
        ))}
      </g>
    </svg>
  );
}

export function Sprig({ className = "", stroke = "var(--gold)" }) {
  return (
    <svg className={className} viewBox="0 0 80 40" fill="none" aria-hidden="true">
      <g stroke={stroke} strokeWidth="1.1" strokeLinecap="round">
        <path d="M6 34 C 26 26, 46 18, 74 6" />
        {[
          [22, 27, 8, -8],
          [36, 21, 9, -9],
          [50, 15, 9, -9],
          [30, 24, 6, 7],
          [44, 18, 7, 7],
        ].map(([x, y, dx, dy], i) => (
          <path key={i} d={`M${x} ${y} q ${dx / 2} ${dy}, ${dx} ${dy}`} />
        ))}
      </g>
    </svg>
  );
}
