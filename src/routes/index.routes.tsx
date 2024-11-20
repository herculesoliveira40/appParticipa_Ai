import React  from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../pages/login';
import Dashboard from '../pages/dashboard';
import Educ from '../pages/educ';
import BottomRoutes from './bottom.routes';

export default function Routes() {
    const Stack = createStackNavigator();
    return(
        <Stack.Navigator 
            initialRouteName="Login" 
            screenOptions={{
                headerShown: false
            }
        }>
            <Stack.Screen name="Login" component={Login} options={{ headerTitle: 'Login' }} />
             <Stack.Screen name="BottomRoutes" component={BottomRoutes} options={{ headerTitle: 'BottomRoutes' }} />
            {/* <Stack.Screen name="Educ" component={Educ} options={{ headerTitle: 'Educ' }} /> */}
        </Stack.Navigator>
    )
}
