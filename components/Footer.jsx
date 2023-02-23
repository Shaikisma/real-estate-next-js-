import {Box, Button} from '@chakra-ui/react';
import { Link} from '@chakra-ui/react';

const Footer = () => (
    <Box textAlign="center" p="5" color="gray.600" borderTop="1px" borderColor="gray.100">
        &copy; 2023 Samarth Estates, Inc.
        <br/>
        <Link href='https://samarth-portfolio-website.000webhostapp.com' target="_blank">Contact</Link>
        
    </Box>
);

export default Footer;