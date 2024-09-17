import Table from './Table'
const ProductTable = () => {
  return (
    <div>
    <Table.TableContainer>
      <Table.Thead>
        <Table.Row>
            <Table.ColumnHeader>Name</Table.ColumnHeader>
            <Table.ColumnHeader>Price</Table.ColumnHeader>
        </Table.Row>
      </Table.Thead>

      <Table.Tbody>
        <Table.Row>
            <Table.ColumnHeader colspan="2">Sporting Goods</Table.ColumnHeader>
        </Table.Row>
        <Table.Row>
            <Table.Column>Baseball</Table.Column>
            <Table.Column>$49.99</Table.Column>
        </Table.Row>
        <Table.Row>
            <Table.Column>Badminton</Table.Column>
            <Table.Column>$9.99</Table.Column>
        </Table.Row>
        <Table.Row>
            <Table.Column>Basketball</Table.Column>
            <Table.Column>$29.99</Table.Column>
        </Table.Row>
        <Table.Row>
            <Table.Column>Ipod Touch</Table.Column>
            <Table.Column>$99.99</Table.Column>
        </Table.Row>
        <Table.Row>
            <Table.Column>iPhone 5</Table.Column>
            <Table.Column>$399.99</Table.Column>
        </Table.Row>
        <Table.Row>
            <Table.Column>Nexus 5</Table.Column>
            <Table.Column>$399.99</Table.Column>
        </Table.Row>
        </Table.Tbody>
      </Table.TableContainer>
    </div>
  )
}

export default ProductTable
