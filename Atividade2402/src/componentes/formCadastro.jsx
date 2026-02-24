import React from 'react'
import { Container, TextField, Button, Stack, Typography } from '@mui/material'

function FormCadastro() {
    function validarEmail(email) {
        let erro = false;
        if (email === '') {
            erro = true;
        }
  return erro;    }
    return (
        <Container sx={{ mt:4 }}>
                <Typography variant="h5">Cadastro de Usuário</Typography>
                <Stack spacing={3} sx={{ mt: 2 }}>
                    <TextField label="Nome Completo" variant="outlined" />
                    <TextField label="E-mail" 
                    type='email'
                    error={validarEmail('')}
                    helperText= 'O campo de e-mail é obrigatório.' 
                    variant="outlined" 
                    fullWidth />
                    <Button variant="contained" size="large">Cadastrar</Button>
                </Stack>
        </Container>
    );
}

export default FormCadastro
