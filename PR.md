## Setup da base de dados

O ficheiro da base de dados foi primeiramente convertido para o formato json com o script python `csv_to_json.py`. Este script cria o `output.json` que será posteriormente importado para o MongoDB. Correu-se o seguinte comando:

```
python csv_to_json.py
```

Tento o ficheiro json, criou-se um container no docker para a base de dados com o script python `setup-container.py` (é necessário ter o docker a correr). Este script irá fazer todo o processo de setup da base de dados no docker. Correu-se o seguinte comando:

```
python setup-container.py contratos contratos ./output.json
```

## Executar as aplicações

Para correr ambas as aplicações dos exercicios do teste é necessário ir para a diretoria da aplicação (contratos em ambos os casos) e correr os seguintes comandos:

```
npm install
npm start
```