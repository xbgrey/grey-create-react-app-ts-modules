import * as React from 'react';
import Routes from 'src/entry/Routes';
import { MyStore } from 'src/redux';
import { Provider } from 'react-redux';
import LocaleProvider from 'antd/lib/locale-provider';
import zhCN from 'antd/lib/locale-provider/zh_CN';

class App extends React.PureComponent {
    render() {
        return (
            <Provider store={MyStore.instance.store}>
                <LocaleProvider locale={zhCN}>
                    <Routes />
                </LocaleProvider>
            </Provider>
        );
    }
}

export default App;
