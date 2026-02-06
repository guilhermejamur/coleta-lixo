export default function LoadingSpinner() {
  return (
    <div className="w-full max-w-2xl mx-auto mt-8 flex flex-col items-center gap-4 animate-fadeIn">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 border-4 border-estre-green/20 rounded-full"></div>
        <div className="absolute inset-0 border-4 border-estre-green border-t-transparent rounded-full animate-spin"></div>
      </div>
      <p className="text-estre-gray text-sm">Buscando informações de coleta...</p>
    </div>
  );
}
