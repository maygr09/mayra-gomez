type ArchitectureDiagramProps = {
  layers: string[];
};

export default function ArchitectureDiagram({
  layers,
}: ArchitectureDiagramProps) {
  return (
    <ol className="flex flex-col items-center gap-2">
      {layers.map((layer, index) => (
        <li key={layer} className="flex flex-col items-center gap-2">
          {index > 0 && (
            <span aria-hidden="true" className="text-lavender-600">
              ↓
            </span>
          )}
          <span className="border border-foreground/10 px-6 py-3 text-center text-base text-foreground">
            {layer}
          </span>
        </li>
      ))}
    </ol>
  );
}
