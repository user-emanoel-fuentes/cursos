'''
Células vazias nos dados.

Uma das formas de lidar com células vazias dos nossos dados é:
Remover a linha daquela célula.

Normalmente este tipo de tratamento de dados é comum, desde que, a nossa base de dados
seja grande e, removendo estas linhas com dados vazios ou errados não interfiram no nosso resultado final.
'''

import pandas as pd

# df = pd.read_csv("data/data.csv")

# Ultilizando a função dropna() na base dados podemos remover as linhas com células vazias:
# new_df = df.dropna()

# print(new_df)   

# OBS: A função dropna() retorna um novo DataFrame, não modificando o original.
# Se quisermos mudar o dataframe original ultilizamos o argumento 'inplace = True':

# new_df = df.dropna(inplace=True)

# Caso queira imprimir os dados (visualmente não há diferença):
# print(new_df.to_string())

# OBS: com o "inplace=True" não retornamos um novo DataFrame, mas, modificamos o original tirando suas linhas vazias.

# =================================================================================================================== #

# SUBSTITUINDO CÉLULAS VAZIAS

# Outra forma de lidar com células vazias é: substitui-las por um dados novo
# Desta forma não precisamos apagar linhas por conta de algumas células.
# Ultiizamos a função "fillna()" para esta substituição. 

# df = pd.read_csv("data/data.csv")

# Com o código abaixo, todas as células vazias serão preenchidas com o int 130:
# df.fillna(130, inplace=True)

# Podemos também substituir as células vazias pelas colunas selecionadas no DataFrame:
# df.fillna({"Calories": 140}, inplace=True)

# print(df)

# ============================================================================================================= #

# SUBSTITUINDO POR MÉDIA, MODA OU MEDIANA

# Outra maneira comum de substituir os dados seriam colocando a média, moda ou mediana da coluna
# no lugar dessas células vazias:

df = pd.read_csv("data/data.csv")

# Calculando média dos valores na coluna "Calories"
calories_mean = df["Calories"].mean()

# Calculando moda dos valores na coluna "Calories"
calories_mode = df["Calories"].mode()[0]
# Calculando mediana dos valores na coluna "Calories"
calories_median = df["Calories"].median()

# Inserindo média nas células vazias da coluna de "Calories":
df.fillna({"Calories": calories_mean}, inplace=True)

print(df)

# mean() → Média aritmética (soma dos valores ÷ quantidade).
# Ex: [2, 3, 5] → (2+3+5)/3 = 3.33

# median() → Valor do meio (lista ordenada).
# Ex: [1, 3, 5] → 3 (números ímpares)
# [1, 2, 3, 4] → (2+3)/2 = 2.5 (números pares)

# mode() → Valor que mais se repete.
# Ex: [1, 2, 2, 3] → 2

