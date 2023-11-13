import Home from "../../Pages/Home";
import AddMesa from "../../Pages/AddMesa";

import { colorScheme } from '../../colors/colorScheme'
import { Entypo } from '@expo/vector-icons'
import Chat from "../../Pages/Chat";

const { primaryBlue } = colorScheme;

const size = 24;

export const homeDrawer = [
  {
    id: 1,
    name: 'Home',
    component: Home,
    options: {
      title: 'Início',
      iconOnFocus: <Entypo name='home' color={primaryBlue} size={size} />,
      iconNotFocus: <Entypo name='home' color="#FFF" size={size} />
    }
  },

  {
    id: 2,
    name: 'AddMesa',
    component: AddMesa,
    options: {
      title: 'Adicionar Mesa',
      iconOnFocus: <Entypo name='plus' color={primaryBlue} size={size} />,
      iconNotFocus: <Entypo name='plus' color="#FFF" size={size} />
    }
  },

  {
    id: 3,
    name: 'Chat',
    component: Chat,
    options: {
      title: 'Chat',
      iconOnFocus: <Entypo name='plus' color={primaryBlue} size={size} />,
      iconNotFocus: <Entypo name='plus' color="#FFF" size={size} />
    }
  },


]
