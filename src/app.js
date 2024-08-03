import React from 'react'
import {
    FlatList,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput
} from 'react-native'
import ProductCard from './components/ProductCard'
import product_data from './product_data.json'

const app = () => {
    const renderProduct = ({item}) => <ProductCard product={item} />
  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.title}>PATIKASTORE</Text>
        <TextInput
            style={styles.input}
            placeholder='Ara...'
        />
        <FlatList
            data={product_data}
            renderItem={renderProduct}
            numColumns={2}
        />
        
    </SafeAreaView>
  )
}

export default app

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20
    },
    title: {
        fontSize: 34,
        fontWeight: 'bold',
        color: '#702283',
        marginLeft: 10,
        marginTop: 10
    },  
    input: {
        width: '95%',
        backgroundColor: '#eeeeee',
        marginTop: 10,
        marginLeft: 5,
        padding: 8,
        fontSize: 22,
        borderRadius: 12,
        marginBottom: 15
    },
    
   
})