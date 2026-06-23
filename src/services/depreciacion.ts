export function calcularDepreciacion(
  precio: number,
  kilometros: number,
  llantas: string
) {
  let valor = precio;

  valor -= kilometros * 50;

  if (llantas === "Malas") {
    valor -= 500000;
  }

  const revision = kilometros > 50000;

  return {
    valor: Math.round(valor),
    revision,
  };
}