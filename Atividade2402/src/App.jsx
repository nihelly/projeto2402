import { useState } from 'react'
import FormCadastro from './componentes/formCadastro'
import Quantidade from './componentes/quantidade'
import FormPreferencias from './componentes/FormPreferencias';
import FormConfiguracoes from './componentes/FormConfigurações';

function App() {
  return (  
    <div>
    <FormCadastro />
    <Quantidade />
    <FormPreferencias />
    <FormConfiguracoes />
    </div>
  );
}

export default App
