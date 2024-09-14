import { styled } from "@mui/material";
import { Link as LinkComponent } from "react-router-dom";

export const Link = styled(LinkComponent)`
text-decoration:none;
color: white;
padding: 1rem;
transition: all .3s ease-in-out;
&:hover {
color: rgb(9, 195, 133);
}
`
;