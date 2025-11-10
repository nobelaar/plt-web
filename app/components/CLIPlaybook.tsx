'use client';

const groups = [
  {
    title: '1. Crear o importar una wallet',
    description:
      'Las cuentas siguen el estándar del ecosistema Cosmos. Podés crear una nueva o recuperar una existente para firmar transacciones.',
    commands: [
      { label: 'Crear una nueva wallet', code: 'pltd keys add miwallet', note: 'Genera la frase mnemónica y guarda la clave localmente.' },
      { label: 'Importar una wallet existente', code: 'pltd keys add miwallet --recover', note: 'Solicita la frase de recuperación.' },
      { label: 'Ver direcciones asociadas', code: 'pltd keys show miwallet -a' }
    ]
  },
  {
    title: '2. Consultar información básica',
    description:
      'Con la cuenta lista, el CLI permite revisar el estado de la red, balances y denominaciones nativas.',
    commands: [
      { label: 'Ver tu balance', code: 'pltd query bank balances $(pltd keys show miwallet -a)' },
      { label: 'Consultar información del nodo', code: 'pltd status' }
    ],
    extra: (
      <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-4 text-sm text-[#d0d2d8]">
        <p className="font-medium text-[#7de6ff]">Denominador nativo</p>
        <p className="mt-2 font-mono text-base text-white">uplt</p>
        <p className="mt-2 text-xs text-[#b5b8c0]">1 PLT = 1,000,000 uplt (convención estándar Cosmos).</p>
      </div>
    )
  },
  {
    title: '3. Recibir fondos',
    description:
      'En redes locales podés asignar saldo desde el génesis o mover tokens entre cuentas. En futuras testnets, un faucet entregará tokens de prueba.',
    extra: (
      <div className="space-y-2 rounded-2xl border border-white/5 bg-white/[0.03] p-4 text-sm text-[#d0d2d8]">
        <p className="font-medium text-[#7de6ff]">Formato de direcciones</p>
        <code className="block rounded-xl bg-black/40 p-3 font-mono text-base text-white">plt1xxxxx...</code>
        <p className="text-xs text-[#b5b8c0]">Compartí tu dirección para recibir fondos.</p>
      </div>
    )
  },
  {
    title: '4. Enviar una transacción simple',
    description:
      'Transferir PLT requiere definir monto, comisión y cadena. El gas puede calcularse automáticamente.',
    commands: [
      {
        label: 'Transferencia estándar',
        code: `pltd tx bank send \\
  $(pltd keys show miwallet -a) \\
  plt1direcciondestino \\
  1000000uplt \\
  --chain-id <CHAIN-ID> \\
  --from miwallet \\
  --gas auto \\
  --gas-adjustment 1.4 \\
  --gas-prices 0.025uplt`,
        note: '1000000uplt equivale a 1 PLT. El gas se ajusta de forma automática.'
      },
      { label: 'Verificar inclusión', code: 'pltd query tx <TX_HASH>' }
    ]
  },
  {
    title: '5. Administrar múltiples cuentas',
    description: 'Podés listar, exportar o inspeccionar claves según lo requiera la operación.',
    commands: [
      { label: 'Listar wallets locales', code: 'pltd keys list' },
      { label: 'Exportar una clave privada (usar con cuidado)', code: 'pltd keys export miwallet' },
      { label: 'Ver clave pública', code: 'pltd keys show miwallet --pubkey' }
    ]
  },
  {
    title: '6. Módulo de staking (para testnet futura)',
    description:
      'Cuando exista una red pública de pruebas, el staking permitirá delegar, reclamar recompensas y operar validadores.',
    commands: [
      {
        label: 'Delegar tokens',
        code: `pltd tx staking delegate \\
  <ADDRESS_VALIDATOR> \\
  5000000uplt \\
  --from miwallet \\
  --chain-id <CHAIN-ID> \\
  --gas auto --gas-prices 0.025uplt`
      },
      {
        label: 'Retirar recompensas',
        code: `pltd tx distribution withdraw-rewards <ADDRESS_VALIDATOR> \\
  --from miwallet \\
  --commission \\
  --chain-id <CHAIN-ID>`
      }
    ]
  },
  {
    title: '7. Interacciones avanzadas',
    description: 'Comandos orientados a quienes operan infraestructura y necesitan monitorear validadores.',
    commands: [
      { label: 'Consultar validadores', code: 'pltd query staking validators' },
      {
        label: 'Crear un validador',
        code: `pltd tx staking create-validator validator.json \\
  --from miwallet \\
  --chain-id <CHAIN-ID> \\
  --gas auto --gas-prices 0.025uplt`
      },
      { label: 'Ver información del validador', code: 'pltd query staking validator <VALOPER_ADDRESS>' }
    ]
  }
] as const;

const warnings = [
  'No compartas las cuentas creadas desde CLI.',
  'La frase mnemónica es la única forma de recuperar acceso.',
  'Los comandos pueden variar entre versiones del SDK.',
  'Los fondos en redes locales no tienen valor real.',
  'En testnets, los tokens se obtienen vía faucet.'
];

export function CLIPlaybook() {
  return (
    <div className="space-y-10">
      {groups.map((group) => (
        <article key={group.title} className="rounded-3xl border border-white/5 bg-white/[0.02] p-6 lg:p-8">
          <header className="space-y-2">
            <p className="text-xs uppercase tracking-[0.4em] text-[#7de6ff]/70">{group.title.split('.')[0]}</p>
            <h3 className="text-2xl font-spaceGrotesk text-white">{group.title}</h3>
            <p className="text-sm leading-relaxed text-[#d0d2d8]">{group.description}</p>
          </header>
          {group.commands && group.commands.length > 0 && (
            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              {group.commands.map((command) => (
                <div key={command.label} className="space-y-2 rounded-2xl border border-white/5 bg-[#040c18]/80 p-4">
                  <p className="text-sm font-medium text-white">{command.label}</p>
                  <pre className="overflow-x-auto rounded-xl bg-black/40 p-4 text-xs text-[#7de6ff]">
                    <code>{command.code}</code>
                  </pre>
                  {command.note && <p className="text-xs text-[#b5b8c0]">{command.note}</p>}
                </div>
              ))}
            </div>
          )}
          {group.extra && <div className="mt-6">{group.extra}</div>}
        </article>
      ))}
      <div className="rounded-3xl border border-[#ff72ff]/20 bg-[#190b1f]/60 p-6">
        <h4 className="text-lg font-spaceGrotesk text-white">Advertencias importantes</h4>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-sm text-[#d0d2d8]">
          {warnings.map((warning) => (
            <li key={warning}>{warning}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
