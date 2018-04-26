import React from 'react';
import PropTypes from 'prop-types';
import ButtonCB from '../ButtonCB';

const SubmitButton = function SubmitButton({
  submitResponse,
  toggleModal,
  response,
  submitted,
  id,
}) {
  const enabled = response && response.length;
  const title = (submitted) ? 'View Answer' : 'Submit';

  const handlePress = function handlePress(pageId) {
    if (!submitted) return submitResponse(pageId);
    return toggleModal(pageId);
  };

  return (
    <ButtonCB
      onPress={() => handlePress(id)}
      disabled={!enabled}
    >
      {title}
    </ButtonCB>
  );
};

const propTypes = {
  id: PropTypes.string.isRequired,
  response: PropTypes.string,
  submitResponse: PropTypes.func.isRequired,
  submitted: PropTypes.bool,
  toggleModal: PropTypes.func.isRequired,
};

const defaultProps = {
  response: '',
  submitted: false,
};

SubmitButton.propTypes = propTypes;
SubmitButton.defaultProps = defaultProps;

export default SubmitButton;

