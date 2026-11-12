const fs = require('node:fs');
const path = require('node:path');
const { spawnSync } = require('node:child_process');

function registrar(nome, args, esperado = 0, comando = 'jest') {
  const bin = comando === 'tsc' ? 'typescript/bin/tsc' : 'jest/bin/jest';
  const inicio = new Date().toISOString();
  const resultado = spawnSync(process.execPath, [require.resolve(bin), ...args], {
    cwd: path.resolve(__dirname, '..'), encoding: 'utf8',
    env: { ...process.env, FORCE_COLOR: '0' }, maxBuffer: 20 * 1024 * 1024
  });
  if (resultado.error) throw resultado.error;
  const log = `Data UTC: ${inicio}\nNode: ${process.version}\nComando equivalente: npx ${comando} ${args.join(' ')}\nCódigo de saída: ${resultado.status}\nEsperado: ${esperado}\n\n${resultado.stdout}${resultado.stderr}`;
  fs.mkdirSync('evidencias', { recursive: true });
  fs.writeFileSync(path.join('evidencias', nome + '.txt'), log);
  process.stdout.write(log);
  if (resultado.status !== esperado) throw new Error(`Resultado inesperado em ${nome}`);
  return resultado;
}
module.exports = { registrar };
if (require.main === module) {
  const [nome, comando, ...args] = process.argv.slice(2);
  registrar(nome, args, 0, comando);
}
