// Categorias disponíveis para o cadastro de gastos.
const CATEGORIAS = ['Alimentação', 'Transporte', 'Lazer', 'Outros']

function FormularioGasto() {
  // Nesta missão o formulário é apenas visual: sem estado e sem envio.
  return (
    <form className="formulario-gasto">
      <h2>Novo gasto</h2>

      <div className="campo">
        <label htmlFor="descricao">Descrição</label>
        <input
          id="descricao"
          name="descricao"
          type="text"
          placeholder="Ex.: Mercado"
          required
        />
      </div>

      <div className="campo">
        <label htmlFor="valor">Valor (R$)</label>
        <input
          id="valor"
          name="valor"
          type="number"
          min="0"
          step="0.01"
          placeholder="0,00"
          required
        />
      </div>

      <div className="campo">
        <label htmlFor="categoria">Categoria</label>
        <select id="categoria" name="categoria" defaultValue="Alimentação">
          {CATEGORIAS.map((categoria) => (
            <option key={categoria} value={categoria}>
              {categoria}
            </option>
          ))}
        </select>
      </div>

      <button type="submit" className="botao-adicionar">
        Adicionar gasto
      </button>
    </form>
  )
}

export default FormularioGasto
