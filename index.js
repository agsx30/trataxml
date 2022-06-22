var fs = require('fs');

console.log('*** Conversão XML ***');

let files = fs.readdirSync('./origem');

console.log(files);

files.forEach(file => { 

  let texto = fs.readFileSync('./origem/' + file, { encoding: 'latin1' });
  let posic = 0;
  let cont = 0;

  // console.log(texto);

  do { 

    posic = texto.indexOf('</CodExmLab>', posic + 1);

    if ( posic >= 0 ) { 

      let posponto = texto.substring(posic - 5, posic).indexOf('.');

      if ( posponto >= 0 ) { 
        texto = texto.substring(0, posic - 5 + posponto) + texto.substring(posic);
      }

    }

    cont ++;

  } while ( posic >= 0 && cont < 1000 )

  
  fs.writeFileSync('./destino/' + file, texto, { encoding: 'latin1' });

  console.log("Convertido arquivo: ./destino/" + file);

});

