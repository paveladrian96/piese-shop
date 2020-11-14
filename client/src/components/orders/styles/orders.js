import styled from "styled-components"
import * as pallete from "../../../constants/theme"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    max-width: ${pallete.widthMax};
    margin: 2em auto;
    justify-content: space-between;
    padding: 3em ;


`
export const Title = styled.h1`
   font-size: 2rem;
   margin-bottom: 1.5em;
   padding: 1rem;
`

export const Comanda = styled.div`
    margin-bottom: 1.5em;
    border: 2px solid ${pallete.dark_color};
    padding: 1rem;
`

export const ComandaTitle = styled.h3`
   font-size: 1.3rem;
   border-bottom: 1px solid ${pallete.dark_color};
   width: fit-content; 
`

export const ComandaInfo = styled.p`
   font-size: 1rem;
   border-bottom: 1px solid ${pallete.light_color}
`
export const Produs = styled.div`
    border: 2px solid ${pallete.light_color};
    padding: 1em;
`

export const ProdusContainer = styled.div`
    background: ${pallete.light_color};
    padding: 1em;
    margin-bottom: 1em;
`

export const ProdusInfo = styled.p`
   font-size: 1rem;
`

export const ProdusTitle = styled.h5`
   font-size: 1.1rem;
`