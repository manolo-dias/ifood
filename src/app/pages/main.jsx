import React from 'react'
const itens = [
    { name: 'Frios'},
    { name: 'Laticínios'},
    { name: 'Feira'},
    { name: 'Bebidas'},
    { name: 'Doces'},
    { name: 'Massas frescas'},
    { name: 'Limpeza'},
    { name: 'Padaria'},
    { name: 'Higiene'},
    { name: 'Congelados'},
    { name: 'Carnes'},
    { name: 'Cerveja'},
  ];

const Main = () => {
  return (
    <>
    <div className="my-20 mb-[0.625rem] leading-[1.5rem] text-[1.5rem] text-primary_color
 font-semibold mt-72 text-center  ">Faça mercado no Ifood</div>
    <div className='text-center leading-[1.5rem] text-xl text-primary_color'>Entregamos tudo o que precisa na porta da sua casa, de hortifruti a itens de limpeza</div>
    
    {/* Search input */}
    <form class="mx-auto w-auto mt-12">   
    
        <div className='flex ml-6 justify-center'>
        <label for="default-search" class="default-font text-gray-900 sr-only dark:text-white">Search</label>
        <div class="relative">
        <div class="absolute  inset-y-0 start-2 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-primary" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input class='default-font' type="search" id="default-search" className="w-96 h-12 p-4 mr-6 ps-10  0 border rounded-lg bg-gray-50" placeholder="Em qual endereço você está?" required />
        <button type="submit" class="default font text-white bg-primary rounded-lg text-sm h-12 min-w-fit px-4 py-2">Ver mercados próximos</button>
        
        </div>
    </div>
</form>
<div className="flex flex-wrap justify-center items-center w-[35%] h-auto mx-auto mt-12">
  {itens.map((item) => (
    <a
      key={item.name}
      aria-current={item.current ? 'page' : undefined}
      className="rounded-md m-1"
    >
      <button
        type="button"
        className="font-serif flex rounded-full border-2 border-gray-100 px-2.5 pb-1.5 pt-2 text-sm font-medium leading-normal bg-white transition duration-150 ease-in-out hover:border-gray-300 hover:bg-gray-100 hover:text-gray-500 focus:border-gray-300 focus:bg-gray-100 text-gray-400 focus:outline-none focus:ring-0"
        data-twe-ripple-init
      >
        {item.name}
      </button>
    </a>
  ))}
</div>



    </>
    
)
}

export default Main