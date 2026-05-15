export function SkeletonCard() {
  return (
    <div className="glass-card p-5 sm:p-7 animate-pulse">
      <div className="h-32 bg-white/[0.03] rounded-xl mb-4" />
      <div className="h-4 bg-white/[0.05] rounded w-3/4 mb-3" />
      <div className="h-3 bg-white/[0.03] rounded w-full mb-2" />
      <div className="h-3 bg-white/[0.03] rounded w-5/6" />
      <div className="flex gap-2 mt-4">
        <div className="h-5 w-14 bg-white/[0.03] rounded" />
        <div className="h-5 w-14 bg-white/[0.03] rounded" />
        <div className="h-5 w-14 bg-white/[0.03] rounded" />
      </div>
    </div>
  )
}

export function SkeletonText({ lines = 3, className = '' }) {
  return (
    <div className={`animate-pulse space-y-3 ${className}`}>
      {Array.from({ length: lines }).map((_, i) => (
        <div key={i} className={`h-3 bg-white/[0.04] rounded ${i === lines - 1 ? 'w-2/3' : 'w-full'}`} />
      ))}
    </div>
  )
}

export function SkeletonGrid({ count = 3 }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  )
}
