export function Progress({ value = 0, className = '' }) {
  return (
    <div className={`w-full bg-gray-200 rounded-full ${className}`}>
      <div
        className="h-full bg-gray-900 rounded-full"
        style={{ width: `${Math.max(0, Math.min(100, value))}%` }}
      />
    </div>
  );
}