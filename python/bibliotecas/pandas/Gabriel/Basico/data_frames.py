# Um DataFrame é uma estrututa de dados bidimensional do Pandas, 
# Como uma lista de 2 dimensões, ou uma tabela com linhas e colunas.
import pandas as pd

# Criando um Dict para o nosso DataFrame:
data = {
  "name": ["Gabriel", "Evandro", "Isac"],
  "age": [50, 40, 45],
  "sex": ['M', 'F', 'M']
}

new_data = pd.DataFrame(data)

print(new_data)