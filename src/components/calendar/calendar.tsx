import React, {useMemo, useState} from 'react';
import {MRT_Table, type MRT_ColumnDef, useMaterialReactTable} from 'material-react-table';
import {data1, data2, data3, type TableTyps, columnsData} from '../../mocks/make-data';
import {Button} from '@mui/material';
// @ts-ignore
import {mkConfig, generateCsv, download} from "export-to-csv";
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import Wrapper from "./calendar-style";

const csvConfig = mkConfig({
    fieldSeparator: ' , ',
    decimalSeparator: ' . ',
    useKeysAsHeaders: true,
});


const CalendarPage: React.FC = () => {
    const arrayData = [data1, data2, data3];
    const [count, setCount] = useState(1);
    const [currentData, setCurrentData] = useState(arrayData[count]);

    const handleNext = () => {
    setCount((prevCount) => (prevCount + 1) % arrayData.length);
        setCurrentData(arrayData[count]);
    }

    const handlePrev = () => {
        setCount((prevCount) => (prevCount - 1 + arrayData.length) % arrayData.length);
        setCurrentData(arrayData[count]);
    }

    const handleExportData = () => {
        const csv = generateCsv(csvConfig)(currentData);
        download(csvConfig)(csv);
    };

    const columns = useMemo<MRT_ColumnDef<TableTyps>[]>(
        () => columnsData,
        [],
    );

    const table = useMaterialReactTable({
        columns,
        data: currentData, //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
        enableKeyboardShortcuts: true,
        enableColumnActions: true,
        enableColumnFilters: false,
        enablePagination: true,
        enableSorting: false,
        mrtTheme: (theme) => ({
            baseBackgroundColor: theme.palette.background.default, //change default background color
        }),
        muiTableBodyRowProps: {hover: true},
        muiTableProps: {
            sx: {
                border: '1px solid rgba(81, 81, 81, .5)',
                caption: {
                    captionSide: 'top',
                },
            },
        },
        muiTableHeadCellProps: {
            sx: {
                border: '1px solid rgba(81, 81, 81, .5)',
                fontStyle: 'italic',
                fontWeight: 'bold',
            },
        },
        muiTableBodyCellProps: {
            sx: {
                border: '1px solid rgba(81, 81, 81, .5)',
            },
        },
    });


    return (
        <Wrapper>
            <div className="ui-buttons">
                <Button className="ui-button"
                        startIcon={<FileDownloadIcon/>}
                        onClick={handleExportData}
                >
                    Скачать расписание
                </Button>
                <div className="ui-buttons--toggle">
                    <Button
                        onClick={handlePrev}
                        className="ui-button"><span className="revers-arrow">&#10148; </span>&nbsp;Пред. неделя
                    </Button>
                    <Button
                        onClick={handleNext}
                        className="ui-button">След. неделя &#10148;</Button>
                </div>
            </div>
            <MRT_Table table={table}/>
        </Wrapper>
    );
};

export default CalendarPage;
