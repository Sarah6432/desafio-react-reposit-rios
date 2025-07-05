import { ItemRepoContainer } from "./styles"
function ItemRepo({ repo, handleRemoveRepo }) {
  return (
    <ItemRepoContainer >
      <h3>{repo.name}</h3>
      <p>{repo.full_name}</p>
      <a href={repo.html_url} target='_blank' rel="noopener noreferrer">Ver Repositório</a><br />
      <button rel="noreferror" className="remover" onClick={() => handleRemoveRepo(repo.id)}>Remover</button>
      <hr />
    </ItemRepoContainer>
  )
}

export default ItemRepo;
