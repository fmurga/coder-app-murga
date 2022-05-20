import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div class="flex items-center justify-center w-screen h-screen">
      <div class="px-4 lg:py-12">
        <div class="lg:gap-4 lg:flex">
          <div class="flex flex-col items-center justify-center md:py-24 lg:py-32">
            <h1 class="font-bold text-blue-600 text-9xl">404</h1>
            <p class="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
              <span class="text-red-500">Oops!</span> Página no encontrada
            </p>
            <p class="mb-8 text-center text-gray-500 md:text-lg">
              La página que buscabas no existe
            </p>
            <Link
              to="/"
              class="px-6 py-2 text-sm font-semibold text-blue-800 bg-blue-100">
              Volver a Inicio
            </Link>
          </div>
          <div class="mt-4">
            <img
              src="https://ih1.redbubble.net/image.661378557.8106/ssrco,classic_tee,womens,fafafa:ca443f4786,front_alt,square_product,600x600.u9.jpg"
              alt="img"
              class="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
