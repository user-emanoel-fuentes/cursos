'''
Muitos dos dados que normalmente nós deparamos vem em arquivos "json", comumente usado
na programação.

Os dados do json são compostos em formato de objeto. 
'''

import pandas as pd

# Como no exemplo do csv, aqui podemos 
df = pd.read_json("data/data.json")

print(df)