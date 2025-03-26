import pandas as pd

# Uma maneira simples de armazenar grandes conjuntos de dados é usar arquivos CSV (arquivos separados por vírgula).

df = pd.read_csv('básico\DataFrames\data.csv')

# print(df.head()) # metodo head(), usado para imprimir uma quantidade específica de linhas, se nenhum valor for informado, 5 serão impressos; 

# print(df) # imprime um resumo dos dados existentes no arquivo csv. Apenas as 5 primeiras linhas e as 5 últimas linhas
# print(df.to_string()) # imprime o DataFrame inteiro.

# print(pd.options.display.max_rows) # retorna o número de linhas retornáveis definido nas configurações de opções do Pandas (default=60).
# Para aumentar, basta atribuir um novo valor: pd.options.display.max_rows = 9999 (Não recomendo, já que tem uma função que ja imprime tudo (to_string))