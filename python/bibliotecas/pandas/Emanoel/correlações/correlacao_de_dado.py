import pandas as pd

df = pd.read_csv("data.csv")

# O método "corr()" analisa o DataFrame identificando as correlações entre as colunas, ignorando colunas não numéricas.
print(df.corr()) 
"""
Resultado Explicado
O resultado do corr()método é uma tabela com muitos números que representam o quão bem é o relacionamento entre duas colunas.

O número varia de -1 a 1.

1 significa que há uma relação de 1 para 1 (uma correlação perfeita) e, para esse conjunto de dados, cada vez que um valor subia na primeira coluna, a outra também subia.

0,9 também é uma boa relação e, se você aumentar um valor, o outro provavelmente aumentará também.

-0,9 seria uma relação tão boa quanto 0,9, mas se você aumentar um valor, o outro provavelmente diminuirá.

0,2 significa que NÃO é um bom relacionamento, ou seja, se um valor sobe não significa que o outro também aumentará.
"""

# O que é uma boa correlação? Depende do uso, mas acho que é seguro dizer que você tem que ter pelo menos 0.6(ou -0.6) 
# para chamá-la de uma boa correlação.

""" 
Análise Final
    Correlação perfeita:
        Podemos ver que "Duration" e "Duration" receberam o número 1.000000, 
        o que faz sentido, cada coluna sempre tem um relacionamento perfeito consigo mesma.

    Boa correlação:
        "Duração" e "Calorias" têm uma 0.922721correlação, que é uma correlação muito boa, 
        e podemos prever que quanto mais tempo você treina, mais calorias você queima, 
        e vice-versa: se você queimou muitas calorias, provavelmente fez um treino longo.

    Correlação ruim:
        "Duração" e "Pulso máximo" obtiveram uma 0.009403correlação, que é uma correlação muito ruim, 
        o que significa que não podemos prever o pulso máximo apenas observando a duração do treino, e vice-versa.
"""