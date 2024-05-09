import { Box, Container, Flex, Heading, Image, Text, VStack, Button } from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();

  return (
    <Container maxW="container.xl" p={0}>
      <Box as="section" height="100vh" backgroundImage="url('/images/kayaking-banner.jpg')" backgroundSize="cover" backgroundPosition="center">
        <VStack spacing={4} justify="center" height="100%" bg="rgba(0, 0, 0, 0.5)" color="white">
          <Heading as="h1" size="2xl" textAlign="center">Get Out Kayak</Heading>
          <Text fontSize="xl">Explore the Scandinavian Outdoors</Text>
          <Button colorScheme="teal" size="lg" onClick={() => navigate('/book')}>Book Your Adventure</Button>
        </VStack>
      </Box>
      <Flex direction={{ base: "column", md: "row" }} py={10}>
        <VStack flex="1" p={5} align="start">
          <Heading as="h2" size="lg">About Us</Heading>
          <Text fontSize="md">Get Out Kayak offers premier kayaking experiences in the heart of Scandinavia. Join us to explore serene lakes and rivers surrounded by stunning natural landscapes.</Text>
        </VStack>
        <VStack flex="1" p={5} align="start">
          <Heading as="h2" size="lg">Services Offered</Heading>
          <Text fontSize="md">We provide guided tours, kayak rentals, and personalized adventure planning to ensure you have a memorable experience on the water.</Text>
        </VStack>
        <VStack flex="1" p={5} align="start">
          <Heading as="h2" size="lg">Kayak Centers</Heading>
          <Text fontSize="md">
            Explore our prime kayaking centers located at Stavsnäs and Sollenkroka, known for their beautiful, wild nature and popularity within the kayak community. These centers serve as the perfect starting points for your tours in the Stockholm archipelago.
          </Text>
          <Text fontSize="md">
            Don't miss our pop-up center at Bullandö, ideal for group events and kayak storage.
          </Text>
        </VStack>
      </Flex>
      <VStack spacing={5} py={10}>
        <Heading as="h2" size="lg">Booking Information</Heading>
        <Text fontSize="md">Ready to paddle? Book your next kayaking adventure with us easily through our online platform or contact us directly for more information.</Text>
        <Button colorScheme="teal" size="md">Book Now</Button>
      </VStack>
      <Flex direction={{ base: "column", md: "row" }} py={10} borderTop="1px" borderColor="gray.200">
        <VStack flex="1" p={5} align="start">
          <Heading as="h2" size="lg">Contact Us</Heading>
          <Text fontSize="md">Email: contact@getoutkayak.com</Text>
          <Text fontSize="md">Phone: +123 456 7890</Text>
        </VStack>
      </Flex>
    </Container>
  );
};

export default Index;