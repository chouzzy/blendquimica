import { Grid } from "@chakra-ui/react";
import { ProjectSteps } from "./ProjectSteps";
import { ProjectTypes } from "./ProjectTypes";

export function OurServices() { 

   return (
      <Grid templateColumns='repeat(12,1fr)'color='gray.600' bg={['white','white','white','none']}  >
         <ProjectTypes/>
         <ProjectSteps/>
      </Grid>
   )
}