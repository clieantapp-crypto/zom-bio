export function FullPageLoader() {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-4">
          {/* Spinner */}
          <div className="relative h-16 w-16">
            <div className="absolute inset-0 rounded-full border-4 border-border"></div>
            <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-[#d9267d]"></div>
          </div>
          
          {/* Loading text */}
        </div>
      </div>
    )
  }
  