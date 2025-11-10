import type { Metadata } from 'next';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Button } from '../components/Button';
import { CLIPlaybook } from '../components/CLIPlaybook';

export const metadata: Metadata = {
  title: 'Cómo usar PLT | PLT',
  description:
    'Guía práctica para levantar una testnet privada de PLT, gestionar cuentas con pltd y ejecutar operaciones básicas desde la terminal.'
};

export default function HowToUsePage() {
  return (
    <div className="min-h-screen bg-[#0a1b2e] text-[#b5b8c0]">
      <Navbar />
      <main className="space-y-16 pb-20">
        <section className="section-container space-y-6">
          <p className="text-xs uppercase tracking-[0.4em] text-[#7de6ff]/80">CLI básico</p>
          <h1 className="text-4xl font-spaceGrotesk text-white md:text-5xl">Cómo usar PLT desde terminal</h1>
          <p className="max-w-3xl text-lg leading-relaxed text-[#d0d2d8]">
            PLT todavía no cuenta con una red pública en funcionamiento. Sin embargo, es posible experimentar
            con el nodo <span className="font-mono text-white">pltd</span> en entornos locales o en futuras testnets privadas. Esta
            guía reune las operaciones esenciales para crear wallets, consultar balances, mover fondos y, cuando
            exista una testnet, interactuar con el módulo de staking.
          </p>
          <div className="grid gap-4 rounded-3xl border border-white/5 bg-white/[0.02] p-6 text-sm text-[#d0d2d8] md:grid-cols-3">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#7de6ff]">Supuestos</p>
              <p className="mt-2 text-base text-white">Red local o testnet</p>
              <p className="mt-1 text-xs text-[#b5b8c0]">
                Los ejemplos usan parámetros genéricos (<span className="font-mono text-white">&lt;CHAIN-ID&gt;</span>).
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#7de6ff]">Herramienta</p>
              <p className="mt-2 text-base text-white">Nodo `pltd`</p>
              <p className="mt-1 text-xs text-[#b5b8c0]">Incluye cliente CLI, gRPC y REST para automatizar flujos.</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#7de6ff]">Estado</p>
              <p className="mt-2 text-base text-white">Proyecto en construcción</p>
              <p className="mt-1 text-xs text-[#b5b8c0]">Cada comando puede variar según la versión del SDK.</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button href="/" variant="outline">
              Volver al inicio
            </Button>
            <Button href="#playbook" variant="primary">
              Ir al paso a paso
            </Button>
          </div>
        </section>

        <section id="playbook" className="section-container">
          <CLIPlaybook />
        </section>

        <section className="section-container space-y-4">
          <div className="rounded-3xl border border-white/5 bg-white/[0.02] p-6 text-sm leading-relaxed text-[#d0d2d8]">
            <p>
              <span className="font-semibold text-white">Recordatorio:</span> Los fondos utilizados en redes locales o de prueba
              no tienen valor económico. Cuando se habilite una testnet pública se comunicará el faucet oficial para solicitar
              tokens de práctica.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button href="#playbook" variant="primary">
              Repetir guía
            </Button>
            <Button href="/#participar" variant="outline">
              Compartir feedback
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
