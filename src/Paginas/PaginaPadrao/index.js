import Banner from "Componente/Banner";
import { Outlet } from "react-router-dom";

export default function PaginaPadrao({children}){
    return(
        <mai>
            <Banner/>

            <Outlet/>
            {children}
        </mai>
    )
}