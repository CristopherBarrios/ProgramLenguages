import random


def jugar():
    usuario = input("Escoge una opcion: 'pi' para piedra, 'pa' para papel, 'ti' para tijera.\n").lower()
    computadora = random.choice(['pi','pa','ti'])
    print('Computadora escogio: ' + computadora)

    if usuario == computadora:
        return 'Empate'
    
    if Gano_el_jugador(usuario,computadora):
        return 'Ganaste'

    return 'Perdiste'


def Gano_el_jugador(jugador, oponente):
    if ((jugador == 'pi' and oponente == 'ti')
        or (jugador == 'ti' and oponente == 'pa')
        or (jugador == 'pa' and oponente == 'pi')):
        return True
    else:
        return False

while True:
    print(jugar())
