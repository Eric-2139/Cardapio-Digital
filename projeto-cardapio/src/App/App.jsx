import { useState } from "react"
import Hashtaurante from "../assets/hashtaurante.webp"
import "./App.css"
import { Navegacao } from "../Navegacao/Navegacao.jsx"
import { ItemCardapio } from "../ItemCardapio/ItemCardapio.jsx"
import { pratosPrincipais, bebidas, sobremesas } from "../cardapio.js"


export function App() {

  const paginasMenu = [pratosPrincipais, sobremesas, bebidas]
  const [paginaSelecionada, atualizarPaginaSelecionada] = useState(0)

  return <>
    <img src={Hashtaurante} alt="" className="capa" />
    <Navegacao atualizarPaginaSelecionada={atualizarPaginaSelecionada} />

    <div className="menu">
      {paginasMenu[paginaSelecionada].map(item => <ItemCardapio nome={item.nome} descricao={item.descricao} preco={item.preco} imagem={item.imagem} />)}
    </div>
  </>
}

