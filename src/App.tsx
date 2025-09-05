import { Github, Mail } from "lucide-react"

/* could add bg-zinc-950 to first div to sync with silica */

function App() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-black "> 
      <div className="text-zinc-400 font-mono flex flex-col items-center p-6 w-full max-w-3xl">
        {/* Header */}
        <header className="w-full border-b border-zinc-800 pb-4 mb-8">
          <h1 className="text-3xl font-bold text-stone-400">dorocha.dev</h1>
          <p className="text-zinc-500 text-sm">software engineer • cyber security enthusiast</p>
        </header>

        {/* Sections */}
        <main className="w-full space-y-16">
          {/* About */}
          <section>
            <h2 className="text-xl text-zinc-300 mb-2">about</h2>
            <p className="text-zinc-400 leading-relaxed">
              hi, i’m <span className="text-stone-400">dorocha</span>, a developer focused on 
              building big money printer web apps and learning cyber security in my free time.
            </p>
          </section>

          {/* Projects */}
          <section>
            <h2 className="text-xl text-zinc-300 mb-3">projects</h2>
            <p className="text-sm text-zinc-400 mb-3">while most of my projects are private, some are accessable.</p>

            <div className="grid gap-4">
              <div className="relative group bg-zinc-950 border border-zinc-800 rounded-xl p-4 hover:border-zinc-600 transition">
                {/* Default content */}
                <div className="transition-opacity duration-300 group-hover:opacity-0">
                  <h3 className="text-stone-400 font-semibold">silica</h3>
                  <p className="text-sm text-zinc-400">
                    end-to-end encrypted chatroom built with next.js + web sockets. messages use 'AES-256-GCM' with 'PBKDF2'-derived keys ('SHA-256', 100k iterations) and fresh 96-bit IVs. rooms are secured by cryptographically strong 16-character access codes (~95 bits entropy).
                  </p>
                </div>

                {/* Links on hover */}
                <div className="absolute inset-0 flex justify-center items-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="text-sm font-mono text-stone-400 space-x-2">
                    <a
                      href="https://silica.dorocha.dev"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      Visit
                    </a>
                    <span className="text-zinc-500">|</span>
                    <a
                      href="https://github.com/dorocha/silica"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      Source
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-xl text-zinc-300 mb-4">contact</h2>
            <div className="flex space-x-4">
              <a href="mailto:me@dorocha.dev" className="hover:text-stone-400 transition">
                <Mail className="w-5 h-5" />
              </a>
              <a href="https://github.com/dorocha" className="hover:text-stone-400 transition">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="mt-16 text-xs text-zinc-500">
          © {new Date().getFullYear()} dorocha.dev
        </footer>
      </div>
    </div>
  )
}

export default App
