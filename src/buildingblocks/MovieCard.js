import { Card, CardHeader, CardBody, CardFooter , Heading } from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import '../App.css'
import {
  ListItem,
  UnorderedList,
} from '@chakra-ui/react'

export default function MovieCard(props) {
  return (
    <div className="MovieCard">
      <Card background='#a1fff8' minW='sm' maxW='sm'>
        <CardHeader><Heading size='md'>{props.name}</Heading></CardHeader>
        <CardBody>
          {props.description}
        </CardBody>
        <CardFooter>
          <Link href={props.link} isExternal>More information<ExternalLinkIcon mx='2px' /></Link>
        </CardFooter>
      </Card>
    </div>
  )
}