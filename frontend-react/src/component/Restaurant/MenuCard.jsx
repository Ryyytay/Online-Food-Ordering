import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const demo = [
    {
        category:"Nuts & seeds",
        ingredients:["Cashews"]
    },
    {
        category:"Protein",
        ingredients:["Protein"]
    },
    {
        category:"Vegetable",
        ingredients:"Fresh Vege"
    },
    {
        category:"Bread",
        ingredients:"Wheat"
    },
    
]

export default function MenuCard() {
  return (
    <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
        <div className="lg:flex items-center justify-between">
            <div className="lg:flex items-center lg:space-x-5 lg:gap-5">
                <img className="w-[7rem] h-[7rem] object-cover" 
                    src="http://res.cloudinary.com/dcpesbd8q/image/upload/v1708317657/no8xfzdhsrdy4ezmcczr.jpg" 
                    alt="" 
                />
                <div className="space-y-1 lg:space-y-5 lg:max-w-2xl">
                    <p className="font-semibold text-xl">Burger</p>
                    <p>$499</p>
                    <p className="text-gray-400">Extraodinary good burger.</p>
                </div>
            </div>
        </div>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
    </Accordion>
  )
}