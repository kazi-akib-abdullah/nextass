import { VStack, Button, Flex, Text, Heading, Image, FormControl, FormLabel, Input, SimpleGrid, GridItem, Checkbox } from "@chakra-ui/react"
const Signup = () => {
    return (
        <VStack w="full" h="full" p={10} spacing={10}>
            <Flex direction="column" background="gray.100" p={12} rounded={6}>
                <SimpleGrid columns={2} columnGap={3} rowGap={3}>
                    <GridItem display="flex" justifyContent="center" colSpan={2}>
                        <Image src="/sports-car2.png" width={128} height={32} alt="" />
                    </GridItem>
                    <GridItem textAlign="center" colSpan={2}>
                        <Heading> Let's get started</Heading>
                        <Text> Explore The World's Largest Car Sharing Marketplace</Text>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <Heading bgColor="teal" p={2} rounded={20} textAlign="center" as="h6" size="sx" mb={6}>LOG IN</Heading>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <Heading bgColor="teal" p={2} rounded={20} textAlign="center" size="sx" mb={6}>SIGN UP</Heading>
                    </GridItem>
                    <GridItem colSpan={2}>
                        <FormControl>
                            <FormLabel>Display Name</FormLabel>
                            <Input placeholder='Type display name' mb={3} type="text" />
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={2}>
                        <FormControl>
                            <FormLabel>E-mail address</FormLabel>
                            <Input placeholder='Type e-mail address' />
                        </FormControl>
                    </GridItem>                    
                    <GridItem colSpan={2}>
                        <FormControl>
                            <FormLabel>Password *</FormLabel>
                            <Input placeholder='Type your password' mb={6} type="password" />
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={2}>
                        <Checkbox>I agree to the terms of service</Checkbox>
                    </GridItem>
                    <GridItem colSpan={2}>
                        <Button w="full" colorScheme="teal">SIGN UP</Button>
                    </GridItem>  
                  
                </SimpleGrid>
            </Flex>
        </VStack>
    )
}

export default Signup