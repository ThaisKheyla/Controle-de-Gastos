import FormularioGasto from './components/FormularioGasto'
import ListaGastos from './components/ListaGastos'
import TotalGastos from './components/TotalGastos'
import './App.css'

// Lista vazia por enquanto; o estado será adicionado nas próximas missões.
const GASTOS_INICIAIS = []

function App() {
  return (
    <div className="app">
      <header className="cabecalho">
        <h1>Controle de Gastos</h1>
        <p>Acompanhe seus gastos por categoria.</p>
      </header>

      <main className="conteudo">
        <FormularioGasto />

        <div className="painel-gastos">
          <ListaGastos gastos={GASTOS_INICIAIS} />
          <TotalGastos total={0} />
        </div>
      </main>
    </div>
  )
}

export default App
