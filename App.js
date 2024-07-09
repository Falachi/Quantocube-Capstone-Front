import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Provider } from 'react-redux';

import LoginScreen from './app/LoginScreen';
import SignupScreen from './app/SignupScreen';
import ForgotPasswordScreen from './app/ForgotPasswordScreen';
import VerificationScreen from './app/VerificationScreen';
import ResetPasswordScreen from './app/ResetPasswordScreen';
import HomeownerHomePage from './app/HomeownerHomepage';
import ContractorHomePage from './app/ContractorHomepage';
import HomeownerProjectOverview from './app/HomeownerProjectOverview';
import ServiceRequest from './app/ServiceRequest';
import ServiceApproved from './app/ServiceApproved';
import ServiceDeclined from './app/ServiceDeclined';
import ContractorOptionScreen from './app/ContractorOptionScreen';
import ContractorProjectOverview from './app/ContractorProjectOverview';
import NewRequestScreen from './app/NewRequestScreen';
import RequestAcceptedScreen from './app/RequestAcceptedScreen';
import RequestDeclinedScreen from './app/RequestDeclinedScreen';
import DraftQuotationScreen from './app/DraftQuotationScreen';
import ContractorProfileScreen from './app/ContractorProfileScreen';


import FindPros from './app/FindPros';
import FindProsCategory from './app/FindProsCategory';
import FindProsListing from './app/FindProsListing';

import Home from './apps/Home';
import Screen from './apps/messaging/Screen'; // Import the Screen component
import store from './store'; // Import the store
import InitContractor from './apps/prop-screens/InitContractor';
import MessageList from './apps/messaging/MessageList';
import RequestForm from './apps/messaging/request-form/RequestForm'
import RequestDetails from './apps/messaging/request-form/RequestDetail';
import QuotationDetails from './apps/messaging/quotation-form/QuotationDetail';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" screenOptions={{
          cardStyle: { flex: 1 }, // Setting flex: 1 for each screen's container
        }}>
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="Signup" component={SignupScreen} />
          <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
          <Stack.Screen name="Verification" component={VerificationScreen} />
          <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
          <Stack.Screen name="HomeownerHomePage" component={HomeownerHomePage} />
          <Stack.Screen name="ContractorHomePage" component={ContractorHomePage} />
          <Stack.Screen name="HomeownerProjectOverview" component={HomeownerProjectOverview} />
          <Stack.Screen name="ServiceRequest" component={ServiceRequest} />
          <Stack.Screen name="ServiceApproved" component={ServiceApproved} />
          <Stack.Screen name="ServiceDeclined" component={ServiceDeclined} />
          <Stack.Screen name="ContractorOptionScreen" component={ContractorOptionScreen} />
          <Stack.Screen name="ContractorProjectOverview" component={ContractorProjectOverview} />
          <Stack.Screen name="NewRequestScreen" component={NewRequestScreen} />
          <Stack.Screen name="RequestAcceptedScreen" component={RequestAcceptedScreen} />
          <Stack.Screen name="RequestDeclinedScreen" component={RequestDeclinedScreen} />
          <Stack.Screen name="DraftQuotationScreen" component={DraftQuotationScreen} />
          <Stack.Screen name="FindPros" component={FindPros} options={{ headerShown: false }} />
          <Stack.Screen name="FindProsCategory" component={FindProsCategory} options={{ headerShown: false }} />
          <Stack.Screen name="FindProsListing" component={FindProsListing} options={{ headerShown: false }} />
          <Stack.Screen name="ContractorProfileScreen" component={ContractorProfileScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          <Stack.Screen name="Screen" component={Screen} options={{ headerShown: false }} />
          <Stack.Screen name='InitContractor' component={InitContractor} options={{headerShown: false}} />
          <Stack.Screen name='MessageList' component={MessageList} options={{headerShown: false}} />
          <Stack.Screen name='RequestForm' component={RequestForm} options={{headerShown: false}} />
          <Stack.Screen name='RequestDetails' component={RequestDetails} options={{headerShown: false}} />
          <Stack.Screen name='QuotationDetails' component={QuotationDetails} options={{headerShown: false}} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider >
  );
};

export default App;