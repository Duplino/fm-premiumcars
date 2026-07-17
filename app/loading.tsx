export default function Loading() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div
        className="w-10 h-10 rounded-full border-2 border-[#333333] border-t-[#D50000] animate-spin"
        role="status"
        aria-label="Cargando"
      />
    </div>
  )
}
