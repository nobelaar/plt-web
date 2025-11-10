import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Roadmap } from './components/Roadmap';
import { Section } from './components/Section';
import { Button } from './components/Button';
import { monetaryParameters, participationLinks, valuePillars } from './content/site-data';

export default function Page() {
  return (
    <div className="min-h-screen bg-[#0a1b2e] text-[#b5b8c0]">
      <Navbar />
      <main>
        <Hero />
        <Section id="que-es-plt" title="Qué es PLT">
          <p>
            PLT es un proyecto de blockchain en fase temprana. Está en construcción y busca establecer
            una infraestructura digital abierta, auditable y utilizable sin intermediarios.
          </p>
          <p>
            No pretende reemplazar sistemas existentes; explora un modelo alternativo que aprende de
            experiencias previas y documenta cada decisión. La red todavía no existe y todo avanza por
            medio de pruebas, discusiones técnicas y validaciones conceptuales.
          </p>
        </Section>

        <Section id="como-funciona" title="Cómo funciona">
          <p>
            La arquitectura base se apoya en Cosmos SDK para construir módulos personalizables y en
            CometBFT como motor de consenso Proof of Stake. Todo se implementa en Go para mantener un
            entorno conocido y auditable.
          </p>
          <p>
            Las interfaces iniciales previstas son CLI, gRPC y REST. Permiten operar nodos, integrar
            servicios y automatizar flujos sin depender de capas externas.
          </p>
          <p>
            Estos componentes son un punto de partida y pueden cambiar si la revisión técnica colectiva
            lo requiere.
          </p>
          <ul className="grid gap-4 rounded-2xl border border-white/5 bg-white/5 p-8 text-sm text-[#d0d2d8] md:grid-cols-2">
            <li>
              <span className="font-semibold text-[#00d4ff]">Motor de consenso:</span> CometBFT
            </li>
            <li>
              <span className="font-semibold text-[#00d4ff]">Framework base:</span> Cosmos SDK
            </li>
            <li>
              <span className="font-semibold text-[#00d4ff]">Lenguaje:</span> Go 1.22+
            </li>
            <li>
              <span className="font-semibold text-[#00d4ff]">Interfaces iniciales:</span> CLI, gRPC y REST
            </li>
            <li className="md:col-span-2">
              <span className="font-semibold text-[#00d4ff]">Notas:</span> Arquitectura sujeta a ajustes
              conforme avance el desarrollo.
            </li>
          </ul>
        </Section>

        <Section id="token-plt" title="Token PLT">
          <p>
            El token PLT es una pieza del proyecto, no un activo final. Forma parte del diseño
            económico que se está modelando para sostener la red cuando exista.
          </p>
          <p>
            De manera provisional se adoptan los parámetros de inflación del ecosistema Cosmos. Sirven
            como referencia para las discusiones actuales y pueden modificarse tras las revisiones en
            comunidad.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <p className="text-sm uppercase tracking-wide text-[#7de6ff]">Parámetros provisionales</p>
              <ul className="space-y-2 text-sm text-[#d0d2d8]">
                {monetaryParameters.map((parameter) => (
                  <li key={parameter}>{parameter}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-[#00d4ff]/30 bg-[#102b45]/40 p-6 text-base text-[#d0d2d8]">
              Estos valores no son definitivos. El modelo monetario queda abierto a comentarios,
              auditorías y ajustes colectivos antes de cualquier despliegue.
            </div>
          </div>
        </Section>

        <Section id="proposito" title="Propósito y visión">
          <div className="grid gap-6 md:grid-cols-3">
            {valuePillars.map((card) => (
              <div
                key={card.title}
                className="flex flex-col gap-3 rounded-2xl border border-white/5 bg-white/5 p-6"
              >
                <h3 className="text-2xl font-spaceGrotesk text-white">{card.title}</h3>
                <p className="text-sm leading-relaxed text-[#d0d2d8]">{card.description}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="participar" title="Participar">
          <p>
            Esta etapa es temprana y experimental. Buscamos desarrolladores que quieran revisar
            código, empresas interesadas en validar supuestos, comunidades que analicen el enfoque y
            observadores que documenten el proceso. Todo aporte ayuda a definir qué vale la pena
            llevar a testnet.
          </p>
          <div className="flex flex-col flex-wrap gap-4 sm:flex-row">
            {participationLinks.map((link) => (
              <Button key={link.label} href={link.href} variant={link.variant}>
                {link.label}
              </Button>
            ))}
          </div>
        </Section>

        <Section id="roadmap" title="Roadmap">
          <p>
            El plan refleja lo aprendido hasta ahora y puede ajustarse si las pruebas o la comunidad lo
            sugieren. Cada fase se documenta para que cualquiera pueda seguir el avance.
          </p>
          <Roadmap />
        </Section>
      </main>
      <Footer />
    </div>
  );
}
