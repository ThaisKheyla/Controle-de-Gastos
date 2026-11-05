function TotalGastos({ total = 0 }) {
  const totalFormatado = `R$ ${Number(total).toFixed(2).replace('.', ',')}`

  return (
    <section className="total-gastos">
      <span>Total</span>
      <strong>{totalFormatado}</strong>
    </section>
  )
}

export default TotalGastos
