import React, { Component } from 'react'
import { Panel } from 'primereact/components/panel/Panel';
import { Link } from 'react-router-dom';
import 'primereact/resources/themes/omega/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';



class ProductDetails extends Component {

    render() {
        const styles = {
            btn1: {
                marginLeft: '10px'
            },
            panelhederBackground: {
                backgroundColor: '#0275d8'
            }
        }

        return (
            <div>

                <div className="content-section implementation">

                    {/* Code to add panel dynamically  */}
                    <Panel header={this.props.prodata.product_name} toggleable={true} >
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <label>Phone No: </label> {this.props.prodata.mobile_number}<br />
                                    <label>Custome Name: </label> {this.props.prodata.customer_name}
                                    <br />

                                </div>
                                <div className="col-md-6">
                                    <label>Status: </label> {this.props.prodata.status}<br />
                                    <label>Bill Date: </label> {this.props.prodata.generate_bill_date}

                                </div>
                                <div>

                                </div>

                            </div>
                            <div className="row">

                                <button type="button" style={styles.btn1} className="btn btn-primary  col-8 mb-1 col-md-3 ml-2">
                                    <Link className="text-white" to={`/billdetails/${this.props.prodata.id}`}>View bill</Link></button>
                                <button type="button" style={styles.btn1} className="btn btn-primary col-8 mb-1 col-md-3 ml-2"> View Plan</button>
                                <button type="button" style={styles.btn1} className="btn btn-primary col-8 col-md-3 ml-2"> Support</button>
                            </div>
                        </div>

                    </Panel>

                </div>
            </div>
        )
    }
}
export default ProductDetails;