import Navbar from "../Navbar";
import DonatoreCard from "../DonatoreCard";
export default function Pannello () {
    return (
        <>
            <Navbar></Navbar>
            <main className="pt-10 text-center grid gap-10 grid-cols-4">
                <DonatoreCard nome="Gianmarco" carta="1234567898765432" attivo={true}></DonatoreCard>
                <DonatoreCard nome="Gianmarco" carta="1234567898765432" attivo={true}></DonatoreCard>
                <DonatoreCard nome="Gianmarco" carta="1234567898765432" attivo={true}></DonatoreCard>
                <DonatoreCard nome="Gianmarco" carta="1234567898765432" attivo={true}></DonatoreCard>
                <DonatoreCard nome="Gianmarco" carta="1234567898765432" attivo={true}></DonatoreCard>
            </main>
        </>
    )
}