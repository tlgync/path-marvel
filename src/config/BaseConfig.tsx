export const BaseConfig = {
  api: {
    release: {
      user: 'https://gateway.marvel.com/v1/public/',
    },
    debug: {
      user: 'http://gateway.marvel.com/v1/public/',
    },
    user: (url: string) => (BaseConfig.api.debug ? BaseConfig.api.debug.user.concat(url) : BaseConfig.api.release.user.concat(url)),
  },
  service: {
    user: {},
  },

  utilities: {
    hash: 'f8b119e7823c138dd9c45b2215a68bf3',
    marvelPublicKey: 'c761616a7a4eb08bd6a147d7d0f7a852',
    marvelPrivateKey: 'e2742147f7acb9d6ebedfc77f1b5ca7c808f7085',
  },
};
