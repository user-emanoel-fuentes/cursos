import pandas as pd

# Criando um novo DataFrame que não possui valores nullos;
df = pd.read_csv('data.csv')
df2 = df.dropna() 
print('1 - Criando um segundo DataFrame que não possui valores nullo')
print(df.info())
print(df2.info())
print()
# Editando o DataFrame existente (Neste cenário é obrigatório usar o atributo inplace com valor true);
print('2- Editando o DataFrame existente')
df3 = pd.read_csv('data.csv')
df3.dropna(inplace=True)

print(df3.to_string())
print(df3.info())
print()

# Também é possível atrelar um novo valor para os valores que são nullos:
print('3 - Alterando o valor das células vazias:')
df4 = pd.read_csv('data.csv')
# Alterando todos os DataFrames
# df4.fillna(9999, inplace=True) 

# Alterando os valores vazios de apenas uma coluna: 'df.method({col: value}, inplace=True)'
# df4.fillna({'Calorias':130}, inplace=True)

# Alterando usando Média, Mediana ou Moda (Estatísticas):
# Média:
""" mean()
Calcula-se somando todos os valores do conjunto e dividindo pelo número de valores
    É uma medida sensível aos valores da amostra
    É mais adequada quando os dados são distribuídos de forma mais ou menos uniforme
"""
# Mediana
""" median()
Calcula-se ordenando os valores do conjunto do menor para o maior e escolhendo o valor do meio 
    É o valor que está posicionado no centro do conjunto 
""" 
# Moda 
""" mode()
Calcula-se escolhendo o valor que aparece mais vezes no conjunto 
    É útil quando há muitos valores repetidos no conjunto 
    Pode não haver moda, haver uma moda, ou haver várias modas 
"""
df5 = pd.read_csv('data.csv')
valor_media = df5['Calorias'].mean()
valor_mediana = df5['Calorias'].median()
valor_moda = df5['Calorias'].mode()[0]
# df5.fillna({'Calorias':valor_media}, inplace=True)
# df5.fillna({'Calorias':valor_mediana}, inplace=True)
# df5.fillna({'Calorias':valor_moda}, inplace=True)
print(df4['Calorias'])
print(df5['Calorias'])

