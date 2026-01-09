const initialState = {
  mediaPages: {
    facebook: [],
    twitter: [],
    instagram: [],
  },
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'saveAll':
      console.log('payload', payload);
      return {
        mediaPages: payload,
      };

    default:
      return state;
  }
};
