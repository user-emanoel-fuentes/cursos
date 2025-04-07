import pandas as pd

'''
Podemos importar dados de arquivos como: csv, json, entre outros para a análise 
usando funções do pandas como: read_csv(), read_json(), entre outros.
'''

# leitura de csv's usando "read_csv":
df = pd.read_csv('data/data.csv')

# Imprimido o DataFrame, sem usar o método to_string(), que imprime apenas as 5 primeiras e ultimas linhas do DataFrame:
# print(df) 

# Podemos também imprimir o DataFrame usando o método to_string(), que imprime todos os dados do arquivo em formato de string:
# print(df.to_string())

# Retorna o número de linhas retornáveis definido nas configurações de opções do Pandas (default=60):
# print(pd.options.display.max_rows)

# Para aumentar, basta atribuir um novo valor:
# pd.options.display.max_rows = 9999 (Não recomendo, já que tem uma função que ja imprime tudo (to_string))