const Joi = require('joi');

const ImageHeadersSchema = Joi.object({
  'content-type': Joi.string().valid(
    'image/jpeg',
    'image/avif',
    'image/png',
    'image/apng',
    'image/gif',
    'image/webp',
  ).required(),
}).unknown();

module.exports = { ImageHeadersSchema };
