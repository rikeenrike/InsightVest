interface InfoCardProps {
  title: string;
  description: string;
  color: string;
  width: string;
}

export default function InfoCard({ title, description, color, width }: InfoCardProps) {
  return (
    <div className={`${color} ${width} h-[40vh] p-4 rounded-lg shadow-md`}>
      <h3 className="text-5xl font-bold mb-2">{title}</h3>
      <p className="text-2xl">{description}</p>
    </div>
  );
}