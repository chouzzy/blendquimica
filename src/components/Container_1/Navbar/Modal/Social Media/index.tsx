import { Text, Link} from "@chakra-ui/react"


export function SocialMedia(media_content) {
   return (
      <>
         <Link href={media_content.mediaLink}  _hover={{textDecoration:'none'}}>
               <Text color={media_content.color} _hover={{color:'datGreen', transition:'360ms'}} textAlign='center'>
                  {media_content.icon}
               </Text>
         </Link>
      </>
      )}