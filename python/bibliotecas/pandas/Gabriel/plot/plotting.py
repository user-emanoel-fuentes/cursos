'''
Pandas usa o método "plot()" para criar diagramas dos nossos dataframes.

Podemos usar o "Pyplot", um submódulo da biblioteca "Matplotlib" para visualizar o diagrama na tela.
'''

import pandas as pd
# Importando a biblioteca matplotlib como "plt":
import matplotlib.pyplot as plt

# Criaremos outros dados para visualização mais simples como no exemplo de correlações.

data = {
    'notas': [8, 7, 9, 4, 10],
    'faltas': [5, 8, 2, 10, 0]
}

df = pd.DataFrame(data, index = ["prova 1", "prova 2", "prova 3", "prova 4", "prova 5"])

# Usamos "df.plot()":
df.plot()

# Então imprimimos o diagrama:
plt.show()

# Temos outros tipos de gráficos como o "Scatter Plot", "Histogram", entre outros gráficos.
# Exs:

# Scatter Plot:

# df.plot(kind= "scatter", x= "notas", y= "faltas")
# plt.show()

#===========================================================================#

# Histogram:

# df["notas"].plot(kind = 'hist')
# plt.show()