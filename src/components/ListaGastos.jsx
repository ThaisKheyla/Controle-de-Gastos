// Formata centavos no padrão brasileiro: R$ 12,50.
function formatarValor(valorCentavos) {
  return `R$ ${(valorCentavos / 100).toFixed(2).replace('.', ',')}`
}

function ListaGastos({ gastos = [] }) {
  return (
    <section className="lista-gastos">
      <h2>Gastos</h2>

      {gastos.length === 0 ? (
        <p className="lista-vazia">Nenhum gasto cadastrado.</p>
      ) : (
        <ul>
          {gastos.map((gasto) => (
            <li key={gasto.id} className="item-gasto">
              <div className="item-info">
                <strong>{gasto.descricao}</strong>
                <span className="item-categoria">{gasto.categoria}</span>
              </div>
              <span className="item-valor">{formatarValor(gasto.valorCentavos)}</span>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default ListaGastos
