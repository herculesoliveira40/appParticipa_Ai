import { StyleSheet } from 'react-native';

import { themas } from "../../../global/themes";

export const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 16,
  },
  card: {
    width: '30%', // Ajusta o tamanho para caber 3 colunas
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 16,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 150,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 16,
  },
  description: {
    fontSize: 14,
    color: '#333',
    marginHorizontal: 16,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#007BFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    marginRight: 8,
  },
});
