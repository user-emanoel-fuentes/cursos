# Series em pandas é uma estrutura de dados unidimensional do Pandas, semelhante a uma lista ou array
import pandas as pd

# Criando uma Series a partir de uma lista
# numbers = pd.Series([10, 20, 30, 40])
# print(numbers)  Cada número recebeu um índice automaticamente (0, 1, 2, 3).

# Criando uma lista de notas de alunos:
# notas = [8.5, 9.0, 7.5]

# Criando uma Series com as notas e colocando seu index com os nomes dos alunos:
# data = pd.Series(notas, index=["Gabriel", "Otávio", "Evandro"])
# print(data)
# print(data["Gabriel"])  # Acessando um elemento da Series pelo seu index

# Temos algumas funções do Series que podemos usar para fazer operações com os dados:

# print(data.mean())  # Média dos valores
# print(data.max())   # Maior valor
# print(data.min())   # Menor valor
# print(data[data > 8])  # Filtra notas maiores que 8

# =====================================================================================

calories = {"day1": 420, "day2": 380, "day3": 390}

# Filtrando os dados para pegar apenas os valores dos dois primeiros dias
data = pd.Series(calories, index = ['day1', 'day2'])

print(data)