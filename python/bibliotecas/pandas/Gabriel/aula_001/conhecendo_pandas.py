# Para instalar a biblioteca pandas, basta digitar o comando abaixo no seu terminal:
# pip install pandas

# Um DataFrame é uma estrutura de dados bidimensional (tabela) usada na biblioteca pandas do Python. 
# Ele é como uma planilha do Excel ou uma tabela de banco de dados, 
# onde os dados são organizados em linhas e colunas.

# Quabdo você instala o pandas, você pode importá-lo no seu código Python ultilizando o comando abaixo:

# Importando a biblioteca pandas como "pd":
import pandas as pd 

# Criando um dicionário com os dados para serem usados nesse exemplo:
data = {
  'name': ["Gabriel", "Otávio", "Evandro"],
  'age': [18, 20, 22],
  'city': ["São Paulo", "Rio de Janeiro", "Belo Horizonte"]
}

# Convertendo o dicionário em um DataFrame do pandas:
converted_data = pd.DataFrame(data) 

# Exibindo nosso dataframe:
print(converted_data) 

# Para vermos a versão do pandas ultilizada no nosso codigo, basta digitar o comando abaixo:
print(pd.__version__) 