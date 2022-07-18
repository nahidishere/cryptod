import React from 'react';
import "./Currency.css";
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';

const Currency = (props) => {
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body className='p-5'>
                <h4 className='text-center text-uppercase text-success'>{props.coin?.name}</h4>
                <div className='currency-img'>
                    <img src={props.coin?.image} alt={props.coin?.name} />
                </div>
                <div className="row">
                    <p className='col-4'>Symbol :</p>
                    <p className='col'>{props.coin?.symbol}</p>
                </div>
                <div className="row">
                    <p className='col-4'>Current Price :</p>
                    <p className='col'>${props.coin?.current_price}</p>
                </div>
                <div className="row">
                    <p className='col-4'>Market Cap :</p>
                    <p className='col'>${props.coin?.market_cap}</p>
                </div>
                <div className="row">
                    <p className='col-4'>Total Volume :</p>
                    <p className='col'>${props.coin?.total_volume}</p>
                </div>
                <div className="row">
                    <p className='col-4'>24hr High:</p>
                    <p className='col text-success'>${props.coin?.high_24h}</p>
                </div>
                <div className="row">
                    <p className='col-4'>24hr Low:</p>
                    <p className='col text-danger'>${props.coin?.high_24h}</p>
                </div>
                <div className="d-flex justify-content-center">
                    <Button onClick={props.onHide} variant="info">Close</Button>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default Currency;