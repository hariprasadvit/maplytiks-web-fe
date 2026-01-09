/* eslint-disable no-return-assign */
import validator from 'validator';

const formValidator = (rules, form, fn) => {
  const validate = state => {
    const validation = valid();
    rules
      .filter(d => d.method)
      .map(d => {
        if (!validation[d.field].isInvalid) {
          const fieldValue = state[d.field] && state[d.field].toString();
          const args = d.args || [];
          const validationMethod =
            typeof d.method === 'string' ? validator[d.method] : d.method;

          if (validationMethod(fieldValue, ...args, state) !== d.validWhen) {
            validation[d.field] = {
              isInvalid: true,
              message: d.message,
            };
            validation.isValid = false;
          }
        }
        return 0;
      });
    return validation;
  };
  const valid = () => {
    const validation = {};
    rules.map(
      rule => (validation[rule.field] = { isInvalid: false, message: '' }),
    );
    return { isValid: true, ...validation };
  };
  return fn === 'validate' ? validate(form) : valid();
};

export default formValidator;
