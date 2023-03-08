const data = [
  "Aclimação",
  "Barra Funda",
  "Bela Vista",
  "Belenzinho",
  "Brooklin",
  "Butantã",
  "Campo Belo",
  "Centro",
  "Chácara Santo Antônio",
  "Consolação",
  "Higienópolis",
  "Indianópolis",
  "Itaim Bibi",
  "Jabaquara",
  "Jardim das Perdizes",
  "Jardins",
  "Liberdade",
  "Moema",
  "Paraíso",
  "Perdizes",
  "Pinheiros",
  "Santa Cecília",
  "Santana",
  "Saúde",
  "Tatuapé",
  "Vila Clementino",
  "Vila Formosa",
  "Vila Leopoldina",
  "Vila Madalena",
  "Vila Mariana",
  "Vila Mascote",
  "Vila Nova Conceição",
  "Vila Olímpia",
];

export default function Neighborhoods() {
  return (
    <section className="mx-auto max-w-7xl py-14 px-6">
      <h4 class="font-bold text-base mb-5">
        Apartamentos nos melhores bairros de São Paulo
      </h4>
      <div className="flex flex-wrap">
        {data.map((neighborhood) => (
          <a
            href="/"
            className="text-sm hover:text-red-500 text-[#102436] leading-5 mb-2.5">
            {neighborhood}
            <span className="mx-2.5">•</span>
          </a>
        ))}
      </div>
      <div className="w-full border-t border-[#F4F5F6] mt-14"></div>
    </section>
  );
}
