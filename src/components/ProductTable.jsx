import Productitem from './products/Productitem'
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
        <Productitem name="Tennis" price={49.9}/>
        <Productitem name="Badminton" price={99.9}/>
        <Productitem name="Basketball" price={29.9}/>
        <Table.Row>
            <Table.ColumnHeader colspan="2">Electronics</Table.ColumnHeader>
        </Table.Row>
        <Productitem name="Ipod Touch" price={99.99}/>
        <Productitem name="iPhone 5" price={399.99}/>
        <Productitem name="Nexus 5" price={399.99}/>
        </Table.Tbody>
      </Table.TableContainer>
    </div>
  )
}

export default ProductTable
