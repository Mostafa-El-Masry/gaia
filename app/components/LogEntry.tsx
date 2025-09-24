
type LogEntryProps =  {
  id: number;
  date: string;
  title: string;
  content: string;
}

export default function LogEntry ({ id, date, title, content }: LogEntryProps) {
  return (
    <>
    <div className="bg-white mb-4 max-w-3xl mx-auto p-4 border border-gray-200 rounded-lg shadow-md hover:shadow-sm transition">
      <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      <span className="block text-sm text-gray-500">{date}</span>
      <p className="mt-2 text-gray-700">{content}</p>
    </div>
    </>
  );
};

