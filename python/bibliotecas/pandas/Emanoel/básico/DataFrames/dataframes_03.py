# JSON é um texto simples, mas tem o formato de um objeto e é bem conhecido no mundo da programação, incluindo o Pandas.
import pandas as pd

df = pd.read_json('básico\DataFrames\data.json')

print(df.to_string())