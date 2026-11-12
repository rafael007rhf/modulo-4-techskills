class RelatorioDetalhado {
  onTestResult(_test, resultado) {
    for (const caso of resultado.testResults) {
      process.stdout.write(`[${caso.status}] ${caso.fullName}\n`);
    }
  }
}
module.exports = RelatorioDetalhado;
