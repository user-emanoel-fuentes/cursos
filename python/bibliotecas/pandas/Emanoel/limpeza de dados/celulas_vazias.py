import pandas as pd

# Criando um novo DataFrame que não possui valores nullos;
df = pd.read_csv('limpeza de dados\data.csv')
df2 = df.dropna() 
print('1 - Criando um segundo DataFrame que não possui valores nullo')
print(df.info())
print(df2.info())

# Editando o DataFrame existente (Neste cenário é obrigatório usar o atributo inplace com valor true);
print('2- Editando o DataFrame existente')
df3 = pd.read_csv('limpeza de dados\data.csv')
df3.dropna(inplace=True)

print(df3.to_string())
print(df3.info())

# Também é possível atrelar um novo valor para os valores que são nullos:
print('3 - Alterando o valor das células vazias:')
df4 = pd.read_csv('limpeza de dados\data.csv')