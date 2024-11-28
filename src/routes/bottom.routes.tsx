import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from '../pages/login';
import Dashboard from '../pages/dashboard';
import Educ from '../pages/educ';
import Create from '../pages/create';
import CustomTabBar from '../components/CustomTabBar';
import Faq from '../pages/faq';

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
                    name="Faq" 
                    component={Faq} options={{ headerTitle: 'Faq' }}
                />
                <Tab.Screen
                    name="Create" 
                    component={Create} options={{ headerTitle: 'Create' }}
                />
            </Tab.Navigator>
        );
    }   