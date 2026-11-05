import { CATEGORIAS } from '../categorias'

function FiltroCategoria({ categoriaSelecionada, aoMudarCategoria }) {
  return (
    <div className="campo filtro-categoria">
      <label htmlFor="filtro-categoria">Filtrar por categoria</label>
      <select
        id="filtro-categoria"
        value={categoriaSelecionada}
        onChange={(evento) => aoMudarCategoria(evento.target.value)}
      >
        <option value="Todas">Todas</option>
        {CATEGORIAS.map((categoria) => (
          <option key={categoria} value={categoria}>
            {categoria}
          </option>
        ))}
      </select>
    </div>
  )
}

export default FiltroCategoria
