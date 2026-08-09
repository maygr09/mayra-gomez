type ProseProps = {
  paragraphs: string[];
};

export default function Prose({ paragraphs }: ProseProps) {
  return (
    <>
      {paragraphs.map((paragraph, index) => (
        <p key={index} className={index > 0 ? "mt-4" : undefined}>
          {paragraph}
        </p>
      ))}
    </>
  );
}
