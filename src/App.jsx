import Router from './shared/Router';
import { Provider } from 'react-redux';
import store from './redux/config/configStore';
import GlobalStyles from './globalStyle/GlobalStyle';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // 쿼리의 캐싱을 10분
      cacheTime: 60000,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <GlobalStyles />
        <Router />
        <ReactQueryDevtools />
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
