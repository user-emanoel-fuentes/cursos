'''
Duplicatas nas bases de dados, são normalmente linhas que por algum motivo se repetiram na base.
Temos na nossa tabelo os exemplos de índices "11" e "12".
'''

# Para descobrirmos se temos duplicatas usamos o método "duplicated()",
# este método retorna valores booleanos para cada linha:
import pandas as pd

df = pd.read_csv("data/data.csv")

# Retorna "True" para duplicatas e "False" para as que não são.
print(df.duplicated())

# Ou seja se ele passar por uma linha que, já antes tinha os mesmos dados, ele marcará "True".

# Para remover as duplicatas usamos o método "drop_duplicates()"

# Removendo duplicatas:

df.drop_duplicates(inplace = True)

print(df.duplicated())