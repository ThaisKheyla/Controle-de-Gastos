function TotalGastos({ totalCentavos = 0 }) {
  const totalFormatado = `R$ ${(totalCentavos / 100).toFixed(2).replace('.', ',')}`

  return (
    <section className="total-gastos">
      <span>Total</span>
      <strong>{totalFormatado}</strong>
    </section>
  )
}

export default TotalGastos
