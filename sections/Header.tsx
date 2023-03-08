const menu = [
  { label: "Apartamentos" },
  { label: "Como funciona" },
  { label: "Sobre a Yuca" },
  { label: "Outras Soluções" },
];

export default function Header() {
  return (
    <div className="w-full fixed bg-white h-[68px] sm:h-[85px] border-b border-[#F4F5F6] z-50">
      <div className="mx-auto max-w-7xl h-full flex justify-between items-center px-6 sm:px-2">
        <i data-testid="yuca:yuca" className="text-primary w-[64px]">
          <svg
            className="w-[44px] h-[44px] fill-current"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            role="img">
            <path d="M15.324 1v1.901L3.735 2.895v11.909H1.882V1Zm1.352 30v-1.901l11.588.006V17.196h1.853V31Zm-5.893-16.197v-3.074L7.612 6.862h1.873l2.074 3.177 2.073-3.177h1.874l-3.171 4.867v3.074Zm12.901-7.941v4.266c0 2.177-1.541 3.675-3.603 3.675-2.063 0-3.615-1.498-3.615-3.675V6.862h1.552v4.266c0 1.292.887 2.086 2.063 2.086 1.175 0 2.05-.794 2.05-2.086V6.862ZM15.21 23.604c-.174.258-.375.49-.604.698-.23.208-.482.385-.76.53a3.869 3.869 0 0 1-.898.335c-.322.077-.66.116-1.014.116a4.312 4.312 0 0 1-1.647-.306 3.809 3.809 0 0 1-1.289-.857 3.881 3.881 0 0 1-.84-1.304 4.443 4.443 0 0 1-.299-1.65c0-.597.1-1.148.299-1.651.2-.503.48-.938.84-1.304.36-.367.79-.652 1.289-.857a4.332 4.332 0 0 1 1.647-.306c.358 0 .704.041 1.037.122.332.082.64.199.925.352.284.153.544.34.776.561.233.222.429.471.588.746l-1.331.862a2.411 2.411 0 0 0-.854-.785 2.444 2.444 0 0 0-1.182-.281c-.356 0-.686.062-.99.185a2.375 2.375 0 0 0-.787.516 2.372 2.372 0 0 0-.52.798 2.716 2.716 0 0 0-.188 1.029c0 .386.064.736.194 1.049.129.312.305.579.528.798.223.219.486.387.787.504.302.119.628.177.976.177.442 0 .837-.091 1.182-.273a2.43 2.43 0 0 0 .871-.787Zm3.546-1.304h2.639l-1.32-2.927Zm3.359 1.588h-4.08l-.565 1.248h-1.708l3.592-7.94h1.442l3.592 7.94h-1.707Z"></path>
          </svg>
        </i>
        <button className="w-8 h-8 sm:hidden">
          <svg
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            role="img">
            <path d="M6.223 23.5h19.555c.672 0 1.222-.562 1.222-1.251 0-.687-.55-1.25-1.222-1.25H6.223c-.673 0-1.223.563-1.223 1.25 0 .689.55 1.251 1.223 1.251Zm0-6.251h19.555c.672 0 1.222-.562 1.222-1.25 0-.687-.55-1.249-1.222-1.249H6.223C5.55 14.75 5 15.312 5 15.999c0 .688.55 1.25 1.223 1.25ZM5 9.75c0 .687.55 1.249 1.223 1.249h19.555c.672 0 1.222-.562 1.222-1.249 0-.688-.55-1.25-1.222-1.25H6.223C5.55 8.5 5 9.062 5 9.75Z"></path>
          </svg>
        </button>
        <div className="hidden sm:flex flex-1 items-start">
          {menu.map((item) => (
            <span className="px-5 py-2.5 text-sm text-primary-dark font-bold flex items-center cursor-pointer">
              {item.label}
              <i
                class={`text-primary-dark ${
                  item.label === "Apartamentos" ? "hidden" : null
                }`}
                data-testid="system:down">
                <svg
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  className="w-4 h-4 fill-current">
                  <path d="m9.114 10.5 6.887 6.799 6.884-6.799L25 12.592 16.001 21.5 7 12.592 9.114 10.5Z"></path>
                </svg>
              </i>
            </span>
          ))}
        </div>
        <div className="hidden sm:flex">
          <button className="h-10 px-5 text-sm font-bold rounded-md bg-primary-light text-primary-dark">
            Entrar
          </button>
          <button className="h-10 px-5 text-sm font-bold rounded-md ml-7 bg-primary-dark text-primary-light">
            Quero morar
          </button>
        </div>
      </div>
    </div>
  );
}
