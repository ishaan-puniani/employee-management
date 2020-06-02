import { Button, Form } from 'antd';
import { Formik } from 'formik';
import React, { Component } from 'react';
import ViewFormItem from 'view/shared/form/items/ViewFormItem';
import Spinner from 'view/shared/Spinner';
import FormWrapper, {
    tailFormItemLayout,
} from 'view/shared/styles/FormWrapper';
import FormSchema from 'view/shared/form/formSchema';
import InputFormItem from 'view/shared/form/items/InputFormItem';
import StringField from 'modules/shared/fields/stringField';

const fields = {
    id: new StringField('id', 'id', {
        required: true,
    }),
    name: new StringField('name', 'name', {
        required: true,
    }),
};
class AddEmployeeForm extends Component {
    schema = new FormSchema(fields.id, [fields.name]);

    handleSubmit = (values) => {};

    initialValues = () => {
        const record = this.props.record;
        return this.schema.initialValues(record || {});
    };

    renderForm() {
        const { saveLoading, isEditing } = this.props;

        return (
            <FormWrapper>
                <Formik
                    initialValues={this.initialValues()}
                    validationSchema={this.schema.schema}
                    onSubmit={this.handleSubmit}
                    render={(form) => {
                        return (
                            <Form
                                onSubmit={form.handleSubmit}
                            >
                                {isEditing && (
                                    <ViewFormItem
                                        name={
                                            fields.id.name
                                        }
                                        label={
                                            fields.id.label
                                        }
                                    />
                                )}

                                <InputFormItem
                                    name={fields.name.name}
                                    label={
                                        fields.name.label
                                    }
                                    required={
                                        fields.name.required
                                    }
                                    autoFocus
                                />

                                <Form.Item
                                    className="form-buttons"
                                    {...tailFormItemLayout}
                                >
                                    <Button
                                        loading={
                                            saveLoading
                                        }
                                        type="primary"
                                        onClick={
                                            form.handleSubmit
                                        }
                                        icon="save"
                                    >
                                        save
                                    </Button>

                                    <Button
                                        disabled={
                                            saveLoading
                                        }
                                        onClick={
                                            form.handleReset
                                        }
                                        icon="undo"
                                    >
                                        reset
                                    </Button>

                                    {this.props.onCancel ? (
                                        <Button
                                            disabled={
                                                saveLoading
                                            }
                                            onClick={() =>
                                                this.props.onCancel()
                                            }
                                            icon="close"
                                        >
                                            cancel
                                        </Button>
                                    ) : null}
                                </Form.Item>
                            </Form>
                        );
                    }}
                />
            </FormWrapper>
        );
    }

    render() {
        const {
            isEditing,
            findLoading,
            record,
        } = this.props;

        if (findLoading) {
            return <Spinner />;
        }

        if (isEditing && !record) {
            return <Spinner />;
        }

        return this.renderForm();
    }
}

export default AddEmployeeForm;
