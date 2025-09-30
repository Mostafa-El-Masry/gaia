type SectionHeaderProps = {
  title: string;
  description?: string; // optional
};

export default function SectionHeader({ title, description }: SectionHeaderProps) {
  return (
    <header className="mb-6">
      <h1 className="text-2xl font-bold">{title}</h1>
      {description && <p className="text-gray-600 mt-2">{description}</p>}
    </header>
  );
}
