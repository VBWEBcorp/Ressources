import Link from 'next/link'
import { Book, Rocket, Mail, Phone } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-[#264060]">
      {/* Effet de fond futuriste */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
      </div>

      {/* Contenu principal */}
      <div className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Logo et Titre */}
          <div className="text-center space-y-6">
            <h1 className="text-5xl sm:text-6xl font-bold text-white">
              VBWEB
            </h1>
            <p className="text-xl sm:text-2xl text-white/80">
              Consultant en Marketing Digital
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href="mailto:contact@vbweb.fr" 
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-[#4EBAEC]/10 hover:border-[#4EBAEC] transition-all duration-300"
            >
              <Mail className="w-5 h-5 text-[#4EBAEC]" />
              <span className="text-white/80">contact@vbweb.fr</span>
            </a>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
              <Phone className="w-5 h-5 text-[#4EBAEC]" />
              <span className="text-white/80">06 27 30 17 88</span>
            </div>
          </div>

          {/* Cards */}
          <div className="grid gap-8 sm:grid-cols-2">
            {/* Guide SEO */}
            <Link href="/guide-seo" className="group">
              <div className="h-full p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-[#4EBAEC]/10 hover:border-[#4EBAEC] transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#4EBAEC]/10 group-hover:bg-[#4EBAEC]/20 transition-all duration-300">
                    <Rocket className="w-7 h-7 text-[#4EBAEC]" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-[#4EBAEC] transition-colors duration-300">
                      Guide SEO
                    </h2>
                    <p className="text-white/70 leading-relaxed">
                      Découvrez les secrets d&apos;un référencement efficace et boostez votre visibilité en ligne.
                    </p>
                  </div>
                </div>
              </div>
            </Link>

            {/* Services */}
            <Link href="/services" className="group">
              <div className="h-full p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-[#4EBAEC]/10 hover:border-[#4EBAEC] transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#4EBAEC]/10 group-hover:bg-[#4EBAEC]/20 transition-all duration-300">
                    <Book className="w-7 h-7 text-[#4EBAEC]" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-[#4EBAEC] transition-colors duration-300">
                      Services
                    </h2>
                    <p className="text-white/70 leading-relaxed">
                      Développement web, SEO, et maintenance. Des solutions sur mesure pour votre succès digital.
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Présentation */}
          <div className="max-w-3xl mx-auto p-8 rounded-2xl bg-white/5 border border-white/10">
            <p className="text-lg text-white/80 leading-relaxed">
              Si vous êtes ici, c&apos;est probablement parce que vous cherchez un expert capable de vous accompagner 
              dans la réussite de votre projet web. En tant que consultant en marketing digital, je vous accompagne 
              que ce soit pour créer un site internet, optimiser votre référencement sur Google ou encore développer 
              des solutions web sur mesure.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
