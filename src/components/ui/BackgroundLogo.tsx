export default function BackgroundLogo() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Large background logo - just the icon part */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03]">
        <img 
          src="/logo.png" 
          alt="" 
          className="w-[500px] h-auto"
        />
      </div>
    </div>
  )
}