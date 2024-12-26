export default function NotFoundPage() {
  return (
    <div className="grid h-[calc(100dvh-4rem)]  grid-cols-1 place-items-center">
      <main className="text-center text-sm space-y-1">
        <h1>404 - Page Not Found</h1>
        <h2 className="text-zinc-400">
          The page that you're looking for doesn't exist.
        </h2>
      </main>
    </div>
  )
}
