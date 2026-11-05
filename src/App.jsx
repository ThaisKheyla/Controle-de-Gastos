import { useState } from 'react'
import FormularioGasto from './components/FormularioGasto'
import ListaGastos from './components/ListaGastos'
import TotalGastos from './components/TotalGastos'
import './App.css'

function App() {
  const [gastos, setGastos] = useState([])
  const [categoriaFiltro, setCategoriaFiltro] = useState('Todas')

  // Adiciona um novo gasto ao final da lista.
  function adicionarGasto(gasto) {
    setGastos((gastosAtuais) => [...gastosAtuais, gasto])
  }

  // Remove o gasto pelo id; o total é recalculado automaticamente.
  function removerGasto(id) {
    setGastos((gastosAtuais) =>
      gastosAtuais.filter((gasto) => gasto.id !== id),
    )
  }

  // A lista e o total usam a mesma lista filtrada.
  const gastosVisiveis =
    categoriaFiltro === 'Todas'
      ? gastos
      : gastos.filter((gasto) => gasto.categoria === categoriaFiltro)

  const totalCentavos = gastosVisiveis.reduce(
    (soma, gasto) => soma + gasto.valorCentavos,
    0,
  )

  return (
    <div className="app">
      <header className="cabecalho">
        <h1>Controle de Gastos</h1>
        <p>Acompanhe seus gastos por categoria.</p>
      </header>

      <main className="conteudo">
        <FormularioGasto aoAdicionar={adicionarGasto} />

        <div className="painel-gastos">
          <ListaGastos
            gastos={gastosVisiveis}
            totalGastos={gastos.length}
            categoriaSelecionada={categoriaFiltro}
            aoMudarCategoria={setCategoriaFiltro}
            aoRemover={removerGasto}
          />
          <TotalGastos totalCentavos={totalCentavos} />
        </div>
      </main>
    </div>
  )
}

export default App
