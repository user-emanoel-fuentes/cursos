# Um Pandas DataFrame é uma estrutura de dados bidimensional, como uma matriz bidimensional ou uma tabela com linhas e colunas.
import pandas as pd

data = {
    'nomes' : ["João", "Pedro", "Antônio", "Lucas"],
    'idades' : [15, 25, 30, 18],
}
df = pd.DataFrame(data)

# Imprime o dicionário numa disposição tabular, onde as chaves são colunas e valores são linhas.
print(df)
print()

# "loc" (atributo): retorna coluna e linha do indice especificado.
print(df.loc[2])
print()

#   Também é possível informar uma lista de indices, desta forma:
print(df.loc[[0,2,3]])
print()

# Tabém podemos usar os argumento 'index' e 'loc' no DataFrame, da mesma forma que usamos no 'Series':
df_index = pd.DataFrame(data, index=["pessoa0", "pessoa1", "pessoa2", "pessoa3"])
print(df_index)
print()
print(df_index.loc['pessoa2'])
