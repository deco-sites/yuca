import Image from "$live/std/ui/components/Image.tsx";
import type { Image as LiveImage } from "$live/std/ui/types/Image.ts";

export interface Props {
  title?: string;
  subtitle: string;
  products: ProductType[];
}

export interface ProductType {
  imgSrc: LiveImage;
  alt?: string;
  title: string;
  description: string;
}

export default function ProductTypes({ title, subtitle, products }: Props) {
  return (
    <div className="mx-auto max-w-7xl my-24 px-6">
      <div className="flex gap-8 flex-col sm:flex-row">
        <div className="w-full sm:w-1/3 flex items-center">
          <div className="flex flex-col">
            <div className="text-[#13C081] w-[115px] h-[128px] mb-8">
              <svg
                viewBox="0 0 115 128"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="fill-current">
                <path
                  d="M79.192 78.23c0-.102 0-.203.028-.3.36-2.353.767-4.698 1.074-7.055.44-3.402.806-6.816 1.162-10.23.875-8.1.068-16.172-.807-24.228-.61-5.512-1.21-11.032-2.296-16.479-.896-4.422-2.421-8.643-3.97-12.863a16.119 16.119 0 0 0-1.828-3.795 4.207 4.207 0 0 1-.626-2.134A1.962 1.962 0 0 0 71.687 0a1.543 1.543 0 0 0-.213.778c-1.046 5.99-2.058 11.988-3.136 17.974-.447 2.515-1.049 4.997-1.533 7.504-.662 3.426-.807 6.885-.932 10.376a16.002 16.002 0 0 1-.262 2.56 40.386 40.386 0 0 0-.63 10.246c.259 4.151.134 8.315.174 12.47.028 3.305.315 6.594.5 9.89v.26a1.217 1.217 0 0 1-.35-.616c-1.586-3.645-2.946-7.359-4.31-11.08-1.07-2.925-2.647-5.61-4.035-8.372-1.73-3.394-3.15-6.934-4.882-10.328-.936-1.843-1.807-3.718-3.147-5.325a10.698 10.698 0 0 1-2.054-3.889c-.738-2.53-2.106-4.742-3.53-6.913a38.36 38.36 0 0 1-3.91-7.832c-1.162-3.14-2.748-6.075-4.337-9.036-.892-1.648-1.4-3.475-2.304-5.12-.517-.939-1.057-1.887-1.97-2.526-.528-.373-.66-.312-.863.311a18.02 18.02 0 0 0-.645 3.496c-.19 1.62-.488 3.24-.807 4.823a19.39 19.39 0 0 0-.299 5.67c.307 3.418.15 6.885.73 10.267.824 5.022 1.995 9.98 3.507 14.839.613 1.92 1.69 3.645 2.627 5.39 1.279 2.43 2.48 4.86 3.538 7.384 1.025 2.43 2.42 4.677 3.68 7.01.92 1.734 1.529 3.605 2.388 5.367a52.87 52.87 0 0 0 3.708 6.386c1.683 2.515 3.006 5.225 4.439 7.882 1.767 3.296 3.728 6.48 5.596 9.72.807 1.425 1.67 2.835 2.502 4.268.08.14.113.302.092.462-.944-.992-1.932-1.944-2.824-2.98a50.311 50.311 0 0 0-6.052-5.873c-2.462-2.062-4.544-4.532-6.86-6.772-3.147-3.074-5.959-6.48-9.013-9.627a37.446 37.446 0 0 0-4.842-4.191c-2.356-1.714-4.317-3.872-6.456-5.836a21.012 21.012 0 0 0-4.535-3.378 23.065 23.065 0 0 1-5.108-3.803 6.16 6.16 0 0 0-2.42-1.405 7.597 7.597 0 0 1-3.886-2.69A4.039 4.039 0 0 0 7.675 46.6c-.452-.227-.67-.117-.775.405a10.21 10.21 0 0 0 .404 4.893 27.105 27.105 0 0 0 3.89 8.48 34.185 34.185 0 0 0 3.542 3.99c1.86 1.883 3.401 4.05 4.983 6.143 1.638 2.187 3.543 4.143 5.33 6.2 1.525 1.763 2.905 3.646 4.394 5.44 1.9 2.284 4.035 4.338 6.052 6.529 1.53 1.668 2.869 3.503 4.438 5.123 2.187 2.244 4.705 4.102 6.985 6.237 3.857 3.608 7.997 6.885 12.007 10.303a17.347 17.347 0 0 1 1.703 1.701c-1.17-.288-2.252-.753-3.401-1.033-2.724-.668-5.403-1.502-8.07-2.43a99.253 99.253 0 0 1-17.382-7.994c-4.64-2.677-9.215-5.472-13.916-8.044-2.546-1.389-5.197-2.571-7.666-4.05a23.73 23.73 0 0 1-5.16-4.171c-1.437-1.547-3.229-2.653-5-3.82.549 1.171 1.03 2.378 1.659 3.5.964 1.705 1.908 3.422 2.86 5.131a35.585 35.585 0 0 0 3.966 5.545c1.55 1.826 3.059 3.69 4.584 5.536.078.106.17.203.27.288 2.248 1.697 4.152 3.798 6.371 5.524 1.283.996 2.583 1.972 3.797 3.058a11.168 11.168 0 0 0 4.943 2.648c1.72.444 3.412.985 5.071 1.62 1.117.398 2.264.704 3.43.916 1.965.348 3.764 1.17 5.649 1.773 1.399.453 2.844.747 4.309.875 1.485.128 2.947.457 4.345.976a56.552 56.552 0 0 0 5.847 1.79c2.231.555 4.232 1.669 6.282 2.673 2.582 1.264 4.777 3.127 7.234 4.581 1.09.64 2.183 1.187 3.519 1.045a1.858 1.858 0 0 0 1.719-1.515 9.911 9.911 0 0 0-.384-3.787c-.343-1.373-.532-2.701-.149-4.09.134-.467.18-.955.133-1.438-.04-.55.103-1.098.404-1.559.806-1.487 1.9-2.75 2.876-4.103 2.526-3.499 4.766-7.189 7.082-10.825a29.828 29.828 0 0 1 2.574-3.24c1.666-1.953 2.792-4.273 4.272-6.347 3.33-4.67 6.02-9.72 8.877-14.669a14.352 14.352 0 0 0 1.344-3.645c.524-2.025 1.484-3.9 2.324-5.808 1.795-4.05 3.667-8.1 5.209-12.271a41.945 41.945 0 0 0 1.953-7.047c.5-2.75 1.045-5.5 1.299-8.29.113-1.215.109-2.459.117-3.69.056-2.07.334-4.13.831-6.14.484-2.106.371-4.195.202-6.305-.037-.426-.222-.523-.589-.47a3.277 3.277 0 0 0-1.715.915c-1.437 1.272-2.421 2.88-3.454 4.48-2.276 3.588-4.164 7.395-6.21 11.116-2.255 4.103-4.6 8.17-7.666 11.745-4.874 5.723-8.99 11.936-11.939 18.89a31.384 31.384 0 0 1-1.924 3.758c-.845 1.466-1.569 3-2.163 4.585Z"
                  fill="#13C081"></path>
              </svg>
            </div>
            <h2 className="w-full font-serif font-black text-4xl mb-5">
              {title}
            </h2>
            <p className="text-base font-sans">{subtitle}</p>
          </div>
        </div>
        {products?.map((prod) => (
          <div className="w-full sm:w-1/3 flex flex-col relative">
            <div className="absolute w-full h-full bg-[#00000040] rounded-lg"></div>
            <Image
              class="object-contain w-auto rounded-lg"
              sizes="(max-width: 640px) 75vw, 50vw"
              src={prod.imgSrc}
              alt={prod.alt}
              width={300}
              height={300}
            />
            <div className="absolute left-7 bottom-7 right-7">
              <h3 className="text-white text-2xl leading-8 mb-2.5 font-serif">
                {prod.title}
              </h3>
              <p className="text-base leading-6 text-white font-semibold">
                {prod.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
