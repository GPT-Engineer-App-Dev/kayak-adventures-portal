import { Box, Button, Container, FormControl, FormLabel, Heading, Input, Select, VStack } from "@chakra-ui/react";

const BookingForm = () => {
  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={4} as="form">
        <Heading as="h1" size="xl">Book Your Kayak Adventure</Heading>
        <FormControl isRequired>
          <FormLabel htmlFor="center">Select Kayak Center</FormLabel>
          <Select id="center" placeholder="Select center">
            <option>Stavsnäs</option>
            <option>Sollenkroka</option>
            <option>Bullandö</option>
          </Select>
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="date">Date</FormLabel>
          <Input type="date" id="date" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input type="email" id="email" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="phone">Phone Number</FormLabel>
          <Input type="tel" id="phone" />
        </FormControl>
        <Button colorScheme="teal" type="submit" size="lg">Submit Booking</Button>
      </VStack>
    </Container>
  );
};

export default BookingForm;