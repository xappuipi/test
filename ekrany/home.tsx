import { View, Text, TouchableOpacity } from "react-native"
import container from "../styles/container"
import MenuBar from "../kontenery/menu"
import { lambda } from "../cokolwiek"
import { useState } from "react"
import opacity from "../styles/opacity"
import text_button from "../styles/text_button"

const Home = () =>{
    const [jakis_int, setJakis_int] = useState(0);
    return(    
    <View style={container.container}>
        <View  style={container.center}>
            <Text>{jakis_int}</Text>
            <Text>{lambda()}</Text>
        </View>
    {/* <StatusBar style="auto" /> */}
        <View  style={container.bottom}>
            <TouchableOpacity style={opacity.opacity} onPress={()=>{setJakis_int(jakis_int+1)}}>
                <Text style={text_button.color}>abcd</Text>
            </TouchableOpacity>
        </View>
    </View>
    );
}

export default Home