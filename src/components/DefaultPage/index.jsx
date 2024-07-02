import { Banner } from "@components/Banner";
import { Outlet } from "react-router-dom";

export function DefaultPage({ children }) {
    return(
        <main>
            <Banner />
            <Outlet />    {/* Renderização do conteúdo da rota aqui */}
            {children}
        </main>
    );
}