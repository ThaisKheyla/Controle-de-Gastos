import FiltroCategoria from './FiltroCategoria'

// Formata centavos no padrão brasileiro: R$ 12,50.
function formatarValor(valorCentavos) {
  return `R$ ${(valorCentavos / 100).toFixed(2).replace('.', ',')}`
}

function ListaGastos({
  gastos = [],
  totalGastos = 0,
  categoriaSelecionada = 'Todas',
  aoMudarCategoria,
  aoRemover,
}) {
  const listaVazia = gastos.length === 0
  const mensagemVazia =
    totalGastos === 0
      ? 'Nenhum gasto cadastrado.'
      : 'Nenhum gasto nesta categoria.'

  return (
    <section className="lista-gastos">
      <h2>Gastos</h2>

      <FiltroCategoria
        categoriaSelecionada={categoriaSelecionada}
        aoMudarCategoria={aoMudarCategoria}
      />

      {listaVazia ? (
        <p className="lista-vazia">{mensagemVazia}</p>
      ) : (
        <ul>
          {gastos.map((gasto) => (
            <li key={gasto.id} className="item-gasto">
              <div className="item-info">
                <strong>{gasto.descricao}</strong>
                <span className="item-categoria">{gasto.categoria}</span>
              </div>

              <div className="item-acoes">
                <span className="item-valor">
                  {formatarValor(gasto.valorCentavos)}
                </span>
                <button
                  type="button"
                  className="botao-remover"
                  onClick={() => aoRemover(gasto.id)}
                  aria-label={`Remover gasto ${gasto.descricao}`}
                >
                  Remover
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default ListaGastos
