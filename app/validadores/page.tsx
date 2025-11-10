import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import { Section } from '../components/Section';

const stakingParameters = [
  'Inflación mínima anual: 7%',
  'Inflación máxima anual: 20%',
  'Variación máxima anual: 13%',
  'Objetivo de staking: 67% del suministro',
  'Emisión dinámica ajustada según la participación en staking'
];

const localnetSteps = [
  { title: 'Inicializar la cadena', command: 'pltd init mynode --chain-id pltd-localnet' },
  { title: 'Crear una cuenta local', command: 'pltd keys add validator' },
  {
    title: 'Agregar la cuenta al génesis con balance inicial',
    command: 'pltd genesis add-genesis-account validator 1000000000uplt'
  },
  {
    title: 'Generar la transacción de validador',
    command: 'pltd genesis gentx validator 1000000uplt --chain-id pltd-localnet'
  },
  { title: 'Incluir la transacción en el génesis', command: 'pltd genesis collect-gentxs' },
  { title: 'Verificar el estado del génesis', command: 'pltd genesis validate-genesis' },
  { title: 'Iniciar el nodo', command: 'pltd start' }
];

const publicTestnetSteps = [
  { title: 'Crear o importar la clave del validador', command: 'pltd keys add myvalidator' },
  { title: 'Preparar fondos para el self-delegation', command: 'Obtener tokens desde el faucet oficial cuando esté disponible.' },
  {
    title: 'Crear el archivo validator.json',
    command: `{
  "pubkey": {},
  "moniker": "myvalidator",
  "identity": "",
  "website": "",
  "details": "",
  "commission-rate": "0.10",
  "commission-max-rate": "0.20",
  "commission-max-change-rate": "0.01",
  "min-self-delegation": "1",
  "amount": "1000000uplt"
}`
  },
  {
    title: 'Enviar la transacción de creación de validador',
    command:
      'pltd tx staking create-validator validator.json \\\n    --from myvalidator \\\n    --chain-id <CHAIN-ID> \\\n    --gas auto --gas-adjustment 1.4 --gas-prices 0.025uplt'
  },
  {
    title: 'Verificar el estado del validador',
    command: 'pltd query staking validator $(pltd keys show myvalidator -a)'
  }
];

function CommandBlock({ command }: { command: string }) {
  return (
    <pre className="overflow-x-auto rounded-2xl border border-white/5 bg-[#0f1f33] p-4 text-sm text-[#d0d2d8]">
      <code>{command}</code>
    </pre>
  );
}

export default function ValidatorsPage() {
  return (
    <div className="min-h-screen bg-[#0a1b2e] text-[#b5b8c0]">
      <Navbar />
      <main className="space-y-16 py-16">
        <section className="section-container space-y-4">
          <p className="text-sm uppercase tracking-wide text-[#7de6ff]">Validadores</p>
          <h1 className="text-4xl font-spaceGrotesk text-white md:text-5xl">Guía para validadores</h1>
          <p className="max-w-3xl text-lg text-[#d0d2d8]">
            PLT todavía no cuenta con una red en funcionamiento, por lo que no existen validadores activos ni un
            sistema operativo de staking en producción. Esta guía reúne la información disponible para quienes
            quieran involucrarse desde el desarrollo del nodo y las primeras pruebas.
          </p>
        </section>

        <Section title="Parámetros iniciales de staking y economía">
          <p>
            PLT utiliza un modelo de Proof-of-Stake con parámetros iniciales que sirven para evaluar comportamiento,
            seguridad y gobernanza. Se trata de un punto de partida sujeto a ajustes cuando el proyecto avance.
          </p>
          <ul className="list-disc space-y-2 pl-6">
            {stakingParameters.map((parameter) => (
              <li key={parameter}>{parameter}</li>
            ))}
          </ul>
          <p>Estos valores no son definitivos y se revisarán junto con los primeros colaboradores.</p>
        </Section>

        <Section title="Crear una testnet privada para desarrollo">
          <p>
            Para experimentar con PLT hoy es posible levantar una testnet privada local. Permite probar el nodo{' '}
            <span className="mx-1 font-mono text-[#7de6ff]">pltd</span>, generar cuentas, crear bloques y evaluar módulos
            sin depender de una red pública.
          </p>
          <div className="space-y-6">
            {localnetSteps.map((step) => (
              <div key={step.title} className="space-y-2 rounded-2xl border border-white/5 bg-white/5 p-4">
                <p className="font-semibold text-white">{step.title}</p>
                <CommandBlock command={step.command} />
              </div>
            ))}
          </div>
          <p>
            Con estos pasos el nodo local producirá bloques y habilitará pruebas completas en un entorno controlado.
          </p>
        </Section>

        <Section title="Unirse como validador a una testnet pública">
          <p>
            Cuando PLT cuente con una testnet pública, quienes quieran validar podrán hacerlo enviando una transacción
            de creación de validador. Este será el flujo general:
          </p>
          <div className="space-y-6">
            {publicTestnetSteps.map((step) => (
              <div key={step.title} className="space-y-2 rounded-2xl border border-white/5 bg-white/5 p-4">
                <p className="font-semibold text-white">{step.title}</p>
                <CommandBlock command={step.command} />
              </div>
            ))}
          </div>
          <p>
            Una vez que la transacción se incluya en un bloque, el nodo comenzará a validar siempre que esté
            sincronizado y conectado a los peers de la testnet.
          </p>
        </Section>

        <Section title="Participación en la etapa actual">
          <p>
            Como la red aún no existe, la colaboración se centra en ensayos y revisión técnica. Las principales
            contribuciones posibles son:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Probar compilaciones tempranas del nodo pltd.</li>
            <li>Levantar testnets privadas y compartir resultados.</li>
            <li>Evaluar el diseño inicial del consenso y los parámetros económicos.</li>
            <li>Participar en discusiones técnicas y decisiones de gobernanza.</li>
            <li>Contribuir al código, documentación o herramientas auxiliares.</li>
            <li>Prepararse para operar nodos en la futura testnet pública.</li>
          </ul>
          <p>
            No hay compromisos económicos ni beneficios garantizados en esta etapa. Se trata de participar en la fase
            fundacional de un proyecto que está tomando forma desde cero.
          </p>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
