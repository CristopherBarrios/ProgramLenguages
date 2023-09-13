import pandas as pd
import sys
import os

sys.path.insert(0, os.path.join(os.path.dirname(sys.path[0]),"Menu"))
from Menu.menu import *


def read_files():
    bienvenido()

    filename = input("Ingresar el nombre del archivo: ") + ".xlsx"
    ruta = os.getcwd() + '/ColoqueArchivo/' + filename
    sheet_name = input("Ingresar el nombre de la hoja: ")
    header = int(input("Ingresar el numero de fila: ")) - 1

    print(header)

    columns_df = []
    bienvenidoColumna()
    menuColumna()
    question = input("Selecciones una opcion: ")
    while question == "1":
        print("")
        columna = input("ingrese el nombre de la columna: ")
        columns_df.append(columna)
        print(columns_df)

        menuColumna()
        question = input("Selecciones una opcion: ")

    df = pd.read_excel(ruta, sheet_name, header)
    df = df[columns_df]

    return df


def filters(raw_df):
    bienvenidoFilters()
    columnaFiltro = input("Ingrese la columna del dato que desa filtrar: ")
    datoFiltro = input("Ingrese el dato que desea filtrar: ")

    df = raw_df[raw_df[columnaFiltro] == datoFiltro]

    return df

def create_csv(df):
    bienvenidoCsv()
    filenameFinal = input("Ingresar el nombre del archivo final: ")  
    rutaFinal = os.getcwd() + '/SaqueArchivo/' + filenameFinal
    df.to_csv(rutaFinal + ".csv", sep = ',', header = True, index = False)


def main():
    raw_df = read_files()
    filtered_df = filters(raw_df)
    create_csv(filtered_df)
    print("O finito")