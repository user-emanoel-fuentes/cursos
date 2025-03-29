# Um dado errado, nem sempre é uma célula vazia ou mal formatada. Também pode ser um valor fora do esperado, neste arquivo 
# Trarei sugestões de como aplicar ajustes.

import pandas as pd

df = pd.read_csv("data.csv")

# No arquivo csv "data", na linha 7 da coluna "Duração" o tempo está acima de 60 minutos o que não é esperado para um arquivo que possui relação com treinos. 
# 450 minutos é muito tempo.

# Aplicando correção localizada (Substituindo unico valor).
df.loc[7,"Duração"] = 45
print(df.to_string())
print()
print()

# Aplicando ajuste baseando-se em regras (Substituindo vários valores).
for i in df.index:
    df.loc[i, "Duração"] = 120 if df.loc[i, "Duração"] > 120 else df.loc[i, "Duração"]

# Removendo valores que não se enquadram em uma regra.
for id in df.index:
    df.loc[id, "Duração"] = df.drop(id, inplace=True) if df.loc[id, "Duração"] > 120 else df.loc[id, "Duração"]
    
    