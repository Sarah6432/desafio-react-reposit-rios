import logoGit from "../assets/logotipo-do-github.png";
import { Container } from "../pages/styles";
import { Image } from "../pages/styles";
import Input from "../components/Input/index";
import ItemRepo from "../components/ItemRepo";
import Button from "../components/Button";
import { useState } from "react";
import api from "../services/api";
//import { ItemRepoContainer } from "../components/ItemRepo/styles";


function App() {
  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {

    const { data } = await api.get(`repos/${currentRepo}`);

    if (data.id) {
      const isExist = repos.find(repo => repo.id === data.id)

      if (!isExist) {
        setRepos(prev => [...prev, data]);
        setCurrentRepo('');
        return
      }
      alert('Repositório não encontrado')
    }
  }

  const handleRemoveRepo = (idParaRemover) => {
    const reposFiltrados = repos.filter(repo => repo.id !== idParaRemover);

    setRepos(reposFiltrados);
  }
  return (
    <Container className="App">
      <Image src={logoGit} alt="github-logo" className="git-logo" />
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />
      <Button onClick={handleSearchRepo} />
      {repos.map(repo => <ItemRepo key={repo.id} handleRemoveRepo={() => handleRemoveRepo(repo.id)} repo={repo} />)}
    </Container>
  );
}

export default App;
