'use client'

export default function FeaturedProducts() {
  const products = [
    {
      id: 1,
      name: "Camiseta Green Owls 2025",
      price: 89.90,
      category: "Vestuário",
      stock: 15
    },
    {
      id: 2,
      name: "Caneca Gamer Green Owls",
      price: 34.90,
      category: "Acessórios",
      stock: 8
    },
    {
      id: 3,
      name: "Moletom Oficial",
      price: 149.90,
      category: "Vestuário",
      stock: 12
    }
  ]

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
          Loja <span className="text-green-400">Green Owls</span>
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Vista as cores do seu time favorito
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div 
            key={product.id}
            className="gaming-card rounded-xl overflow-hidden hover:neon-border transition-all duration-300"
          >
            <div className="h-48 bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center">
              <span className="text-green-400 font-semibold text-lg">{product.category}</span>
            </div>
            
            <div className="p-6">
              <h3 className="text-lg font-semibold text-white mb-2">{product.name}</h3>
              
              <div className="flex justify-between items-center mb-4">
                <span className="text-2xl font-bold text-green-400">
                  R$ {product.price.toFixed(2)}
                </span>
                <span className="text-sm text-gray-400">
                  {product.stock} em estoque
                </span>
              </div>

              <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg transition-colors duration-200 font-medium">
                Adicionar ao Carrinho
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
