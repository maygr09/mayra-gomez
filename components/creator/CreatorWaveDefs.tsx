// Shared SVG clip-path: straight on the left, softly wavy on the right.
// Uses objectBoundingBox units, so it scales with any image size.
export default function CreatorWaveDefs() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      width="0"
      height="0"
      className="absolute"
    >
      <defs>
        <clipPath id="creator-wave-right" clipPathUnits="objectBoundingBox">
          <path d="M0,0 L0.94,0 C1,0.08 0.88,0.16 0.94,0.25 C1,0.34 0.88,0.42 0.94,0.5 C1,0.58 0.88,0.66 0.94,0.75 C1,0.84 0.88,0.92 0.94,1 L0,1 Z" />
        </clipPath>
      </defs>
    </svg>
  );
}
