import React from 'react';

function FormAlertMessage(props) {
    return (
        <div className={props.hasError ? "" : "d-none"}>
            <div className="alert alert-warning" role="alert">
                <strong>Invalid form entries</strong> See below for fields that needs correction.
            </div>
        </div>
    )
}

export default FormAlertMessage;