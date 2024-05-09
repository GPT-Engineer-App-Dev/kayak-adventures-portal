import { Box, Container, Flex, Heading, Image, Text, VStack, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, FormControl, FormLabel, Input, Select, Link } from "@chakra-ui/react";
import { useState } from 'react';

const Index = () => {
  const [isBookingModalOpen, setBookingModalOpen] = useState(false);

  const openBookingModal = () => setBookingModalOpen(true);
  const closeBookingModal = () => setBookingModalOpen(false);

  return (
    <Container maxW="container.xl" p={0}>
      <Box as="section" height="100vh" backgroundImage="url('/images/kayaking-banner.jpg')" backgroundSize="cover" backgroundPosition="center">
        <VStack spacing={4} justify="center" height="100%" bg="rgba(0, 0, 0, 0.5)" color="white">
          <Heading as="h1" size="2xl" textAlign="center">Get Out Kayak</Heading>
          <Text fontSize="xl">Explore the Scandinavian Outdoors</Text>
          <Button colorScheme="teal" size="lg" onClick={openBookingModal}>Book Your Adventure</Button>
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
      <Modal isOpen={isBookingModalOpen} onClose={closeBookingModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Book Your Kayaking Adventure</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Choose a Kayak Center</FormLabel>
              <Select placeholder="Select center">
                <option value="Stavsnäs">Stavsnäs</option>
                <option value="Sollenkroka">Sollenkroka</option>
                <option value="Bullandö">Bullandö</option>
              </Select>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Date</FormLabel>
              <Input type="date" />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Contact Email</FormLabel>
              <Input type="email" placeholder="Enter your email" />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="teal" mr={3} onClick={closeBookingModal}>
              Close
            </Button>
            <Button variant="ghost">Submit</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Box as="footer" width="full" py={5} px={10} bg="brand.900" color="white">
        <VStack spacing={3} align="center">
          <Text fontSize="sm">© 2023 Get Out Kayak. All rights reserved.</Text>
          <Flex direction="row" gap={4}>
            <Link href="/privacy-policy" color="teal.200">Privacy Policy</Link>
            <Link href="/terms-of-service" color="teal.200">Terms of Service</Link>
          </Flex>
          <Text fontSize="sm">Email: contact@getoutkayak.com | Phone: +123 456 7890</Text>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;