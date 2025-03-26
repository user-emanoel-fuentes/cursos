# 'serie' em pandas é uma matriz de dimensão única, utilizada para representar as colunas de uma tabela;

import pandas as pd

colunas0 = pd.Series(['nome', 'idade', 'altura', 'sexo']) # Colunas sem posições nomeadas
print(colunas0[3]) # imprime: sexo

cols = ['nome', 'idade', 'altura', 'sexo']
colunas1 = pd.Series(cols, index=['n', 'i', 'a', 's']) # Atribuindo rótulos as posições é possível acessar o valor por seu novo valor.
print(colunas1['s']) # imprime: sexo

# ===============================================================================================================================================
objeto_pessoa = {
    'nome':"João Guilherme", 
    'idade':15,
    'altura':1.64,
    'sexo':'M'} 

# Automaticamente as chaves do dict se tornam rótulos, possibilitando acessar o seu valor por eles.
colunas = pd.Series(objeto_pessoa)
print(colunas['sexo'])

# Também é possível criar séries com valores específicos relacionando no argumento index quais serão utilizados;
colunas2 = pd.Series(objeto_pessoa, index=['nome', 'idade'])
print(colunas2)
