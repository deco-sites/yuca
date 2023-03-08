import { useState } from "preact/hooks";

export default function FormFilters() {
  const [openType, setOpenType] = useState(false);
  const [openPrice, setOpenPrice] = useState(false);
  const [type, setType] = useState("Escolha uma opção");

  return (
    <div>
      <form action="" className="bg-white rounded-lg py-5">
        <div className="flex flex-col sm:flex-row">
          <div
            className={`relative w-full sm:w-[232px] flex items-center transition-[[padding]] ease-in-out duration-200 sm:border-r-4 border-[#F4F5F6] ${
              openType ? "pr-14 pl-3" : "pr-3 pl-14"
            }`}>
            <svg
              className="absolute left-5"
              fill="#425158"
              height="24px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              role="img">
              <path d="m19 9.3-3-2.7L12 3 2 12h3v8h6v-4h2v4h6v-8h3l-3-2.7ZM17 18h-2v-4H9v4H7v-7.81l5-4.5 5 4.5V18Z"></path>
            </svg>
            <div
              className="bg-white cursor-pointer z-10"
              onClick={() => {
                setOpenType(!openType);
                setOpenPrice((openType && openPrice) ?? false);
              }}>
              <p className="text-text-dark font-bold text-xs">
                TIPO DE MORADIA
              </p>
              <p
                className={`text-sm ${
                  type === "Escolha uma opção"
                    ? "text-[#8E9BA1]"
                    : "text-purple-800 font-bold"
                }`}>
                {type}
              </p>
            </div>
            <svg
              onClick={() => setOpenType(false)}
              className={`absolute right-5 transition-[[opacity]] ease-in-out duration-200 ${
                openType ? "opacity-100" : "opacity-0"
              }`}
              fill="rgb(187, 195, 199)"
              height="24px"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              role="img">
              <path d="M5.488 5.504a1.665 1.665 0 0 1 2.353 0L16 13.648l8.16-8.16a1.66 1.66 0 0 1 2.352 0 1.662 1.662 0 0 1 0 2.353L18.353 16l8.159 8.16a1.66 1.66 0 0 1 0 2.352 1.66 1.66 0 0 1-2.352 0L16 18.352l-8.159 8.16a1.662 1.662 0 0 1-2.353 0 1.66 1.66 0 0 1 0-2.352l8.16-8.16-8.16-8.159a1.675 1.675 0 0 1 0-2.337Z"></path>
            </svg>
          </div>
          <div
            className={`relative w-full sm:w-[232px] flex py-5 sm:py-0 items-center transition-[[padding]] ease-in-out duration-200 sm:border-r-4 border-[#F4F5F6] ${
              openPrice ? "pr-14 pl-3" : "pr-3 pl-14"
            }`}>
            <svg
              className="absolute left-5"
              fill="#425158"
              height="24px"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              role="img">
              <path d="M16 5C9.928 5 5 9.928 5 16s4.928 11 11 11 11-4.928 11-11S22.072 5 16 5Zm0 19.8c-4.851 0-8.8-3.949-8.8-8.8 0-4.851 3.949-8.8 8.8-8.8 4.851 0 8.8 3.949 8.8 8.8 0 4.851-3.949 8.8-8.8 8.8Zm.341-9.746c-1.947-.495-2.574-1.034-2.574-1.837 0-.924.869-1.573 2.31-1.573 1.518 0 2.09.726 2.134 1.804h1.881c-.055-1.474-.957-2.827-2.739-3.267V8.3H14.79v1.859c-1.661.352-2.992 1.43-2.992 3.091 0 1.969 1.639 2.959 4.026 3.531 2.145.506 2.574 1.265 2.574 2.057 0 .583-.429 1.529-2.31 1.529-1.76 0-2.453-.792-2.552-1.804h-1.892c.11 1.87 1.496 2.926 3.146 3.267v1.87h2.574v-1.837c1.672-.319 2.992-1.276 3.003-3.047-.011-2.42-2.09-3.256-4.026-3.762Z"></path>
            </svg>
            <div
              className="bg-white cursor-pointer z-10"
              onClick={() => {
                setOpenPrice(!openPrice);
                setOpenType((openPrice && openType) ?? false);
              }}>
              <p className="text-text-dark font-bold text-xs">VALOR TOTAL</p>
              <p className="text-purple-800 font-bold text-sm">R$1.000,00</p>
            </div>
            <svg
              onClick={() => setOpenPrice(false)}
              className={`absolute right-5 transition-[[opacity]] ease-in-out duration-200 ${
                openPrice ? "opacity-100" : "opacity-0"
              }`}
              fill="rgb(187, 195, 199)"
              height="24px"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              role="img">
              <path d="M5.488 5.504a1.665 1.665 0 0 1 2.353 0L16 13.648l8.16-8.16a1.66 1.66 0 0 1 2.352 0 1.662 1.662 0 0 1 0 2.353L18.353 16l8.159 8.16a1.66 1.66 0 0 1 0 2.352 1.66 1.66 0 0 1-2.352 0L16 18.352l-8.159 8.16a1.662 1.662 0 0 1-2.353 0 1.66 1.66 0 0 1 0-2.352l8.16-8.16-8.16-8.159a1.675 1.675 0 0 1 0-2.337Z"></path>
            </svg>
          </div>
          <div className="w-full sm:w-[170px] flex items-center justify-center px-5">
            <button className="h-10 px-5 text-sm font-bold rounded-md bg-purple-800 text-white w-full flex items-center">
              <i class="text-white" data-testid="system:search">
                <svg
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  className="fill-current w-6 h-6 mr-1">
                  <path d="M20.723 18.837h-.994l-.352-.34a8.14 8.14 0 0 0 1.975-5.321 8.176 8.176 0 1 0-8.176 8.176 8.14 8.14 0 0 0 5.321-1.975l.339.353v.993L25.126 27 27 25.126l-6.277-6.289Zm-7.547 0a5.653 5.653 0 0 1-5.66-5.661 5.652 5.652 0 0 1 5.66-5.66 5.652 5.652 0 0 1 5.66 5.66 5.653 5.653 0 0 1-5.66 5.661Z"></path>
                </svg>
              </i>
              Buscar
            </button>
          </div>
        </div>
      </form>
      <div className="flex relative mt-1.5">
        <div
          className={`w-[280px] bg-white rounded-lg p-5 absolute transition-[[opacity]] ease-in-out duration-300 ${
            openType ? "opacity-100" : "opacity-0"
          }`}>
          <ul>
            <li
              className="text-sm cursor-pointer"
              onClick={() => {
                setType("Ap. Inteiro");
                setOpenType(false);
              }}>
              <p className="font-semibold">Apartamento Inteiro</p>
              <p>Individual, Casal ou Família</p>
            </li>
            <li
              className="text-sm cursor-pointer my-4"
              onClick={() => {
                setType("Coliving");
                setOpenType(false);
              }}>
              <p className="font-semibold">Compartilhado</p>
              <p>Coliving</p>
            </li>
            <li
              className="text-sm cursor-pointer"
              onClick={() => {
                setType("Todos");
                setOpenType(false);
              }}>
              <p className="font-semibold">Tanto Faz</p>
              <p>Inteiro e compartilhado</p>
            </li>
          </ul>
        </div>
        <div
          className={`w-[280px] bg-white rounded-lg p-5 absolute sm:left-[232px] transition-[[opacity]] ease-in-out duration-300 ${
            openPrice ? "opacity-100" : "opacity-0"
          }`}>
          <div className="bg-[#eef7fb] p-3">
            <p className="text-[#397787] text-sm leading-5 font-bold">
              O valor total já inclui:{" "}
            </p>
            <p className="text-[#397787] text-sm leading-5">
              aluguel, condomínio, IPTU, internet, seguro residencial,
              atendimento e manutenções.
            </p>
          </div>
          <p className="text-black text-sm leading-5 font-bold my-3">
            Valor total
          </p>
          <button
            className="h-10 px-5 text-sm font-bold rounded-md bg-purple-800 text-white w-full"
            onClick={() => setOpenPrice(false)}>
            ok
          </button>
        </div>
      </div>
    </div>
  );
}
