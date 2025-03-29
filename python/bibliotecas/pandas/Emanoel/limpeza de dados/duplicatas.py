# É comum em relatórios aparecerem linhas duplicadas. Em algumas análises, evitamos dados duplicados usando apenas um valor. Neste arquivo trabalharemos esse tipo de situação.
import pandas as pd

df = pd.read_csv("data.csv")

print(df.to_string())
print()

# O método "duplicated()" passea por todas as linhas do DataFrame validando se são duplicadas e retorna em cada linha um valor booleano, True ou False.
print(df.duplicated()) 
print()

# O método "drop_duplicates()" retorna none depois de ter as linhas duplicadas removidas # Observação: Lembrar de adicionar o paramâtro inplace=True para não criar um novo DataFrame
# mas ajustar o atual.
print(df.drop_duplicates(inplace=True))
