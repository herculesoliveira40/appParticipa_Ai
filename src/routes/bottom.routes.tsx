import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Educ from '../pages/educ';
import DashBoard from '../pages/dashboard';
import Login from '../pages/login';

const Tab = createBottomTabNavigator();

    export default function BottomRoutes() {
        return(
            <Tab.Navigator>
                <Tab.Screen name="Login" component={Login} options={{ headerTitle: 'Login' }} />
                <Tab.Screen name="DashBoard" component={DashBoard} options={{ headerTitle: 'Dashboard' }} />
                <Tab.Screen name="Educ" component={Educ} options={{ headerTitle: 'Educ' }} />
            </Tab.Navigator>
        );
    }   