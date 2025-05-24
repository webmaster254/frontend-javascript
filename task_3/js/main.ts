/// <reference path="crud.d.ts" />
import { RowElement, RowID } from './interface';
import * as CRUD from './crud';

const row: RowElement = {
    firstName: 'Guillaume',
    lastName: 'Salva',
};

const newRowID: RowID = CRUD.insertRow(row);

// Create updated row with age field set to 23
const updatedRow: RowElement = {
    firstName: row.firstName,
    lastName: row.lastName,
    age: 23
};

// Update the row and delete
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);