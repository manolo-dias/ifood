import React from 'react';

const navigation = [
  { name: 'Entregador', href: '#', current: true },
  { name: 'Restaurante e Mercado', href: '#', current: false },
  { name: 'Carreiras', href: '#', current: false },
  { name: 'iFood Card', href: '#', current: false },
];

export default function NavBar() {
  return (
    <nav className="bg-gray-50 py-11 px-8">
      <div className="mx-auto px-96">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            {/* LOGO */}
            <div className="flex flex-shrink-0 items-center mr-4">
              <img
                alt="Ifood"
                src="https://logopng.com.br/logos/ifood-43.svg"
                className="h-12 w-auto"
              />
            </div>

            {/* LINKS */}
            <div className="flex space-x-4 overflow-x-auto pr-24">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  aria-current={item.current ? 'page' : undefined}
                  className="rounded-md px-3 py-2 whitespace-nowrap"
                  class='default-font'
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* PARTE DO USUARIO */}
            <div className="ml-96 flex">
              <div className="rounded-md px-3 py-2 text-lg font-medium text-red-600 mr-4">criar conta</div>
              <button
                className="align-middle h-11 w-24 select-none rounded-md px-6 py-3 text-sm font-medium transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none bg-red-600 text-white shadow-md shadow-gray-900/10 hover:shadow-lg"
                type="button"
              >
                Entrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}


