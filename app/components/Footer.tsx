export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center text-xs font-bold">
            V
          </div>
          <span className="font-semibold text-white">Vibe Labs</span>
          <span className="text-gray-600 text-sm ml-2">by Hashed</span>
        </div>

        <div className="flex items-center gap-8 text-sm text-gray-500">
          <a href="#about" className="hover:text-gray-300 transition-colors">About</a>
          <a href="#portfolio" className="hover:text-gray-300 transition-colors">Portfolio</a>
          <a href="#team" className="hover:text-gray-300 transition-colors">Team</a>
          <a href="#contact" className="hover:text-gray-300 transition-colors">Apply</a>
        </div>

        <p className="text-gray-600 text-sm">
          © 2025 Vibe Labs. 로컬 테스트 버전.
        </p>
      </div>
    </footer>
  );
}
