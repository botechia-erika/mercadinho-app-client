import { PurchasesContainerTable } from "./styled.PurchasesTable";

export function PurchasesTable({ purchases }) {
  return (
    <PurchasesContainerTable>
      <thead>
        <tr>
          <td>Ticket</td>
          <td>Total Gasto</td>
          <td>Pontos da Compra</td>
        </tr>
      </thead>
      {purchases.map((purchase, index) => (
        <tr key={index}>
          <td> {purchase.id}</td>
          <td>R${purchase.finalPrice}</td>
          <td>{purchase.finalPrice * 0.3}</td>
        </tr>
      ))}
    </PurchasesContainerTable>
  );
}
