import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Roadmap } from './components/Roadmap';
import { Section } from './components/Section';
import { Button } from './components/Button';

export default function Page() {
  return (
    <div className="min-h-screen bg-[#0a1b2e] text-[#b5b8c0]">
      <Navbar />
      <main>
        <Hero />
        <Section id="que-es-plt" title="Qué es PLT">
          <p>
            PLT es una blockchain soberana. Su propósito es construir una infraestructura digital
            donde el valor, la gobernanza y las decisiones pertenezcan a quienes mantienen la red
            activa. Nació en Argentina con la convicción de que una tecnología verdaderamente libre no
            necesita permisos ni dueños. PLT no busca reemplazar al sistema financiero, sino ofrecer
            una alternativa sustentable, auditable y controlada por sus propios participantes.
          </p>
        </Section>

        <Section id="como-funciona" title="Cómo funciona">
          <p>
            La red adopta un consenso Proof of Stake (PoS) y una arquitectura modular inspirada en el
            ecosistema Cosmos. Cada componente es auditable y puede evolucionar sin comprometer la
            estabilidad del núcleo.
          </p>
          <ul className="grid gap-4 rounded-2xl border border-white/5 bg-white/5 p-8 text-sm text-[#d0d2d8] md:grid-cols-2">
            <li>
              <span className="font-semibold text-[#00d4ff]">Motor de consenso:</span> CometBFT
              (Tendermint)
            </li>
            <li>
              <span className="font-semibold text-[#00d4ff]">Framework base:</span> Cosmos SDK
            </li>
            <li>
              <span className="font-semibold text-[#00d4ff]">Lenguaje:</span> Go 1.22+
            </li>
            <li>
              <span className="font-semibold text-[#00d4ff]">Interfaz:</span> CLI, gRPC y REST
            </li>
            <li className="md:col-span-2">
              <span className="font-semibold text-[#00d4ff]">Diseño modular y auditable</span>
            </li>
          </ul>
        </Section>

        <Section id="token-plt" title="Token PLT">
          <p>
            PLT es el token nativo de la red y la base de su economía interna. Su emisión mantiene el
            equilibrio entre seguridad, participación y estabilidad a largo plazo.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <p className="text-sm uppercase tracking-wide text-[#7de6ff]">Parámetros monetarios</p>
              <ul className="space-y-2 text-sm text-[#d0d2d8]">
                <li>Inflación mínima: 7% anual</li>
                <li>Inflación máxima: 20% anual</li>
                <li>Variación máxima por año: 13%</li>
                <li>Objetivo de staking: 67% del suministro total</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-[#00d4ff]/30 bg-[#102b45]/40 p-6 text-base text-[#d0d2d8]">
              “No existen reservas fundacionales ni asignaciones privadas: cada token nace del mismo
              proceso que mantiene viva la red. En PLT, la propiedad no se hereda: se valida.”
            </div>
          </div>
        </Section>

        <Section id="proposito" title="Propósito y visión">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'Autonomía',
                description:
                  'Participar en la red es equivalente a gobernarla. Cada decisión surge de los validadores y de la comunidad que respalda el consenso.'
              },
              {
                title: 'Transparencia',
                description:
                  'La arquitectura abierta permite auditar código, procesos y decisiones. Nada se esconde detrás de cajas negras.'
              },
              {
                title: 'Sostenibilidad',
                description:
                  'Un modelo de incentivos diseñado para mantenerse en el tiempo y adaptarse a las necesidades de quienes la operan.'
              }
            ].map((card) => (
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
            PLT está abierta a quienes quieran construir desde el inicio. Si sos desarrollador, podés
            contribuir al código. Si sos empresa o validador, podés asegurar la red y recibir
            recompensas por bloque. Si solo querés entender el proyecto, podés unirte a la comunidad y
            formar parte del proceso.
          </p>
          <div className="flex flex-col flex-wrap gap-4 sm:flex-row">
            <Button href="#" variant="primary">
              Documentación técnica
            </Button>
            <Button href="#" variant="outline">
              GitHub
            </Button>
            <Button href="#" variant="outline">
              Comunidad
            </Button>
            <Button href="#" variant="outline">
              Guía para validadores
            </Button>
          </div>
        </Section>

        <Section id="roadmap" title="Roadmap">
          <Roadmap />
        </Section>
      </main>
      <Footer />
    </div>
  );
}
