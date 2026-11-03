export default function SectionHead({ title, as = "h2" }: { title: string; as?: "h1" | "h2" }) {
  const Tag = as;
  return (
    <div className="section-head">
      <Tag>{title}</Tag>
    </div>
  );
}
