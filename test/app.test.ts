import { API_ERRORS } from '../src/types/app.types';
import { csvFileRead } from '../src/utilities/utility';
import { stdout } from 'test-console';
import { assert } from 'chai';


it('fileerror',() => {
    var output = stdout.inspectSync(function() {
        csvFileRead('input2.csv',';');
    });
    assert.deepEqual(output, [ API_ERRORS.FILE_ERROR.message + "\n" ]);
})