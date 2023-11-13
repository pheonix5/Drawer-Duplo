import MesaInfo from '../../Pages/MesaInfo';
import Chat from '../../Pages/Chat';
import Perfil from '../../Pages/Perfil'

import { colorScheme } from '../../colors/colorScheme'
import { Entypo } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons';

const { primaryBlue } = colorScheme;

const size = 24;

export const chatDrawer = [
  {
    id: 1,
    name: 'MesaInfo',
    component: MesaInfo,
    options: {
      title: 'Informações da Mesa',
      iconOnFocus: <Entypo name='home' color={primaryBlue} size={size} />,
      iconNotFocus: <Entypo name='home' color="#FFF" size={size} />
    }
  },

  {
    id: 2,
    name: 'Chat',
    component: Chat,
    options: {
      title: 'Chat',
      iconOnFocus: <Entypo name="chat" size={size} color={primaryBlue} />,
      iconNotFocus: <Entypo name="chat" size={size} color='#FFF' />
    }
  },

]
