import Table from 'react-bootstrap/Table';

function DarkExample() {
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Dinosaur Name</th>
          <th>Dinosaur Type</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Name</td>
          <td>Type</td>
        </tr>
        <tr>
          <td><input type = "button" value="Add"></input></td>
          <td>Name: <input type="text" name="name"></input></td>
          <td>Type: <input type="text" name="type"></input></td>
          </tr>
      </tbody>
    </Table>
  );
}

export default DarkExample;