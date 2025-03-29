import pandas as pd
import os

months = ["janeiro", "fevereiro", "março", "abril", "maio", "junho"]
current_path = os.getcwd() 

for month in months:
    path = f"{current_path}\\files\\{month}.xlsx"
    mark = 55000
    df = pd.read_excel(path)
    
    for line in df.index:
        salesman, sales = df.loc[line, "Vendedor"], df.loc[line, "Vendas"]
        if sales > mark:
            data = {
                "month": month,
                "salesman": salesman,
            } 
            print(data)