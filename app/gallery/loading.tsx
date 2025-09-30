export default function GalleryLoading() {
  return (
    <section className="p-6 space-y-4 animate-pulse">
      <div className="h-8 w-40 bg-gray-300 rounded" />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="h-40 bg-gray-200 rounded" />
        <div className="h-40 bg-gray-200 rounded" />
        <div className="h-40 bg-gray-200 rounded" />
        <div className="h-40 bg-gray-200 rounded" />
      </div>
    </section>
  );
}
