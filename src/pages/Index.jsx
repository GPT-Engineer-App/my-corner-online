import { Container, VStack, Box, Text, Heading, Image, IconButton, Link, HStack } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Box boxSize="150px">
          <Image src="https://images.unsplash.com/photo-1526413232644-8a40f03cc03b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG9mJTIwYSUyMHBlcnNvbnxlbnwwfHx8fDE3MTcxMTg2NTB8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Profile Picture" borderRadius="full" boxSize="150px" />
        </Box>
        <Heading as="h1" size="xl">
          John Doe
        </Heading>
        <Text fontSize="lg" textAlign="center">
          Hi, I'm John Doe. I'm a passionate software developer with experience in building web applications using React, Node.js, and other modern technologies.
        </Text>
        <HStack spacing={4}>
          <Link href="https://github.com/johndoe" isExternal>
            <IconButton aria-label="GitHub" icon={<FaGithub />} size="lg" />
          </Link>
          <Link href="https://linkedin.com/in/johndoe" isExternal>
            <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" />
          </Link>
          <Link href="https://twitter.com/johndoe" isExternal>
            <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" />
          </Link>
          <Link href="https://facebook.com/johndoe" isExternal>
            <IconButton aria-label="Facebook" icon={<FaFacebook />} size="lg" />
          </Link>
          <Link href="https://instagram.com/johndoe" isExternal>
            <IconButton aria-label="Instagram" icon={<FaInstagram />} size="lg" />
          </Link>
          <Link href="https://youtube.com/johndoe" isExternal>
            <IconButton aria-label="YouTube" icon={<FaYoutube />} size="lg" />
          </Link>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
