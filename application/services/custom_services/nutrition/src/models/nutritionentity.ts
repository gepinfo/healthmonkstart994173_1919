
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const nutritionentitySchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   nutritionunit: String
})

const nutritionentityModel = mongoose.model('nutritionentity', nutritionentitySchema, 'nutritionentity');
export default nutritionentityModel;
