import { NavigationAction, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Start from "../pages/Start";

const Stack = createNativeStackNavigator();

export default function Allpages(){
    return(
        <NaviigationContainer>
            <Stack.Navigator
                screenOpitions = {{
                    headerShown:fase
                }}
            />
            <Stack.Screen name = "Start" component = {Start}  />  
        </NaviigationContainer>
    )
}