import axios, { Axios } from "axios"
import { useState } from "react"
import { SafeAreaView, StatusBar, Text, View } from "react-native"
import MyButton from "../components/MyButton"

const CatFacts = () => {

    const [CatFact, setCatFact] = useState()

    const fetchCatFact = async () => {
        
        try {
            const catFactResponse = []
            for (let i; i <=1; i++) {
                const {data} = await axios.get('https://catfact.ninja/fact') 
                 catFactResponse.push(data.fact)    

            }
            setCatFact(catFactResponse) 
    
        } catch(error) {
            console.log(error)    
        }
    }

    return (
        <SafeAreaView>
            <StatusBar />
            <View>
                <Text>Cats facts</Text>
                <MyButton title="Fato aleatório sobre gatos" onPressButton={fetchCatFact}/>
                <View>
                    {CatFact?.length ? CatFact.map(cf => (
                        <Text style={{marginTop: 20}}>{cf}</Text>
                    )) : <></>}
                </View>
            </View>
        </SafeAreaView>     
    )    
}

export default CatFacts