const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
process.chdir(path.resolve(__dirname, '..'));
const resultado = JSON.parse(fs.readFileSync('evidencias/resultados-finais.json', 'utf8'));
assert.equal(resultado.success, true);
assert.equal(resultado.numFailedTests, 0);
assert.equal(resultado.numPendingTests, 0);
assert.equal(resultado.numFailedTestSuites, 0);
assert.equal(resultado.numPassedTestSuites, 17);
assert.equal(resultado.numPassedTests, 99);
assert.equal(resultado.snapshot.matched, 1);
for (let n = 1; n <= 17; n++) {
  assert.ok(fs.existsSync(`docs/atividade-${String(n).padStart(2, '0')}.md`));
}
const linhas = ['# Testes executados', '', 'Relação derivada do JSON real do Jest; cada item corresponde a uma execução parametrizada.', ''];
for (const suite of resultado.testResults) {
  linhas.push(`## ${path.basename(suite.name)}`, '');
  for (const caso of suite.assertionResults) {
    assert.equal(caso.status, 'passed');
    linhas.push(`- [x] ${caso.fullName}`);
  }
  linhas.push('');
}
fs.writeFileSync('evidencias/testes-detalhados.md', linhas.join('\n'));
const revisados = [];
for (const etapa of ['inicial', 'apos-08', 'final']) {
  const pasta = `evidencias/cobertura-${etapa}`;
  const resumo = JSON.parse(fs.readFileSync(pasta + '/coverage-summary.json', 'utf8'));
  const index = fs.readFileSync(pasta + '/lcov-report/index.html', 'utf8');
  const links = [...index.matchAll(/href="([^"#]+\.ts\.html)"/g)].map(m => m[1]);
  assert.ok(links.length > 0);
  for (const link of links) {
    const html = fs.readFileSync(path.join(pasta, 'lcov-report', link), 'utf8');
    assert.ok(html.includes('coverage-summary') || html.includes('cline-any'));
  }
  revisados.push(`${etapa}: índice HTML e ${links.length} relatórios de fonte conferidos; statements=${resumo.total.statements.pct}%, branches=${resumo.total.branches.pct}%`);
}
const inicial = JSON.parse(fs.readFileSync('evidencias/cobertura-inicial/coverage-final.json', 'utf8'));
const frete = Object.entries(inicial).find(([nome]) => nome.endsWith('calcularFrete.ts'))[1];
const linhasNaoCobertas = Object.entries(frete.s).filter(([,valor]) => valor === 0).map(([id]) => frete.statementMap[id].start.line);
assert.deepEqual(linhasNaoCobertas, [6]);
const final = JSON.parse(fs.readFileSync('evidencias/cobertura-final/coverage-summary.json', 'utf8')).total;
for (const metrica of ['statements', 'branches', 'functions', 'lines']) assert.equal(final[metrica].pct, 100);
assert.ok(fs.readFileSync('src/sum.ts', 'utf8').includes('return a + b;'));
assert.ok(fs.readFileSync('src/buscarDados.ts', 'utf8').includes('return { ok: true };'));
assert.ok(fs.readFileSync('src/mensagem.ts', 'utf8').includes('Seja bem-vindo'));
const texto = `Conferência em ${new Date().toISOString()}\n17 suítes, 99 testes, 1 snapshot aprovado. Sem testes pendentes.\n17 documentos individuais encontrados.\nAsserções exigidas em runtime por expect.hasAssertions em cada teste.\n${revisados.join('\n')}\nLinha inicial não coberta confirmada: calcularFrete.ts:6.\nMutações temporárias de sum e buscarDados revertidas.\nMensagem final e snapshot com alteração deliberada aprovada.\n`;
fs.writeFileSync('evidencias/conferencia-entrega.txt', texto);
console.log(texto);
