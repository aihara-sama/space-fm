import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import { Box } from "@mui/material";
import type { AccordionProps } from "@mui/material/Accordion";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import type { AccordionSummaryProps } from "@mui/material/AccordionSummary";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import PlusIcon from "components/icons/PlusIcon";
import * as React from "react";

const StyledAccordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
  border: "1px solid #ffffff30",
  background: "linear-gradient(#17181A, #161719)",
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
  " .MuiCollapse-root": {
    background: "linear-gradient(#17181A, #161719)",
    borderRadius: "10px",
  },
  borderRadius: "10px",
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(() => ({
  borderTopLeftRadius: "10px",
  borderTopRightRadius: "10px",

  background: "linear-gradient(#17181A, #161719)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper": {
    position: "absolute",
    right: 26,
  },
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: 32,
    paddingRight: "38px",
    paddingTop: 26,
    paddingBottom: 26,
  },
  " .MuiCollapse-root": {
    backgroundColor: "background.default",
  },
  position: "relative",
  paddingLeft: 0,
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  border: "none",
  borderBottomLeftRadius: "10px",
  borderBottomRightRadius: "10px",
}));

interface IMenuItem {
  text: string;
  body: string;
}

const Accordion: React.FunctionComponent<{ menu: IMenuItem[] }> = ({
  menu,
}) => {
  const [expanded, setExpanded] = React.useState<string | false>("");

  const handleChange =
    (panel: string) => (_: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <Box>
      <Box display="flex" flexDirection="column" gap="54px">
        {menu.map((item, idx) => (
          <StyledAccordion
            sx={{ "* .MuiPaper-root": { borderRadius: "10px" } }}
            key={idx}
            expanded={expanded === `panel${idx + 1}`}
            onChange={handleChange(`panel${idx + 1}`)}
          >
            <AccordionSummary
              sx={{
                pr: "12px !important",
                borderRadius: "10px",
              }}
              expandIcon={<PlusIcon />}
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography color="#fff" fontWeight={500}>
                {item.text}
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{ background: "linear-gradient(#17181A, #161719)" }}
            >
              <Typography fontWeight={500}>{item.body}</Typography>
            </AccordionDetails>
          </StyledAccordion>
        ))}
      </Box>
    </Box>
  );
};

export default Accordion;
