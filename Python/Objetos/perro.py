class Perro:

    #constructor
    def __init__(self, n, r, c):
        self.tamanio = None
        self.edad = 0
        self.color = c
        self.raza = r
        self.nombre= n

        #metodos
    def ladrar(self):
        print("{} esta ladrando".format(self.nombre))
    
    def comer(self):
        print("{} esta comiendo".format(self.nombre))
    
    def jugar(self):
        print("{} esta jugando".format(self.nombre))
    

    #sets y gets
    def cambiar_nombre(self,nombre):
        self.nombre = nombre
        print("El perro se llama {}".format(nombre))
    
    def set_edad(self, edad):
        self.edad = edad
        print("{} ahora tiene {} años".format(self.nombre,self.edad))
    
    def cumpleaños(self):
        self.edad += 1
        print("{} ahora tiene {} años".format(self.nombre,self.edad))

    


#instanciar un objeto
Chano =Perro("chano", "perico", "verde")
print(Chano.nombre)
Chano.comer()
Chano.cumpleaños()
Chano.cumpleaños()
Chano.cumpleaños()

Firo = Perro("Firo","loro", "azul")
Firo.jugar()
Firo.set_edad(5)