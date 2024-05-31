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
        <VStack spacing={8}>
          <Box boxSize="150px">
            <Image src="https://images.unsplash.com/photo-1526413232644-8a40f03cc03b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG9mJTIwYSUyMHBlcnNvbnxlbnwwfHx8fDE3MTcxMTg2NTB8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Profile Picture" borderRadius="full" boxSize="150px" />
          </Box>
          <Box boxSize="150px">
            <Image src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxpbWFnZXxlbnwwfHx8fDE3MTcxMTg2NTB8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Sample Image 1" borderRadius="md" boxSize="150px" />
          </Box>
          <Box boxSize="150px">
            <Image src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxpbWFnZXxlbnwwfHx8fDE3MTcxMTg2NTB8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Sample Image 2" borderRadius="md" boxSize="150px" />
          </Box>
          <Box boxSize="150px">
            <Image src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxpbWFnZXxlbnwwfHx8fDE3MTcxMTg2NTB8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Sample Image 3" borderRadius="md" boxSize="150px" />
          </Box>
          <Box boxSize="150px">
            <Image src="https://images.unsplash.com/photo-1531256379411-0aefb85717c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxpbWFnZXxlbnwwfHx8fDE3MTcxMTg2NTB8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Sample Image 4" borderRadius="md" boxSize="150px" />
          </Box>
          <Box boxSize="150px">
            <Image src="https://images.unsplash.com/photo-1547721064-da6cfb341d50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxpbWFnZXxlbnwwfHx8fDE3MTcxMTg2NTB8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Sample Image 5" borderRadius="md" boxSize="150px" />
          </Box>
        </VStack>
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
