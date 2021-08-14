import React, {useState, useEffect} from 'react'
import {View, StyleSheet, Text, Button, FlatList} from 'react-native'
import NewsCard from '../Components/NewsCard'
import newsAPI from '../Apis/News'

const Home = ({navigation}) => {

    const [news, setNews] = useState([])

    useEffect(() => {
        getNewsFromApi()
    }, [])

    // const newsResponse = async () => {
    //     const response = await newsAPI.get('top-headlines?country=us&apiKey=72d2a0865ac740eb860785c920c9f54e')
    //     console.log(response.data)
    // }

    function getNewsFromApi() {
        newsAPI.get('top-headlines?country=us&apiKey=72d2a0865ac740eb860785c920c9f54e').then(function (response) {
            setNews((response.data))

        }).catch(function (error) {
            console.log(error)
        })
    }

    if (!news){
        return null
    }

    return (
        <View>
            <FlatList data={news.articles}
                      keyExtractor={(item, index) => 'key' + index}
                      renderItem={({item}) => {
                          return <NewsCard item = {item}/>
                      }}
            />
        </View>
    )
}

export default Home;
