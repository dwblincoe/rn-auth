import { useState, useContext } from "react";
import { Alert } from "react-native";

import AuthContent from "../components/Auth/AuthContent";
import LoadingOverlay from "../components/ui/LoadingOverlay";

import { AuthContext } from "../store/auth-context";
import { createUser } from "../util/auth";

function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const { authenticate } = useContext(AuthContext);

  async function handleSumbit(data) {
    setIsAuthenticating(true);
    try {
      const response = await createUser(data);
      console.log(response);
      authenticate(response.idToken);
    } catch (error) {
      Alert.alert(
        "Authentication failed!",
        "Could not create user. Please check your input or try again later!"
      );
      setIsAuthenticating(false);
    }
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Creating user..." />;
  }

  return <AuthContent onAuthenticate={handleSumbit} />;
}

export default SignupScreen;
