import { Provider } from 'react-redux'

import { store } from './store'
import ContactForm from './components/ContactForm'
import ContactList from './components/ContactList'

import * as S from './styles'


const App = () => {
  return (
    <Provider store={store}>
      <S.GlobalStyle />
      <S.Container>
          <ContactForm />
          <ContactList />
      </S.Container>
    </Provider>
  )
}

export default App