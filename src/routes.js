import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// stackNavigator cria um header no app
import Main from './pages/Main';
import User from './pages/User';
import Repository from './pages/Repository';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      User,
      Repository,
    },
    {
      headerLayoutPreset: 'center', // Alinhamento do texto no header
      headerBackTitleVisible: false,
      defaultNavigationOptions: {
        // Opções padrões do cabeçalho
        headerStyle: {
          backgroundColor: '#7159c1', // Cor de fundo
        },
        headerTintColor: '#FFF', // Cor da fonte
      },
    }
  )
);

export default Routes;
