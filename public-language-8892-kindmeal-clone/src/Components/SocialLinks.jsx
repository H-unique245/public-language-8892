import {
    Box,
    Container,
    Stack,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { FaFacebookF, FaTwitter, FaLink } from 'react-icons/fa';
import { Link } from 'react-router-dom';
  
  
  export default function SocialLinks() {
    return (
      <Box
       /* bg={useColorModeValue('gray.50', 'gray.900')}*/
        /*color={useColorModeValue('gray.700', 'gray.200')}*/ >
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}>
          <Stack direction={{ base: 'column', sm: 'row' }} width={{sm:"80%", md:"100%"}} m={{sm:2}}border="1px solid red" spacing={{sm:2,md:4,lg:6}}>
            <Box color="white" rounded='full'  p={1.5} bg={useColorModeValue('gray.400', 'grey.700')}><Link  to={'https://www.kindmeal.my/widget.htm'} >
              <FaLink size={25}  />
            </Link></Box>
            <Box color="white" rounded='full'  p={1.5} bg={useColorModeValue('gray.400', 'grey.700')}><Link   to={'https://www.facebook.com/KindMeal.my'}>
              <FaFacebookF size={25}  />
            </Link></Box>
            <Box color="white" rounded='full' p={1.5} bg={useColorModeValue('gray.400', 'grey.700')}><Link  to={'https://twitter.com/KindMeal'}>
              <FaTwitter size={25} />
            </Link></Box>
          </Stack>
        </Container>
      </Box>
    );
  }