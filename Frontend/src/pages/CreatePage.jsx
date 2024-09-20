import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  useColorModeValue,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { useProductStore } from "../store/product";

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: null,
    image: "",
  });

  const toast = useToast();
  const { createProduct } = useProductStore();

  const addProductHandler = async () => {
    const { success, message } = await createProduct(newProduct);

    if (!success) {
      toast({
        title: "Error",
        status: "error",
        duration: 5000,
        isClosable: true,
        description: message,
      });
    } else {
      toast({
        title: "Success",
        status: "success",
        duration: 5000,
        isClosable: true,
        description: message,
      });
    }
    setNewProduct({ name: "", price: '', image: "" });
  };

  return (
    <Container maxW={"container.sm"}>
      <VStack spacing={8}>
        <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
          Create New Product
        </Heading>

        <Box
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          p={6}
          rounded={"lg"}
          shadow={"md"}
        >
          <VStack spacing={4}>
            <Input
              type="text"
              name="name"
              placeholder="Product Name"
              value={newProduct.name}
              onChange={(e) =>
                setNewProduct({ ...newProduct, name: e.target.value })
              }
            />
            <Input
              type="number"
              name="price"
              placeholder="Product Price"
              value={newProduct.price}
              onChange={(e) =>
                setNewProduct({ ...newProduct, price: e.target.value })
              }
            />
            <Input
              type="text"
              name="image"
              placeholder="Product Image URL"
              value={newProduct.image}
              onChange={(e) =>
                setNewProduct({ ...newProduct, image: e.target.value })
              }
            />

            <Button
              type="submit"
              colorScheme="blue"
              onClick={addProductHandler}
              w={"full"}
            >
              Add Product
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default CreatePage;
