import React from  "react"
import { MainHome } from "../components"
import {ChooseCarContainer} from "./chooseCar"
import { SelectCarContainer } from "./selectCar"
import { CarouselContainer } from "./carousel"
import CatalogContainer  from "./catalog"
import { AlegeProducatorContainer } from "./producatori"
export function MainHomeContainer(){

    return (
        <MainHome>
            <MainHome.Content>
                <MainHome.Left>
                    <SelectCarContainer />
                </MainHome.Left>
                <MainHome.Right>
                    <CarouselContainer />
                </MainHome.Right>
            </MainHome.Content>
            <ChooseCarContainer dimension={"small"}/>
            <CatalogContainer dimension={"small"}/>
            <AlegeProducatorContainer dimension={"small"} />
        </MainHome>
    )
}