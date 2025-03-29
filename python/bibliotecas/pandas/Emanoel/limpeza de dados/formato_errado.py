# Limpeza de dados com formato errado:
import pandas as pd

# Aplicado ajuste na coluna 'Data' para verifcar dados com formato errado, foram substituídos por 'NaT'.
df = pd.read_csv('data.csv')

df['Data'] = pd.to_datetime(df['Data']) 

print(df.to_string())
print()
print()

# Obs: Se o valor não estiver formatado dentro do esperado pelo método o sistema retornará um erro no valor relacionado a estrutura.

# Removendo os valores nullos NaT:
df.dropna(subset=['Data'], inplace=True)
print(df.to_string())