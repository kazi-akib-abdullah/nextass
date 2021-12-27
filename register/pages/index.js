import { Button, Container, Flex, FormLabel, Heading, Input, VStack } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import Signup from '../comps/Signup'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex h="100vh" alignItems="center" justifyContent="center">
        <Signup/>

      </Flex>
    </Container>

  )
}
