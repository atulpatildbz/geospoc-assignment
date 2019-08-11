import React, { Component } from 'react'

class Popup extends Component {
    render() {
        return (
            <>
                <table>
                <tbody>
                    <tr>
                        <th>{this.props.tableInfo.pincode ? 'Pincode' : 'Locality'}</th>
                        <th>Population</th>
                        <th>Households</th>
                    </tr>
                    <tr>
                        <td>{this.props.tableInfo.pincode ? this.props.tableInfo.pincode : this.props.tableInfo.locality}</td>
                        <td>{this.props.tableInfo.population}</td>
                        <td>{this.props.tableInfo.households}</td>
                    </tr>
                    </tbody>
                </table>
            </>
        )
    }
}

export default Popup;
