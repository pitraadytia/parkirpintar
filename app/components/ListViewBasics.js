import React from 'react';
import {
    ListView,
    View,
    AsyncStorage
} from 'react-native';
import { List, ListItem, Button } from 'react-native-elements'

export class ListViewBasics extends React.Component {
    // 初始化模拟数据
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([
                {
                    "id": "",
                    "id_plat": "",
                    "status": "",
                    "created_at": "",
                    "updated_at": "",
                    "deleted_at": null,
                    "ride": {
                        "id": "",
                        "merk": "",
                        "plat": "",
                        "type": "",
                        "created_at": "",
                        "updated_at": ""
                    }
                }
            ])
        };
    }

    componentDidMount() {
        this.getMoviesFromApi();
    }



    async  getMoviesFromApi() {

        try {
            let api_token = await AsyncStorage.getItem('token');
            await fetch('http://parkirpintar.wicida.ac.id/api/parking', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + api_token
                }
            }).then((response) => response.json())
                .then((responseData) => {
                    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
                    console.log(responseData.data);
                    this.setState({
                        dataSource: ds.cloneWithRows(responseData.data)
                    });
                }).done();
        } catch(error) {
            console.error(error);
        }
    }



    renderRow (row) {
        return (
            <ListItem
                title={row.ride.plat}
                subtitle={row.ride.type + '-' + row.ride.merk + ' (' + row.ride.created_at + ' )'}
            />
        )
    }

    render() {
        return (
            <View>
                <Button
                    backgroundColor="#03A9F4"
                    title="Lihat"
                    onPress={() => this.getMoviesFromApi()}
                />
                <List>
                    <ListView
                        renderRow={this.renderRow}
                        dataSource={this.state.dataSource}
                    />
                </List>
            </View>
        );
    }
}
