import pandas as pd
import matplotlib.pyplot as plt

df = pd.read_csv('data.csv')

# O método plot() cria diagramas baseado no DataFrame, entretanto é denpendente do Pyplot da Biblioteca Matplotlib

# argumento "kind" usado para informar o tipo de gráfico. 
# Exemplo dispersão que precisa de dois eixos x,y:

# df.plot(kind="scatter", x="Duration", y="Maxpulse")

# histograma:
# df["Duration"].plot(kind="hist")

df.plot()
plt.show()