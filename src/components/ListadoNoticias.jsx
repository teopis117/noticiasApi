import React from 'react'
import { Grid, Pagination, Stack } from '@mui/material'
import {Typography} from '@mui/material'
import useNoticias from '../hooks/useNoticias'
import Noticia from './Noticia'

function ListadoNoticias() {
    
    const {noticias,totalNoticias,handleChangePagina,pagina}=useNoticias();
    console.log(totalNoticias);
    const totalPaginas=Math.ceil(totalNoticias/20);

    console.log(totalPaginas);
  
    return (
        <>
        
    <Typography textAlign={'center'} marginY={5} variant='h3' component={'h2'}>
      Ultimas noticias  
    </Typography>
    <Grid container spacing={2}>

    {noticias.map(noticia=>(
        <Noticia noticia={noticia} key={noticia.url}/>
    ))}
    </Grid>
    <Stack spacing={2} direction='row' justifyContent='center' alignItems='center' sx={{marginY:5}}>
      <Pagination count={totalPaginas} variant="outlined" color="primary" onChange={handleChangePagina} page={pagina}/>
      
    </Stack>
    </>
  )
}

export default ListadoNoticias
