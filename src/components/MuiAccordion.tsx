import {Accordion, AccordionSummary, AccordionDetails, Typography}  from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export const MuiAccordion = () => {
  return (
    <div>
        <Accordion>
            <AccordionSummary 
            id='panel1-header'
            aria-controls='panel1-content'
            expandIcon={<ExpandMoreIcon />}
            >
               <Typography>Accordion 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
               <Typography>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                 Accusantium quos modi molestias odit qui laborum ipsam amet.
                  Expedita vitae, velit veniam nemo iusto provident exercitationem!
                   Adipisci quas numquam dolores praesentium.
               </Typography>
            </AccordionDetails>
        </Accordion>
    </div>
  )
}
