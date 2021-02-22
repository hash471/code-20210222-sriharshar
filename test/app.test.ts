
import { API_ERRORS } from '../src/types/app.types';
import {csvfileread} from '../src/utilities/utility';
import {log} from 'console';


it('fileError', () => {
    // const consoleSpy = jest.spyOn(console, 'log');
    console.log = jest.fn();
    csvfileread('input2.csv',',');
    expect(console.log).toEqual(API_ERRORS.FILE_ERROR.message);
})