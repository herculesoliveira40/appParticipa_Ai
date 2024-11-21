import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from '../pages/login';
import Dashboard from '../pages/dashboard';
import Educ from '../pages/educ';
import User from '../pages/user';
import CustomTabBar from '../components/CustomTabBar';

const Tab = createBottomTabNavigator();

    export default function BottomRoutes() {
        return(
            <Tab.Navigator
            screenOptions={{
                headerShown: false
            }}
            tabBar={props=><CustomTabBar {...props}/>}    
            >
                <Tab.Screen 
                    name="Login" 
                    component={Login} options={{ headerTitle: 'Login' }} 
                />
                <Tab.Screen 
                    name="Dashboard" 
                    component={Dashboard} options={{ headerTitle: 'Dashboard' }} 
                />
                
                <Tab.Screen 
                    name="Educ" 
                    component={Educ} options={{ headerTitle: 'Educ' }} 
                />
                <Tab.Screen
                    name="User" 
                    component={User} options={{ headerTitle: 'User' }}
                />
            </Tab.Navigator>
        );
    }   