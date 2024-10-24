import {Box, Button} from '@chakra-ui/react';
import { Link} from '@chakra-ui/react';

const Footer = () => (
    <Box textAlign="center" p="5" color="gray.600" borderTop="1px" borderColor="gray.100">
        <Link href='https://www.linkedin.com/in/shaik-ismail-84b786304/' target="_blank">&copy; 2024 ISmail Estates, Inc.</Link>
    </Box>
);

export default Footer;