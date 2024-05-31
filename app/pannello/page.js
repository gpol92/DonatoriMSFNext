import Navbar from "../Navbar";
import DonatoreCard from "../DonatoreCard";
export default function Pannello () {
    return (
        <>
            <Navbar></Navbar>
            <main className="pt-10 text-center flex items-center justify-center">
                <DonatoreCard nome="Gianmarco" carta="1234567898765432" attivo={true}></DonatoreCard>
            </main>
        </>
    )
}

// grid gap-10 grid-cols-4