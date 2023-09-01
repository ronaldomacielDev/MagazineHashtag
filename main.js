const catalago = [
      {
            id: 1,
            marca: 'zara',
            nome: "Casaco Branco",
            preco: 70,
            imagem: "product-1.jpg",
            feminino: false,
      },

      {
            id: 2,
            marca: 'zara',
            nome: "Casaco Reto com Lã",
            preco: 85,
            imagem: "product-2.jpg",
            feminino: false,

      },

      {
            id: 3,
            marca: 'zara',
            nome: "Jaqueta com Efeito Camurçã",
            preco: 60,
            imagem: "product-3.jpg",
            feminino: true,
      },

      {
            id: 4,
            marca: 'zara',
            nome: "Sobretudo em Mescla de Lã",
            preco: 160,
            imagem: "product-4.jpg",
            feminino: false,
      },

      {
            id: 5,
            marca: 'zara',
            nome: "Camisa Larga Acolchoada de Veludo Cotelê",
            preco: 110,
            imagem: "product-5.jpg",
            feminino: false,
      },

      {
            id: 6,
            marca: 'zara',
            nome: "Casaco de lã com botões",
            preco: 170,
            imagem: "product-6.jpg",
            feminino: true,
      },

      {
            id: 7,
            marca: 'zara',
            nome: "Casaco com Botões",
            preco: 75,
            imagem: "product-7.jpg",
            feminino: true,
      },

      {
            id: 8,
            marca: 'zara',
            nome: "Colete comprido com cinto",
            preco: 88,
            imagem: "product-8.jpg",
            feminino: true,
      },
];

for (const produtoCatalogo of catalago ){
      const cartaoProduto = `<div class='border-solid border-2 border-sky-500 w-48 m-2' id="card-produto-${produtoCatalogo.id}">
      <img 
            src="./assets/img/${produtoCatalogo.imagem}" 
            alt="Produto 1 do Magazine Hashtag."
      />

<p class='marca' >${produtoCatalogo.marca}</p>
<p>${produtoCatalogo.nome}Casaco Branco</p>
<p>R$ ${produtoCatalogo.preco}</p>
<button>Adicionar</button>
</div> `;

document.getElementById('container-produto').innerHTML += cartaoProduto;
}

