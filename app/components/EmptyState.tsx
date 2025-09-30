type EmptyStateProps = {
  message: string;
};

export default function EmptyState({ message }: EmptyStateProps) {
  return (
    <div className="text-center py-10 text-gray-500">
      <p>{message}</p>
    </div>
  );
}
