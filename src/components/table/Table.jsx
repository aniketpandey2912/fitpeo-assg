import {
  Flex,
  Image,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";

const products = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
    name: "Prod-1",
    stock: 2,
    price: 200,
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
    name: "Prod-2",
    stock: 3,
    price: 200,
  },
];

const TableDetails = () => {
  return (
    <TableContainer width="100%">
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Product Name</Th>
            <Th>Stock</Th>
            <Th>Price</Th>
            <Th>Total Sales</Th>
          </Tr>
        </Thead>
        <Tbody>
          {products?.map((product) => (
            <Tr key={product.id}>
              <Td>
                <Flex gap="2%">
                  <Image src={product.img} h="25px" />
                  <Text>{product.name}</Text>
                </Flex>
              </Td>
              <Td>{product.stock}</Td>
              <Td>{product.price}</Td>
              <Td>{product.stock * product.price}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default TableDetails;
