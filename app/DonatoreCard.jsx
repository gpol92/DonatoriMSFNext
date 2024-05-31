export default function DonatoreCard ({ nome, carta, attivo}) {
    return (
        <main className="bg-zinc-500 text-sky-800 px-5 py-5">
            <p className="pb-5">{nome}</p>
            <p className="pb-5">{carta}</p>
            {attivo ? <p>🟢</p> : <p>🔴</p>}
            <button className="bg-zinc-600 h-12 px-5 rounded-lg mr-10 text-white">STANDBY</button>
            <button className="bg-zinc-600 h-12 px-5 rounded-lg text-white">DELETE</button>
        </main>
    )
}