import React, {useState} from 'react'
import { CartContainer } from '../container/cart'
import { FooterContainer } from '../container/footer'
import { HeaderContainer } from "../container/header"

export default function Cart() {
    const [run, setRun] = useState(false)
    return (
        <>
            <HeaderContainer  run={run}/>
            <CartContainer run={run} setRun={setRun}/>
            <FooterContainer />
        </>
    )
}
