import { useState } from 'react'
import { CATEGORIAS } from '../categorias'

// Aceita "12,50" e "12.50", devolvendo o valor em centavos.
function converterValor(texto) {
  return Math.round(Number(texto.trim().replace(',', '.')) * 100)
}

function FormularioGasto({ aoAdicionar }) {
  const [descricao, setDescricao] = useState('')
  const [valor, setValor] = useState('')
  const [categoria, setCategoria] = useState('Alimentação')
  const [erro, setErro] = useState('')

  function aoEnviar(evento) {
    evento.preventDefault()

    if (descricao.trim() === '') {
      setErro('Informe uma descrição.')
      return
    }

    const valorCentavos = converterValor(valor)

    if (valor.trim() === '' || Number.isNaN(valorCentavos) || valorCentavos <= 0) {
      setErro('Informe um valor maior que zero.')
      return
    }

    aoAdicionar({
      id: crypto.randomUUID(),
      descricao: descricao.trim(),
      valorCentavos,
      categoria,
    })

    setDescricao('')
    setValor('')
    setCategoria('Alimentação')
    setErro('')
  }

  return (
    <form className="formulario-gasto" onSubmit={aoEnviar} noValidate>
      <h2>Novo gasto</h2>

      <div className="campo">
        <label htmlFor="descricao">Descrição</label>
        <input
          id="descricao"
          name="descricao"
          type="text"
          placeholder="Ex.: Mercado"
          value={descricao}
          onChange={(evento) => {
            setDescricao(evento.target.value)
            setErro('')
          }}
          aria-invalid={Boolean(erro)}
          aria-describedby="erro-formulario"
        />
      </div>

      <div className="campo">
        <label htmlFor="valor">Valor (R$)</label>
        <input
          id="valor"
          name="valor"
          type="text"
          inputMode="decimal"
          placeholder="0,00"
          value={valor}
          onChange={(evento) => {
            setValor(evento.target.value)
            setErro('')
          }}
          aria-invalid={Boolean(erro)}
          aria-describedby="erro-formulario"
        />
      </div>

      <div className="campo">
        <label htmlFor="categoria">Categoria</label>
        <select
          id="categoria"
          name="categoria"
          value={categoria}
          onChange={(evento) => {
            setCategoria(evento.target.value)
            setErro('')
          }}
        >
          {CATEGORIAS.map((categoriaDisponivel) => (
            <option key={categoriaDisponivel} value={categoriaDisponivel}>
              {categoriaDisponivel}
            </option>
          ))}
        </select>
      </div>

      {erro && (
        <p id="erro-formulario" className="mensagem-erro" role="alert">
          {erro}
        </p>
      )}

      <button type="submit" className="botao-adicionar">
        Adicionar gasto
      </button>
    </form>
  )
}

export default FormularioGasto
