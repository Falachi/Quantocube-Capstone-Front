import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { store } from '../store';

import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen';
import ForgotPasswordScreen from './ForgotPasswordScreen';
import VerificationScreen from './VerificationScreen';
import ResetPasswordScreen from './ResetPasswordScreen';
import HomeownerHomePage from './HomeownerHomepage';
import ContractorHomePage from './ContractorHomepage';
import HomeownerProjectOverview from './HomeownerProjectOverview';
import ServiceRequest from './ServiceRequest';
import ServiceApproved from './ServiceApproved';
import ServiceDeclined from './ServiceDeclined';
import ContractorOptionScreen from './ContractorOptionScreen';
import ContractorProjectOverview from './ContractorProjectOverview';
import NewRequestScreen from './NewRequestScreen';
import RequestAcceptedScreen from './RequestAcceptedScreen';
import RequestDeclinedScreen from './RequestDeclinedScreen';
import DraftQuotationScreen from './DraftQuotationScreen';
import FindPros from './FindPros';

const Stack = createStackNavigator();

const Quantocube = () => {
  return (
    <Provider store={store}>
      <NavigationContainer independent={true}>
        <Stack.Navigator initialRouteName="ContractorHomePage">
          <Stack.Screen name="ContractorHomePage" component={ContractorHomePage} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
          <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
          <Stack.Screen name="Verification" component={VerificationScreen} />
          <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
          <Stack.Screen name="HomeownerHomePage" component={HomeownerHomePage} />

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
          <Stack.Screen name="FindPros" component={FindPros} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default Quantocube;
