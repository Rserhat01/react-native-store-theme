import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const ProductCard = ({product}) => {
  return (
    <View style={styles.container}>
      <View style={styles.column}>
        <Image style={styles.image} source={{uri: product.imgURL}}/>
        <View style={styles.stepContainer}>
            <Text style={styles.pTitle}>{product.title}</Text>
            <Text style={styles.pPrice}>{product.price}</Text>
            {
                product.inStock ? null : <Text style={styles.stock}>STOKTA YOK</Text>
            }
        </View>
      </View>
    </View>
  )
}

export default ProductCard

const styles = StyleSheet.create({
    container: {
      flex:1,
      flexDirection: 'row',  
    },
    column: {
        justifyContent: 'center',
    alignItems: 'center',
      flex: 1, 
      backgroundColor: '#eeeeee',
      margin: 5,
      padding: 5,
      borderRadius: 12,
    },
    image: {
        width: '100%',
        height: 200,
        marginTop: 10,
        borderRadius: 12,
        resizeMode: 'contain'
    },
    stepContainer: {
        width: '100%',
        textAlign: 'left',
        marginTop: 15,

    },
    pTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10
    },
    pPrice: {
        color: 'grey',
        fontSize: 14,
        fontWeight: 'bold'
    },
    stock: {
        fontSize: 16,
        color: 'red',
        fontWeight: 'bold'
    },
  });