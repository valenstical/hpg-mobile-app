import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Home } from "./screens/Home";
import Products from "./screens/Products";
import TreatmentManual from "./screens/TreatmentManual";
import { LandingPage } from "./screens/LandingPage";
import Prospects from "./screens/Prospects";
import { Settings } from "./screens/Settings";
import { Tools } from "./screens/Tools";
import Tranings from "./screens/Trainings";
import Worksheet from "./screens/Worksheet";
import { bootstrap } from "./utils/bootstrap";
import { Profile } from "./screens/Profile";
import { Centers } from "./screens/Centers";
import { BMI } from "./screens/BMI";
import { Converter } from "./screens/Converter";

const routes = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        headerShown: false
      }
    },
    LandingPage: LandingPage,
    Centers: Centers,
    Products: {
      screen: Products
    },
    Prospects: {
      screen: Prospects
    },
    Settings: Settings,
    Tools: Tools,
    Trainings: Tranings,
    Ailments: {
      screen: TreatmentManual
    },
    Worksheet: Worksheet,
    Profile: Profile,
    BMI: BMI,
    Converter: Converter
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      headerShown: true,
      headerStyle: bootstrap.headerBackgroundStyle,
      headerTitleStyle: bootstrap.headerTitleStyle,
      headerTintColor: "white"
    }
  }
);

export default createAppContainer(routes);
