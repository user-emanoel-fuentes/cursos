# Métodos que auxilia na análise de dados.
import pandas as pd

df = pd.read_csv('básico\DataFrames\data.csv')

# to_string() - Imprime todos os dados do arquivo.
# print(df.to_string())

# head(n) - Do começo ao fim, imprime a quantidade linhas especificadas no parâmetro 'n' (número). Se estiver em branco, imprimirá por padrão 5 linhas.
print(df.head())

# tail(n) - Mesmo comportamento, entretando do final para o começo.
print(df.tail())

# info() - Oferece informações detalhadas sobre o DataFrame selecionado/criado
print(df.info())