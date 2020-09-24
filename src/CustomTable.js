import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Container, Button, Row, Col, FormControl } from 'react-bootstrap';


export default function CustomTable({ tableData }) {

    const [getTableData, setTableData] = useState(tableData);

    let uniqueId = 1;
    tableData.map(data => {
        data.uniqueKey = uniqueId++;
        data.readOnlyDate = true;
        data.readOnlyLongShort = true;
        data.readOnlyEquity = true;
        data.readOnlyEntryPrice = true;
        data.readOnlyAccountBalance = true;
        data.readOnlyNoOfShares = true;
        data.readOnlyStopLossPrice = true;
        data.readOnlyTakeProfitPrice = true;
        data.readOnlyActualExitPrice = true;
        data.readOnlyTradeCosts = true;
        data.readOnlyPercentOfAccountRisked = true;
        data.readOnlyClosedPositionPL = true;
        data.readOnlyTradeScreenshot = true;
        data.readOnlyTradeNotes = true;
        data.readOnlyDisciplineRating = true;
        data.readOnlyEmotionalStateOfMind = true;
    })

    /*Methods related to Date Field*/
    const renderDate = (data) => {
        if (data.readOnlyDate) {
            return data.Date;
        } else {
            return (
                <FormControl
                    value={data.Date}
                    data-key={data.uniqueKey}
                    onChange={handleDateChange}
                />
            );
        }
    }

    function handleDateChange(event) {
        let currentData = [...getTableData];
        currentData.find(data => data.uniqueKey === +(event.target.dataset.key))
            .Date = event.target.value;
        setTableData(currentData);
    }

    function handleReadOnlyDate(event) {
        const index = getTableData.findIndex(data => data.uniqueKey === +(event.target.dataset.key));
        const currentRecord = getTableData[index];
        const newRecord = { ...currentRecord, readOnlyDate: !currentRecord.readOnlyDate };
        setTableData([
            ...getTableData.slice(0, index),
            newRecord,
            ...getTableData.slice(index + 1),
        ]);
        renderDate(newRecord);
    }

    /*Methods related to Long/short Field*/
    const renderLongShort = (data) => {
        if (data.readOnlyLongShort) {
            return data['Long/Short'];
        } else {
            return (
                <FormControl
                    value={data['Long/Short']}
                    data-key={data.uniqueKey}
                    onChange={handleLongShortChange}
                />
            );
        }
    }

    function handleLongShortChange(event) {
        let currentData = [...getTableData];
        currentData.find(data => data.uniqueKey === +(event.target.dataset.key))
        ['Long/Short'] = event.target.value;
        setTableData(currentData);
    }

    function handleReadOnlyLongShort(event) {
        const index = getTableData.findIndex(data => data.uniqueKey === +(event.target.dataset.key));
        const currentRecord = getTableData[index];
        const newRecord = { ...currentRecord, readOnlyLongShort: !currentRecord.readOnlyLongShort };
        setTableData([
            ...getTableData.slice(0, index),
            newRecord,
            ...getTableData.slice(index + 1),
        ]);
        renderLongShort(newRecord);
    }

    /*Methods related to Equity Field*/
    const renderEquity = (data) => {
        if (data.readOnlyEquity) {
            return data.Equity;
        } else {
            return (
                <FormControl
                    value={data.Equity}
                    data-key={data.uniqueKey}
                    onChange={handleEquityChange}
                />
            );
        }
    }

    function handleEquityChange(event) {
        let currentData = [...getTableData];
        currentData.find(data => data.uniqueKey === +(event.target.dataset.key))
            .Equity = event.target.value;
        setTableData(currentData);
    }

    function handleReadOnlyEquity(event) {
        const index = getTableData.findIndex(data => data.uniqueKey === +(event.target.dataset.key));
        const currentRecord = getTableData[index];
        const newRecord = { ...currentRecord, readOnlyEquity: !currentRecord.readOnlyEquity };
        setTableData([
            ...getTableData.slice(0, index),
            newRecord,
            ...getTableData.slice(index + 1),
        ]);
        renderEquity(newRecord);
    }

    const handleSave = () => {
        console.log(JSON.stringify(getTableData));
    }

    return (
        <Container fluid>
            <Row className="justify-content-md-center">
                <Col md="auto" className="p-1">
                    <Button variant="dark" onClick={handleSave}>
                        Save
                </Button>
                </Col>
            </Row>

            <Table responsive striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Date</th>
                        <th>Long/Short</th>
                        <th>Equity</th>
                        <th>Entry Price</th>
                        <th>Account Balance</th>
                        <th>No. of Shares</th>
                        <th>Stop Loss Price</th>
                        <th>Take Profit Price</th>
                        <th>Actual Exit Price</th>
                        <th>Trade Costs</th>
                        <th>% Of Account Risked</th>
                        <th>Closed Position P/L</th>
                        <th>Trade Screenshot</th>
                        <th>Trade Notes</th>
                        <th>Discipline Rating</th>
                        <th>Emotional State of Mind</th>
                    </tr>
                </thead>
                <tbody>
                    {getTableData.map((data, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td onDoubleClick={handleReadOnlyDate} data-key={data.uniqueKey}
                                onBlur={handleReadOnlyDate}>
                                {renderDate(data)}
                            </td>
                            <td onDoubleClick={handleReadOnlyLongShort}
                                data-key={data.uniqueKey} onBlur={handleReadOnlyLongShort}>
                                {renderLongShort(data)}
                            </td>
                            <td onDoubleClick={handleReadOnlyEquity}
                                data-key={data.uniqueKey} onBlur={handleReadOnlyEquity}>
                                {renderEquity(data)}
                            </td>
                            <td>{data['Entry Price']}</td>
                            <td>{data['Account Balance']}</td>
                            <td>{data['No. of Shares']}</td>
                            <td>{data['Stop Loss Price']}</td>
                            <td>{data['Take Profit Price']}</td>
                            <td>{data['Actual Exit Price']}</td>
                            <td>{data['Trade Costs']}</td>
                            <td>{data['% Of Account Risked']}</td>
                            <td>{data['Closed Position P/L']}</td>
                            <td>{data['Trade Screenshot']}</td>
                            <td>{data['Trade Notes']}</td>
                            <td>{data['Discipline Rating']}</td>
                            <td>{data['Emotional State of Mind']}</td>
                        </tr>
                    ))}

                </tbody>
            </Table>
        </Container>
    );
}
