import {Box, Button} from '@chakra-ui/react';
import { Link} from '@chakra-ui/react';

const Footer = () => (
    <Box textAlign="center" p="5" color="gray.600" borderTop="1px" borderColor="gray.100">
        <Link href='https://samarth-portfolio-website.000webhostapp.com' target="_blank">Contact: &copy; 2023 Samarth Estates, Inc.</Link>
    </Box>
);

export default Footer;