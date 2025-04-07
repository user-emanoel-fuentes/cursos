# Um DataFrame é uma estrututa de dados bidimensional do Pandas, 
# Como uma lista de 2 dimensões, ou uma tabela com linhas e colunas.
import pandas as pd

# Criando um Dict para o nosso DataFrame:
# data = {
#   "name": ["Gabriel", "Maria", "Isac"],
#   "age": [50, 40, 45],
#   "sex": ['M', 'F', 'M']
# }

# new_data = pd.DataFrame(data)

# Imprimindo nosso DataFrame:
# print(new_data)

# Conseguimos selecionar uma das linhas do nosso DataFrame usando ".loc[]" e dentro dos colchetes
# selecionarmos a linha que queremos em formato de indexes (começando do 0):
# print(new_data.loc[0])

# Podemos imprimir uma lista de linhas que queremos:
# # print(new_data.loc[[0, 1]])

data = {
  "name": ["Gabriel", "Maria", "Isac"],
  "age": [50, 40, 45],
  "sex": ['M', 'F', 'M']
}

# Nomeando index do DataFrame:
new_data = pd.DataFrame(data, index= ["user1", "user2", "user3"])

# Imprimindo linhas com base nos nomes (indexes):
print(new_data.loc[["user1", "user2"]])