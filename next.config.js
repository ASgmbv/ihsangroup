const nextTranslate = require("next-translate");

module.exports = {
   trailingSlash: true,
   ...nextTranslate(),
   i18n: undefined,
};

// const nextTranslate = require("next-translate");

// module.exports = nextTranslate();

// const nextTranslate = require("next-translate");

const config = { trailingSlash: true, i18n: undefined };

module.exports = nextTranslate(config);
