import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Connexion from '../components/connexion';
import Contact from '../components/contacts';
import Conversation from '../components/convUnUser';
import ConvUnUser from '../components/conversations';
import Inscription from '../components/inscription';

const MainNavigator = createStackNavigator({
  Connexion: { screen: Connexion },
  Contact: { screen: Contact },
  Conversation: { screen: Conversation },
  ConvUnUser: { screen: ConvUnUser },
  Inscription: { screen: Inscription },
});

const App = createAppContainer(MainNavigator);

export default App;