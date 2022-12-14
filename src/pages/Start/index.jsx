import React from "react";
import { View, Text, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function Start(){

return(
    <View>
        <ScrollView showsVerticalScrollIndicator={false}>
            <view>
                <image
                    sorce={require("../..>asstes/icons/logos3.png")}
                    />
                <text>
                    Vamos transformar sua vida {"/n"}em jogo , Buscando sempre{"/n"} o melhor nível
                </text>       
            </view>        
        </ScrollView>
    </View>

)

}
