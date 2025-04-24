"""
Correlação

Podemos correlacionar dados e, assim, entender melhor alguns comportamentos.
"""

import pandas as pd

# Usaremos dados mais simples para facilitar o entendimento do conceito de correlação.
# Criando um DataFrame simples com as colunas 'Dias de Estudo', 'Nota Prova 1' e 'Nota Prova 2'
data = {
    'Dias de Estudo': [1, 2, 3, 4, 5],
    'Nota Prova 1': [4, 5, 6, 7, 9],
    'Nota Prova 2': [5, 6, 7, 8, 9],
    'Horas de Sono': [6, 7, 8, 6, 5]
}

df = pd.DataFrame(data)

# Usamos o método "corr()" para obter a correlação entre as colunas do DataFrame
# Calculando a correlação entre as colunas e armazenando o resultado na variável "correlacao"
correlacao = df.corr() 

# Imprimindo a correlação entre as colunas:
print(correlacao)

# O resultado será:

#                 Dias de Estudo  Nota Prova 1  Nota Prova 2  Horas de Sono
# Dias de Estudo        1.000000      0.986394      1.000000      -0.416025
# Nota Prova 1          0.986394      1.000000      0.986394      -0.501557
# Nota Prova 2          1.000000      0.986394      1.000000      -0.416025
# Horas de Sono        -0.416025     -0.501557     -0.416025       1.000000

# Quanto mais próximo de "1" for o valor da correlação, mais forte é a relação positiva entre as colunas.
# Exemplo: quanto mais dias de estudo, maior tende a ser a nota da prova 1 (e também da prova 2).

# Já valores próximos de "-1" indicam uma forte correlação negativa:
# Ou seja, quanto mais dias de estudo, menores tendem a ser as horas de sono.

# Valores próximos de "0" indicam pouca ou nenhuma correlação entre as colunas.