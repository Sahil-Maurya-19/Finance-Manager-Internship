import React, { useState, useEffect } from 'react'
import { Modal, Form, Input, Select, message, Table, DatePicker } from 'antd'
import Layout from '../components/Layouts/Layout'
import axios from 'axios'
import Spinner from '../components/Spinner'
import moment from 'moment'

const { RangePicker } = DatePicker;

const HomePage = () => {

    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [allTransaction, setAllTransaction] = useState([]);
    const [frequency, setFrequency] = useState('7');
    const [selectedDate, setSelectedDate] = useState([])
    const [type,setType] = useState('all')


    //table data 
    const columns = [
        {
            title: 'Ampunt',
            dataIndex: 'amount',
        },
        {
            title: 'Type',
            dataIndex: 'type',
        },
        {
            title: 'Description',
            dataIndex: 'description',
        },
        {
            title: 'Date',
            dataIndex: 'date',
            render : (text) => <span>{moment(text).format("YYYY-MM-DD")}</span>
        },
        {
            title: 'Actions',
        },

    ]


    //get all transaction

    //useEffect Hook 
    useEffect(() => {

        const getAllTransactions = async () => {
            try {
                const user = JSON.parse(localStorage.getItem("user"))
                setLoading(true)
                const res = await axios.post('/transactions/get-transaction', { userid: user._id, frequency , selectedDate, type });
                setLoading(false)
                setAllTransaction(res.data)
                console.log(res.data)
            } catch (error) {
                console.log(error);
                message.error("Fetch issue with Transaction")
            }
        };
        getAllTransactions();
    }, [frequency, selectedDate, type,]);

    //form handling
    const handleSubmit = async (values) => {
        try {
            const user = JSON.parse(localStorage.getItem("user"))
            setLoading(true)
            await axios.post('/transactions/add-transaction', { ...values, userid: user._id })
            setLoading(false)
            message.success("Transaction Added Successfully")
            setShowModal(false)
        } catch (error) {
            setLoading(false)
            message.error("Failed to add transaction")
        }
    }

    return (
        <Layout>
            {loading && <Spinner />}
            <div className='filters'>
                <div>
                    <h6>Select Frequency</h6>
                    <Select value={frequency} onChange={(values) => setFrequency(values)}>
                        <Select.Option value="7" >LAST 1 WEEK</Select.Option>
                        <Select.Option value="30">LAST 1 MONTH</Select.Option>
                        <Select.Option value="365">LAST 1 YEAR</Select.Option>
                        <Select.Option value="custom"> CUSTOM </Select.Option>
                    </Select>
                    {frequency === 'custom' && <RangePicker value={selectedDate} onChange={(values) => setSelectedDate(values)} />}
                </div>

                <div>
                    <h6>Select Type</h6>
                    <Select value={type} onChange={(values) => setType(values)}>
                        <Select.Option value="all" >ALL</Select.Option>
                        <Select.Option value="income">INCOME</Select.Option>
                        <Select.Option value="expense">EXPENSE</Select.Option>
                    </Select>
                    {frequency === 'custom' && <RangePicker value={selectedDate} onChange={(values) => setSelectedDate(values)} />}
                </div>
                <div>
                    <button className='btn btn-primary' onClick={() => setShowModal(true)}>Add New</button>
                </div>
            </div>
            <div className='content'>
                <Table columns={columns} dataSource={allTransaction} />
            </div>
            <Modal title="Add Transaction" open={showModal} onCancel={() => setShowModal(false)} footer={false}>
                <Form layout="vertical" onFinish={handleSubmit}>
                    <Form.Item label="Amount" name="amount">
                        <Input type="text" />
                    </Form.Item>

                    <Form.Item label="Type" name="type">
                        <Select>
                            <Select.Option value="income">Income</Select.Option>
                            <Select.Option value="expense">Expense</Select.Option>
                        </Select>
                    </Form.Item>

                    <Form.Item label="Description" name="description">
                        <Input type="text" />
                    </Form.Item>

                    <Form.Item label="Date" name="date">
                        <Input type="date" />
                    </Form.Item>

                    <div className="d-flex justify-content-end">
                        <button type="submit" className="btn btn-primary">SAVE</button>
                    </div>
                </Form>
            </Modal>
        </Layout>
    )
}

export default HomePage