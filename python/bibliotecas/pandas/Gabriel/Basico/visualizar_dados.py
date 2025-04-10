"""
Podemos ter um "overview" ("visão geral") dos dados convertidos em dataframe,
com alguns metodos que o pandas nos fornece.
"""

import pandas as pd

df = pd.read_csv("data/data.csv")

# Usando função head() para visalizar as primeiras linhas dos dados
# Esta função automaticamente retorna as primeiras 5 linhas do nosso DataFrame:
# print(df.head())

# Podemos especificar na função quantas linhas quisermos
# Epecificando as 10 primeiras linhas:
# print(df.head(10))

# Também temos a função tails(), que retorna as ultimas linhas do DataFrame
# Retorna as 5 ultimas linhas:
# print(df.tail())

# Podemos ter algumas informações básicas dos nossos dados com a função info():
print(df.info())