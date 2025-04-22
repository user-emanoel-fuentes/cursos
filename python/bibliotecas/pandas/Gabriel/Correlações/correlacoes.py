"""

"""

import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt

# Criando um DataFrame simples com as colunas 'dias', 'nota1', e 'nota2'
data = {
    'Dias de Estudo': [1, 2, 3, 4, 5],
    'Nota Prova 1': [4, 5, 6, 7, 9],
    'Nota Prova 2': [5, 6, 7, 8, 9],
    'Horas de Sono': [6, 7, 8, 6, 5]
}

df = pd.DataFrame(data)

# Calculando a correlação entre as colunas
correlacao = df.corr()

# Gerando o gráfico de heatmap para visualizar a correlação
sns.heatmap(correlacao, annot=True, cmap='coolwarm', fmt='.2f')

# Exibindo o gráfico
plt.show()
print(correlacao)