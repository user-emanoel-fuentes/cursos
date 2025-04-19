'''
Dados errados

Dados errados não são células vazias, nem dados em formatos errados, mas sim dados que não fazem sentido para a nossa análise,
Como se alguém colocasse o número 199 invés de 1,99 por exemplo.

As vezes você pode identificar dados errados análisando o padrão da base de dados, assim vendo que ele não se encaixa no padrão.

No índice de número 7 da nossa base de dados podemos ver um "dado errado", a duração está como "450", mas todas as outras linhas
da coluna estão de 30 para 60.

Levando em conta que este é o tempo para treino de academia e que todos os outros dados são de 30 para 60 minutos, podemos
considerar que não teve alguma pessoa que treinou 450 minutos.
'''

# Reatribuindo valor
# Podemos substituir o valor que queremos por outro, como faremos a seguir substituindo o "450" para "45":
import pandas as pd

df = pd.read_csv("data/data.csv")

# Atribuindo valor 45 no dado errado:
#     índice, coluna
# df.loc[7, "Duration"] = 45

# print(df.to_string())

# Para pequenas bases de dados você pode substituir os dados errados um por um, porém para bases maiores isso não é bom.
# Com bases de dados maiores podemos ultilizar a lógica de programação para melhor manipulação, por exemplo:

for x in df.index:
    if df.loc[x, "Duration"] > 120:
        df.loc[x, "Duration"] = 120

# Neste exemplo todos os dados da coluna "Duration" que são maiores que 120 passarão a ser 120:

print(df.to_string)

# Também sempre temos a opção de remover as linhas.
# Usando a mesma lógica do for para bases grandes:

# for x in df.index:    
    # if df.loc[x, "Duration"] > 120:
        # df.drop(x, inplace = True)