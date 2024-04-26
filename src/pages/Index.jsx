// Complete the Index page component here
// Use chakra-ui
import { Box, Container, Heading, Text, Image, SimpleGrid, Link } from "@chakra-ui/react";
import { FaExternalLinkAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <Heading as="h1" mb={6} textAlign="center">
        Data Observability Vendors
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        {/* Cribl */}
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={5}>
          <Image src="https://images.unsplash.com/photo-1620288627223-53302f4e8c74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxDcmlibCUyMGxvZ298ZW58MHx8fHwxNzE0MTU0NjkwfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Cribl Logo" />
          <Heading as="h3" size="lg" mt={4}>
            Cribl
          </Heading>
          <Text mt={2}>Cribl is a leading data observability platform that helps streamline your data pipelines through observability and control. It optimizes your data flow between sources and destinations, reducing costs and improving performance.</Text>
          <Link href="https://cribl.io" isExternal color="blue.500" mt={4} display="flex" alignItems="center">
            Visit Cribl <FaExternalLinkAlt ml={2} />
          </Link>
        </Box>

        {/* Databahn */}
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={5}>
          <Image src="https://images.unsplash.com/photo-1620288627223-53302f4e8c74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxEYXRhYmFobiUyMGxvZ298ZW58MHx8fHwxNzE0MTU0NjkwfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Databahn Logo" />
          <Heading as="h3" size="lg" mt={4}>
            Databahn
          </Heading>
          <Text mt={2}>Databahn offers a comprehensive data observability solution designed to ensure the reliability and integrity of data in complex systems. It provides deep insights and analytics to manage data effectively.</Text>
          <Link href="https://databahn.com" isExternal color="blue.500" mt={4} display="flex" alignItems="center">
            Visit Databahn <FaExternalLinkAlt ml={2} />
          </Link>
        </Box>
      </SimpleGrid>
    </Container>
  );
};

export default Index;
