const CHAVE_GASTOS = 'controle-gastos:gastos'

// Lê os gastos salvos no navegador, descartando dados inválidos.
export function carregarGastos() {
  try {
    const dados = localStorage.getItem(CHAVE_GASTOS)
    if (!dados) return []

    const gastos = JSON.parse(dados)
    if (!Array.isArray(gastos)) return []

    // Ignora registros inválidos de versões antigas ou dados corrompidos.
    return gastos.filter(
      (gasto) =>
        gasto &&
        typeof gasto.id === 'string' &&
        typeof gasto.descricao === 'string' &&
        typeof gasto.categoria === 'string' &&
        Number.isFinite(gasto.valorCentavos),
    )
  } catch {
    return []
  }
}

// Grava a lista no localStorage; sem suporte no navegador, segue em memória.
export function salvarGastos(gastos) {
  try {
    localStorage.setItem(CHAVE_GASTOS, JSON.stringify(gastos))
  } catch {
    // Sem localStorage disponível: o app continua funcionando em memória.
  }
}
