import { useState } from 'react'
import FormCadastro from './componentes/formCadastro'
import Quantidade from './componentes/quantidade'
import FormPreferencias from './componentes/FormPreferencias';
import FormConfiguracoes from './componentes/FormConfigurações';
import CadastrodeProdutos from './componentes/CadastrodeProdutos';

function App() {
  return (  
    <div>
    <FormCadastro />
    <Quantidade />
    <FormPreferencias />
    <FormConfiguracoes />
    <CadastrodeProdutos />
    </div>
  );
}

export default App
