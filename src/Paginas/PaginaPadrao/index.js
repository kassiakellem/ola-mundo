import Banner from "Componente/Banner";
import { Outlet } from "react-router-dom";

export default function PaginaPadrao(){
    return(
        <mai>
            <Banner/>

            <Outlet/>
        </mai>
    )
}