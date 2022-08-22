import { Grid, GridItem, Text } from "@chakra-ui/react";

export function ItemSide(ItemSideProps) { 
   

   return (
      <Grid
      w='100%' p={[0,2,2,2]} mt={[4,0,0,0]} alignItems='center' color={ItemSideProps.active}
      templateColumns={['repeat(1, 1fr)','repeat(1, 1fr)','repeat(1, 1fr)','repeat(6, 1fr)']}
      templateRows={['repeat(2, 1fr)','repeat(2, 1fr)','repeat(2, 1fr)','repeat(1, 1fr)']}
      onClick={() => {ItemSideProps.changeMenu(ItemSideProps.setState, ItemSideProps.state, ItemSideProps.id )}}
      _hover={{color: "datGreenActive", transition:'360ms'}}
      >
         <GridItem colSpan={1} py={[1,0,0,0]} mx='auto' fontSize={['1.8rem','2.2rem','2.2rem','1.8rem']}>
         {ItemSideProps.icon}
         </GridItem>
         <GridItem  colSpan={5}>
         <Text textAlign={['center','center','center','left' ]} fontSize={['0.6rem','0.9rem','0.9rem','1rem']} fontWeight='500' _hover={{cursor:'pointer'}}> {ItemSideProps.name} </Text>
         </GridItem>
      </Grid>
   )
}