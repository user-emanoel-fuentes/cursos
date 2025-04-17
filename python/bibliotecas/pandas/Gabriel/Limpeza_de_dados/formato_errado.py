'''
Dados com formatação errada.

Células com dados em formatos errados podem ser muito dificeis de se lidar e analisar.

Para consertar este problema temos 2 opções: apagar as linhas com esses dados ou converter as células das colunas
no mesmo formato.
'''

# Corrigindo para o formato correto
# Na nossa base de dados temos 2 dados em formatos errados, nos índices de números 22 e 26, que na coluna 'Date'
# deveriam ser uma string.

# Vamos converter na coluna 'Date' todas as células para um dado 'date'(do pyuthon),
# o pandas tem o método 'to_datetime()' para fazermos isso:

import pandas as pd

df = pd.read_csv('data/data.csv')

# Convertendo a coluna "Date" para o formato date do python 
# (o mixed faz com que o método reconheça datas em diferentes formatos EX:"2024-01-01", "01/01/2024", "Jan 1, 2024")
df["Date"] = pd.to_datetime(df["Date"], format="mixed")

print(df.to_string())

# Após o resultado, podemos perceber que na linha de índice 26 o dado com o formato errado foi corrigido, 
# porém, no índice 22 (que estava vazio), foi recebido um valor NaT (not a Time, em outras palavras continua vazio), para lidarmos 
# com isso podemos remover esta linha da base de dados com o método dropna() (já visto no arquivo "celulas_vazias.py"):
# df.dropna(subset="Date", inplace=True)
# O 'subset="Date"' é o que define a coluna onde será apagado, nesse caso a coluna "Date" da nossa base de dados.