import React, { Component } from 'react';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import AddEmployeeForm from 'view/employee/AddEmployeeForm';
import { connect } from 'react-redux';

class AddEmployeePage extends Component {
    doSubmit = () => {};

    render() {
        return (
            <React.Fragment>
                <Breadcrumb
                    items={[
                        ['home', '/'],
                        ['Employees', '/ducation'],
                        ['Add'],
                    ]}
                />

                <ContentWrapper>
                    <PageTitle>{'Add New'}</PageTitle>

                    <AddEmployeeForm
                        saveLoading={false}
                        findLoading={false}
                        record={this.props.record}
                        onSubmit={this.doSubmit}
                    />
                </ContentWrapper>
            </React.Fragment>
        );
    }
}

function select(state) {
    return {};
}

export default connect(select)(AddEmployeePage);
