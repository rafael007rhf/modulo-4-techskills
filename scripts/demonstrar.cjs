// Execute sem outro Jest em paralelo: há alterações temporárias controladas.
const fs = require('node:fs');
const path = require('node:path');
const { registrar } = require('./registrar.cjs');
process.chdir(path.resolve(__dirname, '..'));

const demo = (nome, arquivo, esperado = 1) => registrar(nome, [
  '--config', 'jest.demo.config.js', '--runInBand', '--runTestsByPath',
  `demonstracoes/${arquivo}.demo.ts`
], esperado);
function temporariamente(arquivo, alterar, executar) {
  const original = fs.readFileSync(arquivo, 'utf8');
  try {
    const alterado = alterar(original);
    if (alterado === original) throw new Error(`Mutação não aplicada: ${arquivo}`);
    fs.writeFileSync(arquivo, alterado);
    executar();
  } finally { fs.writeFileSync(arquivo, original); }
}

demo('falha-arrays-toBe', 'arrays');
demo('falha-objeto-com-id', 'objeto');
demo('falha-contador-sem-hooks', 'contador-sem-hooks');
temporariamente('src/buscarDados.ts', texto => texto.replace('ok: true', 'ok: false'), () => {
  demo('promise-sem-await', 'promise-sem-await');
  demo('promise-sem-await-com-assertions', 'promise-com-contagem');
});
demo('promise-atrasada-com-assertions', 'promise-atrasada');

temporariamente('src/__tests__/contador.spec.ts', texto => {
  const blocos = texto.match(/^  it\([\s\S]*?^  \}\);/gm);
  if (!blocos || blocos.length !== 3) throw new Error('Blocos do contador não encontrados');
  const invertidos = [...blocos].reverse();
  return texto.replace(/^  it\([\s\S]*?^  \}\);/gm, () => invertidos.shift());
}, () => {
  fs.copyFileSync('src/__tests__/contador.spec.ts', 'evidencias/contador-ordem-invertida.source.txt');
  registrar('contador-ordem-invertida', ['--runInBand', 'contador', '--verbose']);
});
registrar('contador-ordem-aleatoria', ['--runInBand', 'contador', '--randomize', '--seed=1317', '--showSeed', '--verbose']);

const arquivoMensagem = 'src/mensagem.ts';
const mensagemFinal = fs.readFileSync(arquivoMensagem, 'utf8');
const arquivoSnap = 'src/__tests__/__snapshots__/mensagem.spec.ts.snap';
const snapshotFinal = fs.existsSync(arquivoSnap) ? fs.readFileSync(arquivoSnap, 'utf8') : null;
try {
  fs.writeFileSync(arquivoMensagem, mensagemFinal.replace('Seja bem-vindo', 'Bem-vindo'));
  registrar('snapshot-01-original', ['--runInBand', 'mensagem', '-u']);
  fs.copyFileSync(arquivoSnap, 'evidencias/snapshot-original.snap.txt');
  const original = fs.readFileSync(arquivoMensagem, 'utf8');
  fs.writeFileSync(arquivoMensagem, original.replace('Bem-vindo', 'Seja bem-vindo'));
  registrar('snapshot-02-diff', ['--runInBand', 'mensagem', '--ci'], 1);
  registrar('snapshot-03-atualizado', ['--runInBand', 'mensagem', '-u']);
  fs.copyFileSync(arquivoSnap, 'evidencias/snapshot-atualizado.snap.txt');
  registrar('snapshot-04-confirmado', ['--runInBand', 'mensagem', '--ci']);
} catch (erro) {
  fs.writeFileSync(arquivoMensagem, mensagemFinal);
  if (snapshotFinal !== null) fs.writeFileSync(arquivoSnap, snapshotFinal);
  throw erro;
}

temporariamente('src/sum.ts', texto => texto.replace('return a + b;', 'return a - b;'), () => {
  registrar('mutacao-sum-detectada', ['--runInBand', '--runTestsByPath', 'src/__tests__/sum.spec.ts'], 1);
});
registrar('mutacao-sum-revertida', ['--runInBand', '--runTestsByPath', 'src/__tests__/sum.spec.ts']);
console.log('Demonstrações concluídas; alterações temporárias revertidas e snapshot atualizado.');
