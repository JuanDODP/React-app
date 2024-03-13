import React from 'react';
// import { View, StyleSheet, ScrollView, Text, FlatList,Image } from 'react-native';
// import Valor from './components/valor'
// import captura from './components/captura'


const personas = [
  {

    id: "1",
    nombre: 'Miguel',
    sexo: 'Masculino',
    fechaNacimiento: '01/01/1990',
    domicilio: '123 Calle Principal'
  },
  {
    id: "2",
    nombre: 'Juan',
    sexo: 'Masculino',
    fechaNacimiento: '01/01/1990',
    domicilio: '123 Calle Principal'
  },
  {
    id: "3",
    nombre: 'PP',
    sexo: 'Masculino',
    fechaNacimiento: '01/01/1990',
    domicilio: '123 Calle Principal'
  },
  {
    id: "4",
    nombre: 'xd',
    sexo: 'Masculino',
    fechaNacimiento: '01/01/1990',
    domicilio: '123 Calle Principal'
  },
  {
    id: "5",
    nombre: 'asd',
    sexo: 'Masculino',
    fechaNacimiento: '01/01/1990',
    domicilio: '123 Calle Principal'
  },
  {
    id: "6",
    nombre: 'dtss',
    sexo: 'Masculino',
    fechaNacimiento: '01/01/1990',
    domicilio: '123 Calle Principal'
  },
  {
    id: "7",
    nombre: 'chiqupacoilin',
    sexo: 'Masculino',
    fechaNacimiento: '01/01/1990',
    domicilio: '123 Calle Principal'
  },
  {
    id: "8",
    nombre: 'peluchin',
    sexo: 'Masculino',
    fechaNacimiento: '01/01/1990',
    domicilio: '123 Calle Principal'
  },
  {
    id: "9",
    nombre: 'vane',
    sexo: 'Masculino',
    fechaNacimiento: '01/01/1990',
    domicilio: '123 Calle Principal'
  },
  {
    id: "10",
    nombre: 'esme',
    sexo: 'Masculino',
    fechaNacimiento: '01/01/1990',
    domicilio: '123 Calle Principal'
  },

];

export default function Tabla() {
  return (
    <ScrollView>
      <View style={styles.card}>
        <FlatList
          data={personas}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.row}>
              <Text style={styles.cell}>{item.id}</Text>
              <Text style={styles.cell}>{item.nombre}</Text>
              <Text style={styles.cell}>{item.sexo}</Text>
              <Text style={styles.cell}>{item.fechaNacimiento}</Text>
              <Text style={styles.cell}>{item.domicilio}</Text>
              <Image
              source={require(`../img/img4.jpg`)}
              style={{ width: 50, height: 50, borderRadius: 25 }}y
            />
            </View>
          )}
        />

 </View>

 </ScrollView>


   );
 }


 const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFEB3B',
    marginTop: 30,
    borderRadius: 10,
    shadowColor: 'red',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
   },
   row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 3,
    borderBottomColor: 'black',
    paddingVertical: 10,
   },
   cell: {
    flex: 1,
    textAlign: 'center',
   },
 });